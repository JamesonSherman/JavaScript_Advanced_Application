/*
----Directions
write a function called same, it accepts 2 arrays. the function should return true if every value in the
array has its correspoing value squared in the second array. the frequency of values must be the same.
----Examples
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false


//account cases
// false if one array is longer than the other  
//if we do not have corresponding number of key values
//if there is no squared key


//solution
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
*/



/*
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// empty array to hold chunks called chunked

//for each element in the unchunked array
//retrieve the last element in chunked

//if last element does not exist or if its length is equal to chunk size
//push a new chunk into chunked with the current element
//else add the current element to the chunk 
*/
/*
[1,2,3,4,5]
[[1,2][3,4][5]]

//Solution:
function chunked(arr,size){
let chunk = [];

for(let element of arr){
    const last = chunk[chunked.length - 1];

    if(!last || last.length === size){
        chunk.push([element]);
    } else {
        last.push(element);
    }
}
return chunk;
}
*/



/* anagram challange
----directions
given two strings, write a function to determine if the secon string is an anagram of the first.
an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from
iceman 

----examples
validAnagram("cat","tac");
validAnagram("cat", "dog");
validAnagram("cat", "ph");


//boundary cases:
// if the strings arent same length we can return false
// if the same number of letters are not in each string

//steps
//2 new objects to hold comparisons
//split both strings into arrays. using .split(''); 
//check new arrays for length.
//load values of strings and their respective number of characters onto the object
//chek each array if it has identical key values against the other. 

//solution:
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
*/




/*
module: Multiple Pointers
-----directions
using an an array seem if there is a sumzero vale amongst the opposite side pairs
-----examples
[-1,-2,-3 0, 3, -4, 8] //3 and -3 sum is 0;

//solution:
Refactored sumeZero
//time complexity of O(n)

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
*/




/*
handling arrays of infinite size with recursion.
----directions
given this  multi dimensional array:
var arr = [[1,  37.8, 80.8, 41.8],
             [2,  30.9, 69.5, 32.4],
             [3,  25.4,   57, 25.7],
             [4,  11.7, 18.8, 10.5],
             [5,  11.9, 17.6, 10.4],
             [6,   8.8, 13.6,  7.7],
             [7,   7.6, 12.3,  9.6],
             [8,  12.3, 29.2, 10.6],
             [9,  16.9, 42.9, 14.8],
             [10, 12.8, 30.9, 11.6],
             [11,  5.3,  7.9,  4.7],
             [12,  6.6,  8.4,  5.2],
             [13,  4.8,  6.3,  3.6],
             [14,  4.2,  6.2,  3.4]];

find the largest number amongst the rows and columns.
//solution:
function getMax(a){
    return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
  }
*/

