function isPalindrom(str) {
    var mid = Math.floor(str.length/2);
    for(var i=0; i<mid; i++) {
        if(!(str.charAt(i)===str.charAt(str.length-1-i))) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrom('abccba'))