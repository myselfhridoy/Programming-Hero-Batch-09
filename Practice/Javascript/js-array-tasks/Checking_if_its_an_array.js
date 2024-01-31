/*
Instructions:

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/

const roll = [1, 2, 3];
const name = ['Farjana', 'Rupa', 'Mim'];
const flower = {Favourite:'kathgolap', Choose: 'rose'}
const year = 2014;
const destination = "Journey of Resilience";

if(Array.isArray(name) === true){
    console.log("Its an array.");
}
else{
    console.log("Its not an array.");
}
