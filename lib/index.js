"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Hello World');

_util.utilities.doOther();

_util.utilities.doSomething();

let str = 'doOther';

_util.utilities[str]();

_util.utilfuncs.applesauce();