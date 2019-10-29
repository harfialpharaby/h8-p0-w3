function angkaPalindrome(num) {
    // you can only write your code here!

    if(typeof num == 'number'){
        var mod, dibalik, temp;
        while(true){
            num++;
            temp=num;
            dibalik = 0;
            while(temp > 0) {
                mod = temp%10;
                temp = parseInt(temp/10);
                dibalik = dibalik*10+mod;
            }
            if(dibalik == num){
                break;
            }
        }
    }
    return num;
}

// TEST CASES
console.log(angkaPalindrome()); // 9
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001