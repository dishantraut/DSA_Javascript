/*
# Counting Operations : 
    - Is a way to measure an algorithm’s efficiency based on number of operations. 
    - Time is not a good/constant measure.
    - Diff machines can give diff processing times.
*/

function addUpToCase1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
    /*
    let total = 0               // 1 - assignment (1)
    let i = 0                   // 1 - assignment (1)
    i <= n                      // n - comparisions  (1n)
    i++                         // n - additions & assignments (1n + 1n = 2n)
    total += i                  // n - additions & assignments (1n + 1n = 2n)
    ---------------------------------------------------------------
    If n = 10;
    Total Operaitons = 5n + 2 = 5(10) + 2 = 52 operations
    ---------------------------------------------------------------
    Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
    But regardless of exact number, the number of operations grows roughly proportionally with n
    */
}

function addUpToCase2(n) {
    return n * (n + 1) / 2;
    /*     
        1 - multiplication
        1 - addition
        1 - division
        ---------------------------------------------------------------
        Total Operaitons = 3
        ---------------------------------------------------------------
        3 simple operations regardless of the size of n. The value of (n) does not mater because there are only 3 calculations that are happening.
    */
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
