function pasanganTerbesar(num) {
    // you can only write your code here!
    var angka = num.toString();
    var terbesar = 0;
    for (let i = 0; i < angka.length; i++) {
        if(angka[i+1] != undefined && parseInt(angka[i]+angka[i+1]) > terbesar){
            terbesar = parseInt(angka[i]+angka[i+1]);
        }
    }
    return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(9918293)); // 99