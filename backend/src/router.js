const express = require('express');

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

// router.get('/tasks', (req, res)  => res.status(200).send('O router tá funcionando'));
router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateFildTitle, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', 
  tasksMiddleware.validateFildTitle,
  tasksMiddleware.validateFildStatus,
  tasksController.updateTask
);

module.exports = router;