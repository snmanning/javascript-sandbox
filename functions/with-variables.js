
/*function concat(a, b) {
//    return a + b;
// BELOW IS AN ALTERNATIVE TO THE ABOVE
//}
*/
/*const concat = function(a, b) {
    return a + " " + b;
};
FURTHER ALTERNATIVE USING "FAT" ARROW FUNCTIONS
*/
const concat = (a, b) => a + b;
//in fat arrow functions there is an implicit retun if you have no "{}"


/*function multiplyBy3(x) {
//    return 3 * x;
//}
*/

//REWRITE AS A FUNCTION WITH EXPLICIT RETURN
/*const multiplyBy3 = function(x) {
//    return x * 3;
//};
*/
const multiplyBy3 = (x) => {
    return x * 3;
};

/*function fortyTwo() {
//    return 42;
//}
*/

/*const fortyTwo = function() {
//    return 42;
//};
*/

const fortyTwo = () => 42


// add function
/*function add(x, y) {
//    return x + y;
//}
*/
//REWRITE ADD FUNCTION WITH FAR ARROW WITH IMPLICIT RETURN
/*const add = function somethingElse(x, y) {
//    return x + y;
//};
*/

const add = (x, y) => x + y;

// length function
/*function length(word) {
//    return word.length;
//}
*/
const length = function(word) {
    return word.length;
};

/**
 * @param a - number of the small side of a triangle
 * @param b - number of the middle side of a triangle
 * @param c - number of the hypotenuse
 * @return boolean true if a^2 + b^2 == c^2
 */
/*function triple(a, b, c) {
//    return a * a + b * b == c * c;
//}
*/
const triple = function(a, b, c) {
    return a * a + b * b === c * c;
};

/**
 * @param x first number
 * @param y second number
 * @return difference of x and y (x - y)
 */
/*function sub(x,  y) {
//        return x - y;
//}
*/
const sub = function(x, y) {
    return x - y;
};


const result = concat("Yay", "woooooo!!!");
console.log(result);
const result2 = concat(10, 3);
console.log(result2);

const product = multiplyBy3(11);
console.log(product);
const product2 = multiplyBy3('avocado');
console.log(product2);

console.log(fortyTwo());
console.log(fortyTwo("cheese"));

const sum = add(7, 3);
console.log(sum);

const lengthOfCheese = length("cheese");
console.log(lengthOfCheese);

const crazyWord = length("supercalifragilisticexpialidocious");
console.log(crazyWord);

console.log("Is 3, 4, 5, a triple?", triple(3, 4, 5));
console.log("Is 5, 9, 16 a triple?", triple(5, 9, 16));

//sub test cases
console.log('sub(3, 4) should be -1', sub(3, 4));
console.log('sub(10, 4) should be 6', sub(10, 4));