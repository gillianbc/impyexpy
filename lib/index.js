"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("./util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Hello World');

_util.default.doOther();

_util.default.doSomething();

let str = 'doOther';

_util.default[str]();

_util.default.fruitsauce();