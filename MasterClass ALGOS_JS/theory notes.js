/*

bigO is a way to formalize fuzzy counting

it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

we only care about broad trends.

We say taht an algorithm is O(f(n)) is the number of simple operations the computer ahs to do is
eventually less than a constant times f(n) as n increases

big o shorthands are constant

arithmetic operations are constant

variable assignment is constant

accessing elements in an array by index or object is constant. 

in a loop the complexity is the length of the loop times the complexity
of whatever happens inside of the loop.


space complexity in js
most primitives are constant space

strings require O(n) space where n is the strength length

reference types are generally o(n), where n is the length for array or the number of keys for objects


Logarithms

the logarithm of a number roughly measures the number of times you can divide that number by its 
subscript before you get a value thats less than or equal to one.


certain searching algorithms have logarithmic time complexity
efficient sorting algorithms involve logarithms

recursion sometimes involves logarithmic space complexity.

when to use objects
when you dont need order
whenn= you need fast access / insertion and removal

insertion      o(1)
removal         o(1)
searching       O(n)    
access          O(1)
*/


let instructor = {
    firstname: "kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

/*
        firstname isinstructor favoritenumber
        

*/

object.keys(instructor);            //o(n)
object.values(instructor)           //o(n)
objects.entries(instructor)         //o(n)
objects.hasOwnProperty("firstName") //constant time o(1)



//arrays

/*
when to use arrays!
when you need order
when you need fast access/inserion and removal (sort of)
push - O(1)
pop - O(1)
shift - O(n)
unshift O(n)
concat O(n)
slice O(n)
splice - O(n)
sort o(N * log N)
forEach/map/filter/reduce/etc 0 O(n)
*/



/*
Patterns for solving things
frequency counters:

this pattern uses objects or sets to collect values/frequences of values
this can often avoid the need for nested loops or o(N^2) operations with arrays/strings


sample problem:

write a function called same, it accepts 2 arrays. the function should return true if every value in the
array has its correspoing value squared in the second array. the frequency of values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false

//pitch of what we can check
//if it doesnt have the same number of values its false
//if 
*/


/*
Multiple pointers
creating pointers or values taht correspond to an index or position and move twoards the beginning, end
or middle based on a certain condition

very efficent for solving problems
with minimal space complexity as well


write a function called sumZero which accepts a sorted array of integers.
the function should find the first pair where the sum is 0. return an array taht includes both
values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) [-3,3];
sum([-2,0,1,3])  //undefined
sum([1,2,3]) // undefined

implement a function called countUniqueValues, which accepts a sorted array, and counts the unique
values in the array. there can be negative numbers in the array but it will always be sorted.

countUniqueValues[1,1,1,1,1,2] //2
countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) //7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) //4
*/


/*
sliding window pattern
this pattern involves creating a window which can eaither be an array or number from one position to another.
depending on a ertain condition, the window eaither increases or closes
(and a new window is create)
very useful for keeping track of a subset of data in an array/string)

sample problem 
write a function called maxSubarraySUm which accepts an array of integers and a number called
n. the function should calculate the maximum sum of n
consecutive elements in the array

maxSubarraySum([1,2,3,5,2,8,1,5],2)//10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) //6
maxSubarraySum([4,2,1,6,2],4) //13
maxSubarraySum([],4) //null
//solution:

function maxSubarraySum(arr,num){
let maxSum = 0;
let tempSum = 0;  //we set a maxSum and temporary sum

if(arr.length < num) return null;  // we check if the length of the array is less than num.

for(let i = 0; i < num; i++) {
        maxSum += arrr[i];
}    //we then set Max sum equal to the first addition to num of elements

tempSum = maxSum;  //we set the temp sum equal to max as a holder for our first addition
for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
}  // instead of recounting we use tempsum as a holder for all of our values
//we make tempsum subtract the first element and add the next coming element in our for loop.
//we then compare using Math.max to update max sum.
return maxSum;
}
*/


/*
divide and conquer
this pattern involves dividing a data set into smaller chunks
then repeating a process with a subset of data
this pattern can tremendously decrease
time complexity

sample problem:
given a sorted array of integers write a function called search, that accepts a value and 
returns the index where the value passed to the function is located. if the value is not found
return -1

samples
search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) //null


binary search solution is a nifty Log(n)


function search(array,val) {
        let min = 0;
        let max = array.length -1;
while (min <- max) {
        let middle = Math.floor((min + max) /2)
        let currentElement = array[middle];
if (array[middle] < val) {
        min = middle +1;
} 
}
}
*/

