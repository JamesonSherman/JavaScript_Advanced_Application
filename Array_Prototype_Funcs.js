//implementation of MAP-----------------------------------------------------------------------------------------------
//The map() method creates a new array with the 
//results of calling a provided function on every element in the calling array.

Array.prototype.myMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

//tests
var arrs = ['Goku', 'Vegeta', 'Broly'];
var numbers2 = [1, 4, 9];

var Sayains = arrs.myMap((n) => {
    return n;
});

var squareRoot = numbers2.myMap(num => {
    return Math.sqrt(num);
});

console.log(Sayains); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot); // [ 1, 2, 3 ]



//implement forEACH-------------------------------------------------------------------------------------------------
//The forEach() method executes a provided function once for each array element.
Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
};

//tests
var arr = [1,2,3,4,5,6];
arr.myEach((word) => {
    console.log(word);
});


//implement FILTER---------------------------------------------------------------------------------------------------
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.myFilter = function (callback, context) {
    arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

//tests
var numbers = [1, 20, 68, 90, 2, 19, 43];
var newNum = numbers.myFilter(n => {
    return n >= 10;
});
console.log(newNum); // [ 20, 30, 80 ]

//Reduce Implementation----------------------------------------------------------------------------------------------
//The reduce() method executes a reducer function (that you provide) 
//on each member of the array resulting in a single output value.

Array.prototype.myReduce = function(callback, initialVal) {
    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

//tests
var numbers3 = [20, 20, 2, 3];
var total = numbers3.myReduce((a,b) => {
    return a + b;
}, 10);
console.log(total); // 55

var flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(function(a, b) {
    return a.concat(b);
});

console.log(flattened); //[ 0, 1, 2, 3, 4, 5 ]

//Implementation of Every---------------------------------------------------------------------------------------
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
Array.prototype.myEvery = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (!callback.call(context, this[i], i, this))
            return false;
    }
    return true;
};

//tests
var passed = [12, 5, 8, 130, 44].myEvery(element => {
    return (element >= 10);
});
console.log(passed); // false
passed = [12, 54, 18, 130, 44].myEvery(element => {
    return (element >= 10);
});
console.log(passed); // true

passed = [12, 54, 18, 130, 44].myEvery(element => {
    return (element >= 13);
});
console.log(passed); // false



//implementation of some----------------------------------------------------------------------------------------

Array.prototype.mySome = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            return true;
    }
    return false;
};

//test
var passed = [12, 5, 8, 130, 44].mySome(element => {
    return (element >= 200);
});
console.log('some: ' + passed); //some: false

var passed = [12, 5, 8, 130, 44].mySome(element => {
    return (element >= 100);
});
console.log('some: ' + passed); //some: true
