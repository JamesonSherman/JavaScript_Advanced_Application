// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//solution using simple reverse method
function reverse(str) {
return str.split('')
          .reverse()
          .join('');
}


//using of loop to reverse
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed; 
    }
return reversed;
}


//reverse string using split and reduce.
function reverse(str) {
   return str.split('').reduce((reversed, character) => {
        return    character + reversed;
    }, ''); //value passed to reverse
}


//reverse string using split and reduce but better syntax
function reverse(str) {
   return str.split('').reduce((reversed, character) =>
      character + reversed, ''); //value passed to reverse
}
//as an edit you can remove the return, brackets, 

