const PI = 3.14;
let area = 0;

area = circleArea(3);
calculateCircleArea(area);

console.log(`Area is ${area}`);

function circleArea(radius) {
    return area = radius * PI;
}

function calculateCircleArea(radius) {
    return radius * radius * PI;
}