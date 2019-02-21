/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return 
it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/


var Mark = {
 name : 'mark',
 mass : 90.71,
 height : 1.85,
 calcbmi : function() {
   this.bmi = this.mass / (this.height * this.height);
 }
};

var John = {
    name : 'john',
    mass : 69.85,
    height : 1.79,
    calcbmi : function() {
      this.bmi = this.mass / (this.height * this.height);
    }
   };

   John.calcbmi();
   Mark.calcbmi();
   
   console.log (Mark.bmi);
   console.log (John.bmi);
if (John.bmi > Mark.bmi){
    console.log('johns bmi is more');
} else if (Mark.bmi > John.bmi){
    console.log('marks bmi is more');
} else if ( Mark.bmi === John.bmi) {
    console.log('their bmis are the same');
} else {
    console.log('somebody made a grave error in math');
}