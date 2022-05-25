function multiplyBy(num) {
    return function(x) {
        return x * num
    }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);