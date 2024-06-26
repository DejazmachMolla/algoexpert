const moveElementToEnd = (array, e) => {
    const arrMap = new Map();
    array.forEach(element => {
        arrMap.set(element, (arrMap.get(element) || 0) + 1);
    });

    console.log(arrMap)

    let movedArr = [];
    arrMap.forEach((value, key) => {
        if(key==e) {
            for(var i=0; i<value; i++) {
                movedArr.push(key);
            }
        } else {
            for(var j=0; j<value; j++) {
                movedArr.unshift(key);
            }
        }
    })

    return movedArr;
}

console.log(moveElementToEnd([2,7,2,2,3,6,4], 2))