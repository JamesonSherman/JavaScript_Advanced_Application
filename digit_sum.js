//add all the element sof the longNumber together 4+2+0+5+9



let longNumber = 42059145081259;
 

 //mathematical digit sum solver
 let sum = 0;  //63
 let rotation = 0;
 function returnNumberSum(number) {

    while (number){
        sum += number % 10;
        number = Math.floor(number /10);
        rotation++;
        console.log(`sum is ${sum} number is ${number} on the ${rotation}.`)
    }
    return sum;
 }
 console.log(returnNumberSum(longNumber));
}


//function based digit sum solver
function returnNumberSum (number) {
 sum = number.toString()
             .split('')
             .map(Number)
             .reduce(function (a,b) {
                 return a + b;
             }, 0);
return sum;
}

console.log(returnNumberSum(longNumber));
 }
 
 
//recursive digitsum 
 function sumDigits(number) {
    var remainder = number % 10;
    var sum = remainder;
    if(number >= 10) {
        var rest = Math.floor(number / 10);
        sum += sumDigits(rest); 
    }
    return sum;
}
