function groupAnimals(animals) {
    // you can only write your code here!
    animals = animals.sort();
    var hasil = []; // array hasil akhir
    var huruf = []; // array untuk mengklasifikasikan per huruf
    var index; // untuk ambil index huruf per nama hewan
    for (let i = 0; i < animals.length; i++) {
        // jika di array huruf sudah ada huruf pada hewan, maka ambil index array huruf itu, jika belum ada maka push huruf itu ke array huruf dan ambil indexnya
        huruf.includes(animals[i][0]) ? index = huruf.indexOf(animals[i][0]) : index = huruf.push(animals[i][0])-1;

        // jika hasilnya di index dengan huruf tertentu masih belum ada maka push dalam bentuk array baru, jika sudah ada maka push di array dalam array nya
        hasil[index] == undefined ? hasil.push([animals[i]]) : hasil[index].push(animals[i]);
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]