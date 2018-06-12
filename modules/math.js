

//option 2
//constants
module.exports.PI = 3.14;
module.exports.E = 2.7;
module.exports.add = function add(x, y) {
    return x + y;
}

module.exports.sub = function sub(x, y) {
    return x -y;
}

//option 1
function cube (n) {
    return n * n * n;
}

function square (n) {
    return n * n;
}

module.exports.cube = cube;
module.exports.square = square;