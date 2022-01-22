const fs = require('fs')

const patches = [
    {
        package: "bcryptjs",
        version: "3.4.3",
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
    console.log(patch.package, patch.version)
})

fs.readFile('test.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/"bcryptjs": ".*"/, '"bcryptjs": "3.4.3"');

  fs.writeFile('test.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});