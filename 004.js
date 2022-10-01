## Space Complexity


We can also use big O notation to analyze space complexity: 
How much additional memory do we need to allocate in order to run the code in our algorithm?

Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, 
not including space taken up by the inputs. Unless otherwise noted, when we talk about space complexity, 
Technically, we'll be talking about auxiliary space complexity.


## Rules of Thumb


1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects).

