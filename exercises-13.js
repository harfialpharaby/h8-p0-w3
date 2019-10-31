function targetTerdekat(arr) {
    // you can only write your code here!
    var x,o,terdekat;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            x = i;
        } else if (arr[i] === 'o') {
            o = i;
        }

        // ubah terdekat JIKA (x DAN o tidak kosong) DAN (terdekat tidak kosong ATAU terdekat lebih besar dari selisih x-o)
        if((x !== undefined && o !== undefined) && (terdekat === undefined || terdekat > Math.abs(x-o))){
            terdekat = Math.abs(x-o);
        }
    }
    
    return terdekat === undefined ? 0 : terdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat(['x', ' ', 'o', 'x', 'x', ' ', ' ', ' '])); // 2