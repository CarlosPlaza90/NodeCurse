const fs = require('node:fs/promises')

fs.readFile('./testasync.txt', 'utf-8').then((text) => {
    console.log(text)
})

console.log("mientras tanto... 1")
console.log("mientras tanto... 2")

fs.readFile('./test.txt', 'utf-8').then((text) => {
    console.log(text)
})