/*
# Big O Notation : 
    - Is a way to measure an algorithm’s efficiency. 
    - It measures the time it takes to run your function as the input grows. 
    - Or in other words, how well does the function scale.
    - Is referred to as the algorithm’s upper bound, meaning that it deals with 
      the worst-case scenario
*/

function addUpToCase1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpToCase2(n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now()
console.log(addUpToCase1(10000000))
let t2 = performance.now()
console.log(`addUpToCase1 : ${(t2 - t1) / 1000} seconds.\n\n`)
delete t1, t2

let t3 = performance.now()
console.log(addUpToCase2(10000000))
let t4 = performance.now()
console.log(`addUpToCase2 : ${(t4 - t3) / 1000} seconds.`)
delete t3, t4
