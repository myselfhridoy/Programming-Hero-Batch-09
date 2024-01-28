/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


var age = 24;

if(age < 10){
    console.log("Ticket price = Free.");
}
else if(age >= 10 && age <= 25){
    var fare = 800 - (800 * 50 / 100);
    console.log(`Ticket price = ${fare} tk`);
}
else if(age >= 60){
    var fare = 800 - (800 * 15 / 100);
    console.log(`Ticket price = ${fare} tk`);
}
else{
    console.log("Tricket price = Regular 800 tk");
}