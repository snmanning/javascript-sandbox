
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

// console.log(i); //doesn't exist because of the use of let

//WITH A WHILE LOOP
let x = 1;
while(x < 11) {
    console.log(x);
    x += 1; //This is an opinion, a style choice
            //alternative to above x++ or ++x (only works for incriments of 1)
}

//Exercise: I want to print the numbers 3 - 13 to the screen (one per line) 
//WITH A FOR LOOP
for(let i = 3; i < 14; i +=1) {
    console.log(i);
}

//WITH A WHILE LOOP
let s = 3
while(s < 14) {
    console.log(s);
    s += 1;
}

//Exercise: I want to print every other number starting at 4 and ending at 16 (one per line)
for(let n = 4; n < 17; n += 2) {
    console.log(n);
}