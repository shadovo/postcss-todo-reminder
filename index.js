var postcss = require('postcss');

module.exports = postcss.plugin('todo-reminder', function(opts) {
  opts = opts || {};

  var color = opts.color || 'orange';

  return function(css) {

    css.append('[data-todo]{outline: 2px dashed ' + color + ';}');

  };

});
