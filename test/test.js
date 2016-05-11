var fs      = require('fs');
var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (name, opts) {
  var input  = read('test/fixtures/' + name + '.css');
  var output = read('test/fixtures/' + name + '.out.css');
  expect(postcss(plugin(opts)).process(input).css).to.eql(output);
};

var read = function (path) {
  return fs.readFileSync(path, 'utf-8');
};

describe('postcss-opacity', function () {

  describe('adds fallback filter', function () {

    it('Adds default styling if no options are present', function () {
      test('simple');
    });

    it('Adds cutom styling based on options ', function () {
      test('confed', {color: 'green'});
    });

  });

});
