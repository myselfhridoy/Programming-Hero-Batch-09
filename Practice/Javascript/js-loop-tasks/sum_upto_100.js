/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
for(let i = 1; i < 100; i++){
    console.log(i);
    sum = sum + i;
    if(sum >= 100){
        break;
    }
}
console.log(`Sum = ${sum}`);