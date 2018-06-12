
function concat(a, b) {
    return a + b;

}

function multiplyBy3(x) {
    return 3 * x;
}

function fortyTwo() {
    return 42;
}

// add function
function add(x, y) {
    return x + y;
}

// length function
function length(word) {
    return word.length;
}

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