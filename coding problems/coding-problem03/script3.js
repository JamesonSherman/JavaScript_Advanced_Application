/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.


//
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip
 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tipcalc(billvalue){
var lessthan50, lessthan200, greaterthan200;
    if(billvalue < 50.00)
    {
    return lessthan50 = (billvalue * 0.20);
    }
    else if(billvalue > 50.00 && billvalue < 200) {
    return lessthan200 = (billvalue * 0.15);
    }
    else {
    return greaterthan200 = (billvalue * 0.10);
    }
}

var bill1,bill2,bill3;
var tip1,tip2,tip3;
var tiparray = [];
var billplustiparray = [];

bill1 = 124.00;
bill2 = 48.00;
bill3 = 268.00;

tip1 = tipcalc(bill1);
tip2 = tipcalc(bill2);
tip3 = tipcalc(bill3);
tip1 = +tip1.toFixed(4);
tip2 = +tip2.toFixed(4);
tip3 = +tip3.toFixed(4);

console.log(tip1);
console.log(tip2);
console.log(tip3);

tiparray.push(tip1);
tiparray.push(tip2);
tiparray.push(tip3);
console.log(tiparray);

billplustiparray.push(tip1 + bill1);
billplustiparray.push(tip2 + bill2);
billplustiparray.push(tip3 + bill3);
console.log(billplustiparray);
