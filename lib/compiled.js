"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(obj === null || obj === void 0 ? void 0 : obj.a, obj === null || obj === void 0 ? void 0 : obj.d);
function asyncFunc() {
  return _asyncFunc.apply(this, arguments);
} //
// const arr2 = [1, 2, 3];
//
// const results = arr2.flatMap(item => item + 1);
// console.log(results);
//
// const values = [1, 10, 21, 2];
// const sortedValues = values.toSorted((a, b) => a - b);
// console.log(sortedValues); // [1, 2, 10, 21]
// console.log(values); // [1, 10, 21, 2]
function _asyncFunc() {
  _asyncFunc = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve('done');
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
function getData() {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var data;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return asyncFunc();
        case 2:
          data = _context2.sent;
          console.log(data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getData.apply(this, arguments);
}
