import { read } from 'node:fs'
import { readFile } from 'node:fs/promises'

console.log("mientras tanto... 1")

const text = await readFile('./testasync.txt', 'utf-8')

console.log(text)

console.log("test")

console.log("mientras tanto... 2")

const secondText = await readFile('./test.txt', 'utf-8')
console.log(secondText)