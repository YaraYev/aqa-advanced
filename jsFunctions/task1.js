function square(width, height) {
    const area = width * height;
    return area;
}

console.log(square(5, 10));


const square2 = function (width, height) {
    const area = width * height;
    return area;
}

console.log(square2(5, 10));


const square3 = (width, height) => width * height;

console.log(square3(5, 10));