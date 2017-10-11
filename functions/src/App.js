'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {
  function handleClick(fact) {
    return function (e) {
      e.preventDefault();
      console.log(fact);
    };
  }
  var items = props.facts.map(function (fact, i) {
    return _react2.default.createElement(
      'li',
      { key: i },
      _react2.default.createElement(
        'a',
        { href: '#', onClick: handleClick(fact) },
        fact.text
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