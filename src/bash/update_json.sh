rm package.json
touch package.json
echo "{
  \"name\": \"express-boilerplate\",
  \"version\": \"0.0.1\",
  \"description\": \"\",
  \"main\": \"src/server.js\",
  \"scripts\": {
    \"test\": \"mocha --require test/setup.js\",
    \"dev\": \"nodemon src/server.js\",
    \"start\": \"node src/server.js\",
    \"predeploy\": \"npm audit\",
    \"deploy\": \"git push heroku master\"
  },
  \"keywords\": [],
  \"author\": \"Harry Chung\",
  \"license\": \"MIT\",
  \"dependencies\": {
    \"bcryptjs\": \"^2.4.3\",
    \"cookie-parser\": \"^1.4.4\",
    \"cors\": \"^2.8.5\",
    \"dotenv\": \"^6.2.0\",
    \"express\": \"^4.16.4\",
    \"generate-password\": \"^1.5.1\",
    \"helmet\": \"^3.21.3\",
    \"jsonwebtoken\": \"^8.5.1\",
    \"knex\": \"^0.20.10\",
    \"logger\": \"0.0.1\",
    \"mariadb\": \"^2.2.0\",
    \"morgan\": \"^1.9.1\",
    \"mysql\": \"^2.18.1\",
    \"nodemailer\": \"^6.4.4\",
    \"xss\": \"^1.0.6\"
  },
  \"devDependencies\": {
    \"chai\": \"^4.2.0\",
    \"mocha\": \"^5.2.0\",
    \"nodemon\": \"^1.18.9\",
    \"supertest\": \"^3.3.0\"
  }
}
" >> package.json