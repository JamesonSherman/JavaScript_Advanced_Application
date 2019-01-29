/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// BMI = mass / hight^2 = mass / (height * height).
//mass in kg and height in meter
// 6'1" = 1.85  5'9" = 1.79832
// 150 is 68 kg
//200 90 kg
var MarkBMI, JohnBMI, MarkHeight, JohnHeight, MarkWeight, JohnWeight;
MarkHeight = prompt("what is marks height?");
MarkWeight = prompt("What is Marks weight?");
JohnHeight = prompt("what is johns height?");
JohnWeight = prompt("what is johns weight?");

MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

var higherbmi = MarkBMI < JohnBMI;
console.log(MarkBMI);
console.log(JohnBMI);
console.log(higherbmi);

alert(higherbmi);
