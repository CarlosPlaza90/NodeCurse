const fs = require('node:fs')

const stats = fs.statSync('./test.txt')


console.log(
    stats.isFile(), //si es un archivo
    stats.isDirectory(), //if it is a directory
    stats.isSymbolicLink(), //if it is a symbolic link
    stats.size
)