const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

console.log(stringData)

// for each array item:
// compare first number to second number
// whichever number is smaller, assign it "lowest" value. If values are equal, assign
// compare the upper value of elf with lowest value to the upper value
