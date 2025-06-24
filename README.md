# express-validation-example

This repo is for demonstrating basic user input validation for user data sent to an express server

## how to use

type `npm run start` to start the server then send a post request to this url `http://localhost:3000/zod/user`. The request must send json body with name and password fields.
name must be 4 characters long while password must be 8. A 400 status and error message should return if these constraints are broken.
