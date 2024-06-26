function productSum(array, depth) {
    var sum = 0;
    array.forEach(element => {
        if(Array.isArray(element)) {
            sum = sum + productSum(element, depth + 1);
        } else {
            sum = sum + element;
        }
    });
    return depth*sum;
}

console.log("Sum : "+ productSum([1, 2, 3, [1, 2, 3], [1]], 1));
