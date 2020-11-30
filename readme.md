npm i
npm test

abc@xyz.com/Test@123

why these tests?

why taiko?

differences to a normal test 
 - tests have interdependancy
 - there would be more scenarios per feature (unhappy paths)
 - Passwords and other secrets would be kept in a .env file not uploaded publicly (used passwords)
 - Configuration would be extracted to a file so other enviroments could be targeted simply

 notes
 Some of these "passes" would be raised as the wording on a lot of the failure messages is very very poor.