'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _project = require('./components/project');

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  function handleClick(fact) {
    return function (e) {
      e.preventDefault();
    };
  }
  var items = props.facts.map(function (fact, i) {
    return _react2.default.createElement(
      'li',
      { key: i },
      _react2.default.createElement(
        'a',
        { href: '#', onClick: handleClick(fact) },
        _react2.default.createElement(_project2.default, { fact: fact })
      )
    );
  });
  return _react2.default.createElement(
    'ul',
    null,
    ' ',
    items,
    ' '
  );
}