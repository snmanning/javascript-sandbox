const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c'];

//Exercise: I want to print every element of numbers to the screen (one per line)
for(let i = 0; i < numbers.length; i += 1) {
    const element = numbers[i];
    console.log(element);
}

//Exercise: I want to print every element of letters to the screen (one per line)
for(let l = 0; l < letters.length; l += 1) {
    const element = letters[l];
    console.log(element);
}

//some built in methods

//Exercise: I want to print every element of numbers with forEach
//with an anonymous function
const result = numbers.forEach(function(element, index){
    console.log(element);
})
console.log(result);

//with a fat arrow
numbers.forEach((element, index) => {
    console.log(element);
});

//Exercise: I want to double every number in numbers array
//const doubled = numbers.map((element, index) => {
//    return 2 * element;
// });
const doubled = numbers.map((element, index) => 2 * element);
console.log(numbers);
console.log(doubled);

//Exercise: I want to add a period, "." to every element of the letters array
const withPeriod = letters.map((element, index) => '.' + element);
console.log(withPeriod);  

const otherNumbers = [10, 11, 12, 13, 14];
//Exercise: I want to find the elements that are divisible by 2
//hint: % modulo returns the remainder
const evens = otherNumbers.filter((element) => element % 2 === 0);
console.log(evens);

const odds = otherNumbers.filter((element) => element % 2 === 1);
console.log(odds);

//Exersice: I want to find the elements of the words array that are 3 letters long
const words = ['cat', 'dog', 'cheese', 'ham', 'burrito'];

const three = words.filter((word) => word.length / 3 === 1);
console.log(three);

const x = words.filter((word) => word.length / 3 === 1)
                .map((word) => word.length * 3);

         console.log(x);