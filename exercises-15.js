function groupAnimals(animals) {
    // you can only write your code here!
    animals = animals.sort();
    var hasil = []; // array hasil akhir
    var huruf = []; // array untuk mengklasifikasikan per huruf
    var index; // untuk ambil index huruf per nama hewan
    for (let i = 0; i < animals.length; i++) {
        
        // cek apakah di array huruf sudah ada huruf pada hewan (huruf_pada_hewan = animals[i][0])?
        huruf.includes(animals[i][0]) ? 
            index = huruf.indexOf(animals[i][0]) : // jika ada = ambil index array huruf itu (huruf.indexOf(huruf_pada_hewan))
            index = huruf.push(animals[i][0])-1; // jika belum ada = push huruf itu ke array huruf (push_huruf = huruf.push(huruf_pada_hewan)) dan ambil indexnya (index = push_huruf-1)

        // jika hasilnya di index dengan huruf tertentu masih belum ada maka push dalam bentuk array baru, jika sudah ada maka push di array dalam array nya
        // cek apakah hasil di index yang sesuai dengan index huruf belum ada isinya (hasil[index] == undefined)?
        hasil[index] == undefined ? 
            hasil.push([animals[i]]) : // jika belum terisi = push hasil dengan nama hewan (nama_hewan = animals[i]) dalam bentuk array (hasil.push([nama_hewan]))
            hasil[index].push(animals[i]); // jika sudah terisi = push array dalam array hasil dengan nama hewan (hasil[index].push(nama_hewan))
    }
    return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]