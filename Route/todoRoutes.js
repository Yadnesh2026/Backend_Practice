const {
  getAllTodos,
  createTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo
} = require("../controllers/todoController");
const {register}= require("../controllers/authController")


const express = require("express");
const router = express.Router();

//--------------GET All-----------------------
router.get("/todos",getAllTodos );

//-------------POST Route------------
router.post("/todos",postRoute);

//--------Single Route------------
router.get("/todos/:id",getSingleTodo)

//-------PUT Req--------------
router.put("/todos/:id",Update)

//--------DELETE Route----------
router.delete("/todos/:id",delete1)



//Authentication
router.post("/register",register);

//Login Route
router.post("login",)

module.exports = router ;