const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

console.log(stringData)

// for each array item:
// assign first two numbers to array 1, assign next two numbers to array 2
// if statement: first number is less than or equal to first of second array AND second number is greater than or equal to second number of second array, then count it
    // else if the opposite

// const number = stringData[0].split('-').join(',').split(',')

function findOverlap() {
    for (i = 0; i < stringData.length; i++) {
        const compArray = stringData[i].split('-').join(',').split(',')
        console.log(compArray)
    }
}

console.log(findOverlap())

