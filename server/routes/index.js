const { Router } = require('express')
const todosController = require('../controllers/todos')
const router = Router()

router.get('/todos', todosController.getTodos)

module.exports = router
