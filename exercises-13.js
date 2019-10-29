function targetTerdekat(arr) {
    // you can only write your code here!
    var locO, terdekat;
    var locX = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            locO = i;
        }
        if(arr[i] === 'x') {
            locX.push(i);
        }
    }
    
    if(locO == undefined || locX.length == 0){
        terdekat =  0;
    }else{
        for (let i = 0; i < locX.length; i++) {
            if(Math.abs(locX[i]-locO)<terdekat || terdekat == undefined) {
                terdekat = Math.abs(locX[i]-locO);
            }
        }
    }
    
    return terdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2