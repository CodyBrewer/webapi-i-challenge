// implement your API here
const express = require("express");
const server = express();
const db = require("./data/db.js");
server.use(express.json());

const {find, findById, insert, update, remove} = db;

//post - /api/users - create a user using the information sent inside the database
server.post('/api/users', (res, req) => {
    const newUser = req.body;
    
    insert(newUser)
    .then(addedUser => res.status(201).json(addedUser))
    .catch(({ code, message }) => {
    res.status(code).json({ err: message })
    })
});

//get - /api/users - returns an array of all the user objects contained in the database
server.get('/api/users', (res, req) => {

})
//get - /api/users/:id - returns the user object with the specified `id`

//delete - /api/users/:id removes the user with the specified `id` and returns the deleted user.

//put - /api/users/:id - updates the user with the specified `id` using data from the ` request body`. Returns the modified document, **NOT the origina;**.


//listen
server.listen(5000, () => {
    console.log("Listening on port 5000");
  });