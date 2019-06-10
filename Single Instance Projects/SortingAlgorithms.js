/*
This file boils down into a few concepts as well as some implementation of a few common sorting algorithms


solving problems:
small guide to understand the problem
1. can you restate the problems in your own words
2. what are the outputs
3. what are our input
4. can the outputs be determined from the inputs. do i have enough info to solve the problem
5. how do i label the parts.
*/

function charCount(str) {
    var obj = {};  //declare an empty object
    for (var char of str){  //loop through characters of a string
        char = char.toLowerCase();   //change the char to lower case using toLowerCase();
        if(/[a-z0-9]/.test(char)) { // the regular expression /[a-z0-9]/ makes sure the correct test input is a valid char
                                    // .test(char) returns true if it is a character
            obj[char] = ++obj[char] || 1;  // we increment the character or set it to one.
        }
    }
    return obj;
}


/* here is a smaller more compact one that uses .split("") to make the string into an array
after that we use .reduce and pass an object identifier to make the return into an object.
in reduce a is our accumulator and letter is our index.*/
function count(string) {
    return string.split("").reduce((a, letter) => {
      a[letter] = (a[letter] || 0) + 1;
      return a;
    }, {});
  }
  //version is o(n);




/* 
write a function called same, it accepts 2 arrays. the function should return true if every value in the
array has its correspoing value squared in the second array. the frequency of values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    //declare two empty objects
    let frequencyCounter1 = keymap(arr1);
    let frequencyCounter2 = keymap(arr2);
   
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

function keymap(arr) {
let newobject = {};
for (let val of arr){
newobject[val] = (newobject[val] || 0) +1;
}
return newobject;
}
