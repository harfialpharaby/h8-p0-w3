function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var hasil = [];
    var kel1 = [];
    var kel2 = [];
    var kel3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%3==0) {
            kel3.push(arr[i]);
        } else if(arr[i]%2==0) {
            kel1.push(arr[i]);
        } else {
            kel2.push(arr[i]);
        }
    }
    hasil.push(kel1, kel2, kel3)
    
    return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]