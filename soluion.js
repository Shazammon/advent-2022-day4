const fs = require('fs')
const { parse } = require('path')


let data = fs.readFileSync('data.txt', 'utf-8')

const stringData = data.split(/\r?\n/)

// console.log(stringData)

// for each array item:
// assign first two numbers to array 1, assign next two numbers to array 2
// if statement: first number is less than or equal to first of second array AND second number is greater than or equal to second number of second array, then count it
    // else if the opposite

// const number = stringData[0].split('-').join(',').split(',')

let overlaps = 0

function findOverlap() {
    for (i = 0; i < stringData.length; i++) {
        const compArray = stringData[i].split('-').join(',').split(',')
        const numsCompArray = compArray.map(str => {
                return Number(str)
            })  
            if (numsCompArray[1] <= numsCompArray[3] && numsCompArray[2] >= numsCompArray[4] || numsCompArray[3] <= numsCompArray[1] && numsCompArray[4] >= numsCompArray[2]) {
                overlaps += 1
                console.log(overlaps)
            }
        // console.log(compArray)
    }
    return overlaps
}

console.log(findOverlap())

