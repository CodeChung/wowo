const fs = require('fs')

const patches = [
    {
        package: "bcryptjs",
        version: "0.4.3",
    },
    {
        package: "cors",
        version: "6.9.6",
    },
    {
        package: "generate-password",
        version: "^1.0.1",
    },
    {
        package: "xss",
        version: "0.0.1",
    },
]

patches.forEach(patch => {
    try {
        console.log("Patching: ", patch.package, patch.version)
        overwriteJson('package.json', patch.package, patch.version)
    } catch (error) {
        console.log("ERR", error)
    }
})

/*
    Takes the vulnerable library & the patched version
    to build a string to replace the vulnerable line in package.json
*/
function buildPatchedVersion(library, version) {
    const patchedString = `"${library}": "${version}"`
    return patchedString
}

/*
    This function takes in 
    - file (eg. package.json)
    - vulnerable library & version patch
    and overwrites the file to update vulnerable packages

*/
function overwriteJson(file, library, version) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        const stringToReplace = `"${library}": ".*"`
        const regexToReplace = new RegExp(stringToReplace)
        const patchedString = buildPatchedVersion(library, version)
        const regexPatch  = new RegExp(patchedString)
        console.log("REPLACING ",stringToReplace, " WITH ", patchedString)
        const result = data.replace(regexToReplace, regexPatch);

        fs.writeFile('test.js', result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}

