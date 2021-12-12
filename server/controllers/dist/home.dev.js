"use strict";

var path = require('path');

var Todo = require('../models/Todo');

module.exports = {
  getIndex: function getIndex(req, res) {
    var todos;
    return regeneratorRuntime.async(function getIndex$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(Todo.find());

          case 3:
            todos = _context.sent;
            res.render(path.join(__dirname, 'src', 'App.js'), {
              todos: todos
            });
            console.log(todos);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error('Not serving App.js');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  }
};