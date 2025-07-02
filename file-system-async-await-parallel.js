import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./testasync.txt', 'utf-8'),
    readFile('./test.txt', 'utf-8')
]).then(([text, secondText])=> {
    console.log("primer texto: ",text)
    console.log("segundo texto: ",secondText)
})