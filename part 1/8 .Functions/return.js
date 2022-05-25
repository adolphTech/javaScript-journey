function sum(x, y) {
    return (x + y)
}

sum(5, 4)

function divide(a, b) {
    return (a / b)
}
divide(6, 3);

//you can only return one thing at a time.

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    } else {
        return false;
    }
}
isPurple('PURPLE')
    ////////////////////////////////////////////alternative /////////////
function isPurple() {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
}