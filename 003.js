## Big O

- is a way to formalize fuzzy counting

- Allows us to talk formally about how the runtime of an algorithm grows as the input grows.

- Don't care about details, only the trends.

- We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant time f(n) as n increases



f(n) could be linear (f(n) = n) 

f(n) could be quadratic (f(n) = n^2)

f(n) could be constant (f(n) = 1)

f(n) could be something entirely different



eg:

O(2n) = O(n)

O(500) = O(1)

O(13n^2) = (On^2)

O(n+1) = (n)

O(10000n+50) = O(n)

O(n2+50n+8) = O(n^2)



## Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array by index or by key is constant
4. In a loop, the complexity is the length of the loop times complexity of what ever happens inside the loop
