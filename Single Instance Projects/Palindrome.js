// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//straightforward plaindrome solution
function palindrome(str) {
const reversed = string.split('').reverse().join('');
return str === reversed;
}


//every use to check for palindromes
function palindrome(str) {
return str.split('').every((char, i) => {
return char === str[str.length - i - 1];
});
}
//every boolean checks on every element on array
//if every element meets condidition we return true
//else false
