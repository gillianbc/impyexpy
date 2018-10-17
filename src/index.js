import fs from 'fs';
import {utilfuncs, utilities} from './util';
console.log('Hello World');

utilities.doOther();

utilities.doSomething();

let str = 'doOther';

utilities[str]();

utilfuncs.applesauce();