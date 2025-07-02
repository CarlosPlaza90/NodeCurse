const fs = require('node:fs')

fs.readFile('./testasync.txt', 'utf-8', (err, text) => {
    console.log(text)
})

console.log("mientras tanto... 1")
console.log("mientras tanto... 2")

