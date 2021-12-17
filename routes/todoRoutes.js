const express = require("express");
const { getAllTodos, getTodoById, createToDo, deleteToDo, updateToDo } = require("../Controllers/todoControllers.js");
const {Todo} = require ("../models/todo.js");

const router = express.Router();

router.get("/getAllTodos", getAllTodos);
router.get("/getTodoById:id", getTodoById);
router.get("/createTodo", createToDo);
router.get("/deleteTodo/id", deleteToDo);
router.get("/updateTodo/id", updateToDo);

module.exports = router;