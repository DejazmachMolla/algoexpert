function binarySearch(array, target, left, right) {
    if(left > right) {
        return -1;
    }

    var middle = Math.floor((left + right)/2);
    if(array[middle] === target) {
        return middle;
    } else if(array[middle] > target) {
        return binarySearch(array, target, left, middle-1);
    } else {
        return binarySearch(array, target, middle+1, right);
    }
}

console.log(binarySearch([1, 4, 7, 9, 12], 11, 0, 4))