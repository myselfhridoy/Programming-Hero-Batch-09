/*
Add or remove elements

1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output
*/
//Declare an array of 3 tourist destinations
const touristDestination = ['Shundarban', 'Kuakata', 'Lalakhal'];
console.log(touristDestination);

//Add a new tourist destination to your tourist array
touristDestination.push('Coxs Bazar');
console.log(touristDestination);

//Add two more to your array
touristDestination.push('Old Dhaka', 'Sonargao');
console.log(touristDestination);

//Remove the last tourist destination you have added
// touristDestination.pop(touristDestination[touristDestination.length - 1]);
touristDestination.pop();
console.log(touristDestination);


