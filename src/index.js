// So we're just giving the imports from ./util/index.js a localname of utils
import utils from './util';
console.log('Hello World');

//Run a named function. We could have read this name from a config file somewhere
utils['cranberrysauce']();
