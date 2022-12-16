const { readFile, writeFile } = require('fs');

readFile('content/first.txt', 'utf8', (err, result) => {
    if (err) throw err;

    const first = result;
    console.log(first)

    readFile('content/second.txt', 'utf8', (err, result) => {
        if (err) throw err;

        const second = result;
        console.log(second)

        writeFile(
            './content/result_async.txt',
            `This is the async result: ${first}, ${second}.`,
            (err, result) => {
                if (err) throw err;
                console.log(result)
            }
        )
    })
})