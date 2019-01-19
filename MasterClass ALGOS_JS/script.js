/*
understand the problem
1. can you restate the problems in your own words
2. what are the outputs
3. what are our input
4. can the outputs be determined from the inputs. do i have enough info to solve the problem
5. how do i label the parts.

explore examples
come up with examples can help you
examples also provide sanity checks that your eventual solution works how it should
*/
/*
Object string character amount module
//Write a function that will store a strings values by amount in an object.
function charCount(str) {
    var obj = {};
    for (var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log("hello");
console.log(charCount("hello"));
// this version is o(n);

//a bit more compact version using reduce.
function count(string) {
    return string.split("").reduce((a, letter) => {
      a[letter] = (a[letter] || 0) + 1;
      return a;
    }, {});
  }

  //version is o(n);

*/

/*
module: frequency counters
sample problem:

write a function called same, it accepts 2 arrays. the function should return true if every value in the
array has its correspoing value squared in the second array. the frequency of values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false

*/

//refactored better squared array problem
//o(n)
/*
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //declare two empty objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //set up two object for loops to store values
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter2);
   
    //we then loop through the number of elements using the first base array
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){  // if there is no squared key in fc2 return false
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){  // now we check if the squared key
            //has the same amount of values
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
*/

/* anagram challange
given two strings, write a function to determine if the secon string is an anagram of the first.
an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from
iceman 

//boundary cases:
// if the strings arent same length we can return false
// if the same number of letters are not in each string

//steps
//2 new objects to hold comparisons
//split both strings into arrays. using .split(''); 
//check new arrays for length.
//load values of strings and their respective number of characters onto the object
//chek each array if it has identical key values against the other. 

function validAnagram(string1, string2) {

    let strobjAlpha = charMap(string1)
    let strobjBeta = charMap(string2);
    stringarray1 = string1.slice('');
    stringarray2 = string2.slice('');

    if (Object.keys(strobjAlpha).length !== Object.keys(strobjBeta).length){
        return false;
    }

    for(let key in strobjAlpha) {
        if((strobjBeta[key] !== strobjAlpha[key])){
            return false;
        }
    }
    return true;
}

function charMap (string) {
    const keymap = {};
    string = string.slice('');
    for (let key in string){
        keymap[key] = (keymap[key] || 0) +1;
    }

    return keymap;
}

validAnagram("cat","tac");
validAnagram("cat", "dog");
validAnagram("cat", "ph");
*/

/*
module: Multiple Pointers

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

function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;

    while (left <right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left],arr[right]];
        } else if (sum > 0) {
            right --
        } else {
            left++;
        }
    }
}

sample problem:
implement a function called countUniqueValues, which accepts a sorted array, and counts the unique
values in the array. there can be negative numbers in the array but it will always be sorted.

countUniqueValues[1,1,1,1,1,2] //2
countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) //7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) //4
Refactored sumeZero
//time complexity of O(n)

//boundaries. we need to make sure scout doesnt extend past array.length. 
//we can use an index. for this.
//countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]) //7

//o(n) time
function countUniqueValue(arr){
arr = arr.sort((a,b) => a-b);
if(arr.length === 0) {return 0;}
let i = 0;
for ( let j =1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
        i++
        arr[i] = arr[j];
    }
  }
  return i + 1;
}
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


/* ----Module: divide and conquer
divide and conquer
this pattern involves dividing a data set into smaller chunks
then repeating a process with a subset of data
this pattern can tremendously decrease
time complexity


sample problem:
sample problem:
given a sorted array of integers write a function called search, that accepts a value and 
returns the index where the value passed to the function is located. if the value is not found
return -1

----sample inputs and values:
search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) //null


//binary search solution is a nifty Log(n)
function search(array,val) {
    let min = 0;
    let max = array.length -1;
while (min <= max) {
    let middle = Math.floor((min + max) /2)
    let currentElement = array[middle];
if (array[middle] < val) {
    min = middle +1;
    } else if(array[middle] > val) {
        max = middle - 1;
    } else {
        return middle;
    }
  }
return -1;
}
*/

/*
recursion
why use recursion?
recursion is a process that calls itself
 used in larger trees and datastructures

invoke the same function with a different input until you reach your base case
base case
the condition when the recursion ends

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1);
}
sumrange(3) - return 3 + Sumrange(2) -returns 2 + sumRange(1)

helper method recustion
//outline of helper method
function out(input) {
    var outerscopedvariable = [];
    function helper(helperInput){
        //modify outerscopevar
        helper(helperInput--)
    }

    help(input)
    return outerscopedvar
}



function collectOddValues(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0) {
            return ;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    
helper(arr);
return result
}
}

*/

/*
searching algorithm
Binary Search
Eleminate half of the remaining elements at a time
binary search only works on sorted arrays!

binary works in two ways.
1. we devide the array into two pieces
2. we decide a middle point
3. afterwards we check both sides for our data

function binarysearch(arr,elem){
    let start = 0;
    let end = arr.length -1;
    let mid = Math.floor((end - start) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        mid = Math.floor((end - start) / 2);
    }
return array[middle] === elem ? middle : -1;
}

[2,5,6,9,13,15,28,30] ,28
[0,1,2,3,4, 5, 6, 7]

*/


/*
naive string search the better is KMP
unction naiveSearch(long, short){
    var count = 0;
for (let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.length; j++){
        if (short[j] !== long[i+j]) break;
        if(j === short.length -1) count++;
            
    }
  }
  return count;
}
*/

/*
Sorting Algorithms
1.  bubble sort

simply flips the values around for the sort
function swap(arr,idx1,idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
//es2015 implementation
const swap = (arr,idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];


//really efficient bubblesort method
    function bubblesort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j +1] = temp;
                noSwaps = false;
        }
    }
    if(noSwaps) break;
}
return arr;
}
}

//o(n^2)  using noSwaps if data is reasonably sorted it then becomes o(n);
*/

/*
selection sort 
similar to bubble sort, but instead of first placing large values into sorted position
it places small values into sorted position
5,3,4,1,2
on iteration one it would change to
1,5,3,4,2
second
1,2,5,3,4
store the first element as the smallest value
compare this item to the next item in the array until you find a smaller number.
if a smaller number is found designate that smaller number to be the new minimum and continue
until the endo fhte array if the minimum is not the value index you initally began with
swap the two values
repeat this with the next element until array is sorted

function selectionsort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (j = i + 1 ; j < arr.length; i++) {
            if (arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest) {
        [arr[i],arr[lowest]] = [arr[lowest],arr[i]];
        }
    }
    return arr;
}

use: if you are worried about swap size.
*/

/*
insertion sort
[5,3,4,1,2]
insertion sort works on the bases that we work backwords and checks a value against
the smaller incremented values
function insertionSort(arr){
for (var i = 1; i < arr.length; i++){
    var currentVal = arr[i];
    for(var j = i -1; j >= 0 && arr[j] > currentVal ; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j+1] = currentVal;
}
return arr
}
*/

/*
merge  sort its a combination of merging and sorting
explots the fact taht arrays of 0 and 1 element are always sorted
it decomposes an array in smaller sub arrays


in order to implement merge sort its useful to first implement
a funciton responsible for merging two sorted arrays

given two arrays which are sorted this helper function should create
a new array which is also sorted and consists of all of the elements in the two
input arrays

the function should run in)(n + m) time and o(n +m ) space.
and should not modify the parameters passed to it.


//pesudeo code
create an epty array, take a look at the smallest values in each input array
while there are still values we havent looked at...

if the value in the first array is smaller than the malue in the secound array, 
push the value in the first array into our results and move on to the next value in the first array

if the value in the first aray is larger than the value in the second, push the value in the second array
into our results and move on to the enxt value in the second array

function merge(arr1,arr2) {
let results = [];
let ar1i = 0;
let ar2i = 0;
while (ar1i < arr1.length && ar2i < arr2.length){
    if(arr2[ar2i] > arr[ari1]){
    results.push(arr[i]);
    ari1++;
} else {
    results.push(arr2[ari2]);
    ari2++;
    }
  }
  while(ari1 < arr1.length) {
      results.push(arr1[ari1]);
  }

  while (ari2 < arr2.lenght) {
      results.push(arr2[ari2]);
  }
  return results;
}



function mergeSort(arr){
if(arr.length <= 1){
    return arr;
}
let midpoint = Math.floor(arr.length/2);
let left = mergeSort(arr.slice(0,mid));
let right = mergeSort(arr.slice(mid));

return merge(left,right);
}


function merge(arr1,arr2) {
let results = [];
let ar1i = 0;
let ar2i = 0;
while (ar1i < arr1.length && ar2i < arr2.length){
    if(arr2[ar2i] > arr[ari1]){
    results.push(arr[i]);
    ari1++;
} else {
    results.push(arr2[ari2]);
    ari2++;
    }
  }
  while(ari1 < arr1.length) {
      results.push(arr1[ari1]);
  }

  while (ari2 < arr2.lenght) {
      results.push(arr2[ari2]);
  }
  return results;
}

0(n log n)
*/

/*
quick sort

pivot helper
given an array, this helper function should designate an element as the pivot. 
it should then rearrange elements in the array so that all values less than the pivot are
moved to the left of the pivot, and all values greater than the pivot
are moved to the right of the pivot

this helper should do this in place, it should not create a new array

the runtime of quick sort depends in part on how one selects the pivot
idieally the pivot should be chosen so that its roughly the median value in the data set youre sorting

pseudocode of pivot helper
it will accept three arguments: array, start index, and an end index

Grab the pivot from the start of the array
store the current pivot index in a variable(keeps track of pivot)
Loop through the array from the start until the end
if the pivot is greater than the current element, increment the pivot index variable then swap the
current element with the element at the pivot index

swap the start element(pivot) with the pivot index
return the pivot index
*/

/*
function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
    let pivot = pivotIndex(arr,left,right);
    
    //Left
    quickSort(arr, left, pivotIndex-1);
    //right
    quickSort(arr,pivotIndex+1, right);
    }
    return arr;
}
function pivotIndex(arr,start = 0, end = arr.length -1){
    const swap = (arr,idx1, idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i <= end; i++){
            if( pivot > arr[i]){
                swapIdx++;
                swap(arr,swapIdx,i);
            }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}*/

/*radix sort 
getdigit(num place) returns the digit in num at the given place value
function getDigit(num,i) {
    if(num === 0) return 1;
return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;

}


*/




