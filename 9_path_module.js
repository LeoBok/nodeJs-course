const path = require('path')

const fileName = path.join('/folder', 'subfolder', 'test.txt')

const baseName = path.basename(fileName)

const absolute = path.resolve('folder', 'subfolder', 'test.txt')

console.log(absolute)