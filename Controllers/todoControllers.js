const {response} = require ("express");

const {Todo} = require ("../models/todo.js");

const getAllTodos = (req,res) => {
    Todo.find()
    .then((response) => {
    res.status(200).send(response);
})
.catch((err) => {
    res.status(500).send("an error occured");
})
}

const getTodoById = (req,res) => {
    const id = req.params.id
    Todo.findById(id)
    .then((response) => {
    res.status(200).send(response);
})
.catch((err) => {
    res.status(500).send("an error occured");
})
}

const createToDo = (req,res) => {
    const todo = new Todo(req.body);
    Todo.save()
    .then((response) => {
    res.status(201).send(response);
})
.catch((err) => {
    res.status(500).send("an error occured");
})
}

const deleteToDo = (req,res) => {
    const id = req.params.id
    Todo.findByIdAndDelete(id)
    .then((response) => {
    res.status(200).send("Todo with specific ID deleted");
})
.catch((err) => {
    res.status(500).send("an error occured");
})
}

const updateToDo = (req,res) => {
    const id = req.params.id
    Todo.findByIdAndUpdate({_id:id}, req.body)
    .then((response) => {
    res.status(200).send(response);
})
.catch((err) => {
    res.status(500).send("an error occured");
})
}

module.exports = {
    getAllTodos,
    getTodoById,
    createToDo,
    deleteToDo,
    updateToDo,
}