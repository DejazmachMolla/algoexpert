const findMaxSubsetSumNoAdjacent = (array) => {
    if(array.length == 1) {
        return array[0];
    }

    if(array.length == 2) {
        return Math.max(array[0], array[1]);
    }

    let max0 = array[0];
    let max1 = Math.max(array[0], array[1]);
    let currentMax = max1;
    for(let i=2; i<array.length; i++) {
        currentMax = Math.max((max0 + array[i]), max1);
        max0 = max1;
        max1 = currentMax;
    }

    return currentMax;
}

console.log(findMaxSubsetSumNoAdjacent([1, 5, 3, 9, 4, 3, 5]))