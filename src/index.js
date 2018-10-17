import fs from 'fs';
import utilities from './util';
console.log('Hello World');

utilities.doOther();
utilities.doSomething();

let str = 'doOther';

utilities[str]();

utilities.fruitsauce();