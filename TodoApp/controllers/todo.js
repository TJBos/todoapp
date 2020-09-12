//get Router from Express - done through destructuring here
const { Router } = require("express");
const router = Router();
//Bring in data from models (this case simply the array)
const todos = require("../models/todo");


//ROUTES

//INDEX route
router.get("/", (req, res) => {
    //send todos to index.jsx template
    res.render("todo/index.jsx", { todos });
});
//NEW and CREATE route
router.get('/new', (req, res) => {
    res.render("todo/new.jsx");
})

router.post("/", (req, res) => {
    todos.push(req.body.todo);
    res.redirect("/todo");
})

//SHOW route //show an individual todo
router.get("/:index", (req, res) => {
    res.render("todo/show.jsx", {
      todo: todos[req.params.index],
      index: req.params.index,
    });
  });

//DELETE

  router.delete("/:index", (req, res) => {
    todos.splice(req.params.index, 1);
    res.redirect("/todo/");
  });

//EDIT and UPDATE

//EDIT - Page to update your todo
router.get("/:index/edit", (req, res) => {
  res.render("todo/edit.jsx", {
    index: req.params.index,
    todo: todos[req.params.index],
  });
});

//UPDATE - Update the specified record
router.put("/:index", (req, res) => {
  todos[req.params.index] = req.body.todo;
  res.redirect("/todo/");
});


//Export Router to be used in Server.js
module.exports = router;
