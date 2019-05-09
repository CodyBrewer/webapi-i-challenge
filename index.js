// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();
server.use(express.json());

const { find, findById, insert, update, remove } = db;

//post - /api/users - create a user using the information sent inside the database
server.post("/api/users", (req, res) => {
  const newUser = req.body;

  insert(newUser)
    .then(addedUser => {
      res.status(201).json(addedUser);
    })
    .catch(({ code, message }) => {
      res.status(code).json({ err: message });
    });
});

//get - /api/users - returns an array of all the user objects contained in the database
server.get("/api/users", (req, res) => {
  find()
    .then(allUsers => {
      res.json(allUsers);
      res.status(200);
    })
    .catch(err => {
      res.status(500).res.send(err);
    });
});
//get - /api/users/:id - returns the user object with the specified `id`
server.get('/api/users/:id', (req, res) => {
    const { id} = req.params
    
    findById(id)
    .then(user =>{
        res.json(user);
        res.status(200);
    })
    .catch(err => {
        res.status(500).res.send(err);
      });
   
    
}) 
//delete - /api/users/:id removes the user with the specified `id` and returns the deleted user.

//put - /api/users/:id - updates the user with the specified `id` using data from the ` request body`. Returns the modified document, **NOT the origina;**.

//listen
server.listen(5000, () => {
  console.log("Listening on port 5000");
});
