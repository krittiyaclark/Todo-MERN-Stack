"use strict";

var _require = require('express'),
    Router = _require.Router;

var homeController = require('../controllers/home');

var todosController = require('../controllers/todos');

var router = Router();
router.get('/', homeController.getIndex);
router.get('/todos', todosController.getTodos);
module.exports = router;