// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// using a empty object we create a map of all values in the string
// from here we parse through all the elements of the string.
// if the charMap[character] is true then we add a value to it
//else we create one.
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxchar = '';

    for (let char of str) {

        if (charMap[char])
        {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    } 

    for (let char in charMap)
    {
        if(charMapp[char] > max) {
            max = charMap[char];
            maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
