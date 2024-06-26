var y = function (current, threeLargest) {
    if (threeLargest.length == 0 ||
        (threeLargest.length == 1 && current >= threeLargest[0]) ||
        (threeLargest.length == 2 && current >= threeLargest[1])) {
        threeLargest.push(current);
    }
    else if (current <= threeLargest[0] && threeLargest.length < 3) {
        threeLargest.unshift(current);
    }
    else if (threeLargest[0] < current && threeLargest[1] >= current) {
        threeLargest[0] = current;
    }
    else if (threeLargest[1] < current && threeLargest[2] >= current) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = current;
    }
    else if (threeLargest[2] < current) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = threeLargest[2];
        threeLargest[2] = current;
    }
    return threeLargest;
};
var x = function (array) {
    if (array.length <= 3) {
        return array;
    }
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result = y(array[i], result);
    }
    return result;
};
console.log(x([4, 3, 6, 2, 9, 0, 2]));
