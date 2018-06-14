
//for loops are good for when you know "how many"
//while loops are good if you need to do something "until a condition is changes"


//Exercise: I want to print the numbers 1-10 with each number on a new line.
//WITHOUT LOOP
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//WITH A FOR LOOP
    //START     STOP    STEP
for(let i = 1; i < 11; i += 1) { //could also be i <= 10
    console.log(i);
}
