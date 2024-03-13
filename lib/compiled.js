"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(obj === null || obj === void 0 ? void 0 : obj.a, obj === null || obj === void 0 ? void 0 : obj.d);
function asyncFunc() {
  return _asyncFunc.apply(this, arguments);
}
function _asyncFunc() {
  _asyncFunc = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, 1000);
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _asyncFunc.apply(this, arguments);
}
asyncFunc();
var arr2 = [1, 2, 3];
var results = arr2.flatMap(function (item) {
  return item + 1;
});
console.log(results);
var Person = /*#__PURE__*/(0, _createClass2.default)(function Person() {
  (0, _classCallCheck2.default)(this, Person);
  (0, _defineProperty2.default)(this, "name", 'morrain');
  (0, _defineProperty2.default)(this, "age", 18);
});
(0, _defineProperty2.default)(Person, "a", 'a');
(0, _defineProperty2.default)(Person, "b", void 0);
var person = new Person();
console.log(person);
