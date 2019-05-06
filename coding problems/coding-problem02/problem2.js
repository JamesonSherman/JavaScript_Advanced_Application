/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
//john 89,120,103
//mike 116,94,123
//mary 97 134 105

var johnTotal, mikeTotal, maryTotal;

johnTotal = ((89 + 120 + 103) /3);
mikeTotal = ((116 + 93 + 123)/3);
maryTotal = ((97 + 134 + 105)/3);

console.log(johnTotal);
console.log(mikeTotal);
console.log(maryTotal);
if(johnTotal > mikeTotal && johnTotal > maryTotal) {
    console.log('johns team wins');
}
else if(mikeTotal > johnTotal && mikeTotal > maryTotal) {
    console.log('mikes team wins');
}
else if (maryTotal >johnTotal && maryTotal > mikeTotal) {
    console.log('marys team wins');
}
else {
    console.log('error occured');
}
