const addToThree = (current, threeLargest) => {
    if(threeLargest.length == 0 || 
        (threeLargest.length == 1 && current>=threeLargest[0]) ||
        (threeLargest.length == 2 && current>=threeLargest[1])) {
        threeLargest.push(current);
    } else if(current<=threeLargest[0] && threeLargest.length<3) {
        threeLargest.unshift(current);
    } else if(threeLargest[0]<current && threeLargest[1]>=current) {
        threeLargest[0] = current;
    } else if(threeLargest[1]<current && threeLargest[2]>=current) {
        threeLargest[0]=threeLargest[1];
        threeLargest[1] = current;
    } else if(threeLargest[2]<current) {
        threeLargest[0]=threeLargest[1];
        threeLargest[1]=threeLargest[2];
        threeLargest[2]=current;
    }
    return threeLargest;
}

const findThreeLargest = (array) => {
    if(array.length <=3) {
        return array;
    }
    var threeLargest = [];
    for(var i=0; i<array.length; i++) {
        threeLargest = addToThree(array[i], threeLargest);
    }
    return threeLargest;
}

console.log(findThreeLargest([4, 3, 6, 2, 9, 0, 2]));