const calculateSmallestDifference = (array1, array2) => {
    let s1 = array1.sort();
    let s2 = array2.sort();
    let minDifference = Infinity;
    let i = 0;
    let j = 0;
    while(i<=s1.length - 1 && j<=s2.length - 1) {
        if(Math.abs(s1[i] - s2[j]) < minDifference) {
            minDifference = Math.abs(s1[i] - s2[j]);
        }
        if(s1[i]<=s2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return minDifference;
} 

console.log(calculateSmallestDifference([15,50,20,60], [3,9,7,8,1]))