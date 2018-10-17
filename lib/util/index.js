"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apple = _interopRequireDefault(require("./apple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doSomething() {
  console.log('Do something');
}

;

function doOther() {
  console.log('Do other');
}

var _default = {
  doSomething,
  doOther,
  fruitsauce: _apple.default
};
exports.default = _default;