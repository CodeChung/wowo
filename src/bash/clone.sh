# create temporary directory to clone affected repos
mkdir temp_repos
cd temp_repos
# clone affected repos: TODO consider running node script that iterates & clones repos
git clone https://github.com/CodeChung/testaroni.git
cd testaroni
# run script to analyze affected libraries & update
sh ../../update_json.sh
git add .
git commit -m 'test1'
git push
cd ..
cd ..
# delete temporary directory
rm -rf temp_repos
