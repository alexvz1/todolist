const express = require('express');
const router = express.Router();
const Task = require('../model/task');

router.get('/', (req, res) => {
  Task.find({}).sort('-dateAdded').exec( function(err,tasks){
    if(err) console.log('err')
    res.json(200, {status: 'ok', message: 'tareas', items: tasks})
  })
});

router.post('/', (req, res) => {
  let description = req.body.description;
  let task = req.body.task;
  let newTask = {
    title: task, 
    description: description, 
    dateAdded: new Date(),
    status: false
  };

  Task.create(newTask, (err, task) => {
    if(err) console.log(err);
    res.status(200).json({status: 'ok', message: 'tarea agregada'})
  }); 
});

router.get('/change/:id', (req, res) => {
  let id = req.params.id;
  Task.findById(id, (err, task) => {
    if(err) console.log(err);
    task.status = !task.status;
    task.save()
      .then(() => res.status(200).json({status: 'ok', message: 'tarea actualizada'}))
  })
});

router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  Task.findById(id, (err, task) => {
    if(err) console.log(err);
    task.status = !task.status;
    task.remove()
      .then(() => res.status(200).json({status: 'ok', message: 'tarea eliminada'}))
  })
});

module.exports = router;