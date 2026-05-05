const mongoose = require("mongoose");
const Todo = require("../models/Todo");

//---------GET ALL TODOS--------------------------
const getAllTodos = async (req, res,next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch {
    next(err)
  }
};

//---------POST Route----------------
const postRoute = async (req, res) => {
    try{
        const todo = await Todo.create(req.body);
        res.status(201).json(todo)
    }catch(err){
         next(err)
    }
};

//---------------GET Single Route----------------------
const getSingleTodo = async (req, res,next) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "ID not able to find" });
    }
    res.json(todo)
  } catch(err) {
     next(err)
  }
}

//-----------UPDATE Route-----------------------------
const Update = async (req, res,next) => {
  try {
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
  } catch(err) {
     next(err)
  }
}

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
