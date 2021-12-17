const { Router } = require('express')
const homeController = require('../controllers/home')
const todosController = require('../controllers/todos')
const router = Router()

router.get('/', homeController.getIndex)
router.get('/todos', todosController.getTodos)

module.exports = router
