//input "hello world!"
//output
// "!dlrow olleh"

function balikString(str){
    var hasil = '';
    for (let i = str.length-1; i >= 0; i--) {
        hasil += str[i];
    }
    return hasil;
}

console.log(balikString('hello world!'));