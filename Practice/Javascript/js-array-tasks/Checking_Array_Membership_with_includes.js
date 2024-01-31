/*
Instructions:

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.


*/

const bookList = ['Introduction to Algorithms', 'Structure and Interpretation of Computer Programs', 'The Pragmatic Programmer', 'Artificial Intelligence: A Modern Approach', 'Clean Code: A Handbook of Agile Software Craftsmanship'];

const searchedBook = bookList.includes('Introduction to Algorithms');
// console.log(searchedBook);

/*
 if(searchedBook === true){
    console.log("Book Found!");
}
else{
    console.log("Book Not Found!");
}
 */

if(!searchedBook){
    console.log("Book Not Found!");
}
else{
    console.log("Book Found!");
}