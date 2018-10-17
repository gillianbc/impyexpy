"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilities = exports.utilfuncs = void 0;

var _apple = require("./apple");

function doSomething() {
  console.log('Do something');
}

;

function doOther() {
  console.log('Do other');
}

const utilfuncs = {
  applesauce: _apple.applesauce
};
exports.utilfuncs = utilfuncs;
const utilities = {
  doSomething,
  doOther
};
exports.utilities = utilities;