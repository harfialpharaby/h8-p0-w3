function palindrome(kata) {
    // you can only write your code here!
    var dibalik = '';
    for (let i = kata.length-1; i >= 0; i--) {
        dibalik += kata[i];
    }
    return kata === dibalik ? true : false; //manual pake loop
    
    // pake built-in function
    // return kata === kata.split('').reverse().join('') ? true : false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false