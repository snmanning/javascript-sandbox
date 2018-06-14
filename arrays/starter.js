const nums = [1, 2, 3];
const letters = ['a', 'b', 'c'];

console.log('nums', nums);
console.log('letters', letters);

//grab an element
//arrays are zero indexed
console.log('The 0th element of nums is ', nums[0]);
console.log('The index 2 element of letters is ', letters[2]);
console.log(letters[5]); //This will return 'undefined'

//change an element
nums[0] = 4;
letters[10] = 'q'; //This is BAD!!!!! because we now have a gap
console.log('nums', nums);
console.log('letters', letters);
console.log(letters[5]); //still undefined beccause the array doesn't have an element there

console.log("length of letters", letters.length);
console.log('length of nums', nums.length);