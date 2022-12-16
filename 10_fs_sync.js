const { readFileSync, writeFileSync, write } = require('fs')

console.log('starting task')

const first = readFileSync('./content/first.txt', 'utf8')
console.log(first)

const second = readFileSync('./content/second.txt', 'utf8')
console.log(second)

writeFileSync(
    './content/result_sync.txt',
    `This is the sync result: ${first}, ${second}.`,
    { flag: 'a'}
)

console.log('ending task')
console.log('starting new task')