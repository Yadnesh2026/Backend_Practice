const mongoose = require("mongoose");
const Todo = require("../models/Todo");
const asyncHandler = require("../utils/asyncHandler")

//---------GET ALL TODOS--------------------------
const getAllTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

//---------POST Route----------------
const postRoute = asyncHandler(async (req, res) => {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo)
});

//---------------GET Single Route----------------------
const getSingleTodo = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "ID not able to find" });
    }
    res.json(todo)
});

//-----------UPDATE Route-----------------------------
const Update = asyncHandler(async (req, res,next) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "This is not id" });
    }

    const { task, completed } = req.body;

    if (task) {
      todo.task = task;
    }
    if (completed !== undefined) {
      todo.completed = completed;
    }

    const saveTodo = await todo.save();

    res.status(200).json(saveTodo);
});

//---------DELETE Route--------------------------
const delete1 = async (req, res,next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    res.json(todo);
  } catch(err) {
     next(err)
  }
};

module.exports = { getAllTodos, postRoute,getSingleTodo ,Update,delete1};
