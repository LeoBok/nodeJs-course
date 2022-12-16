// CommonJS, every file in node  is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./4_names');
const sayHi = require('./5_utils');
require('./7_mindGranade')

sayHi(john)
sayHi(peter)
sayHi('susan')