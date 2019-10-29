function dataHandling2 (arr) {
    var hasil, potong, sortDesc, tgl, name;
    hasil = arr.splice(3,1);

    potong = hasil[0].split("/");
    switch (potong[1]) {
        case '01':
        case '1':
            console.log('Januari');
            break;
        case '02':
        case '2':
            console.log('Februari');
            break;
        case '03':
        case '3':
            console.log('Maret');
            break;
        case '04':
        case '4':
            console.log('April');
            break;
        case '05':
        case '5':
            console.log('Mei');
            break;
        case '06':
        case '6':
            console.log('Juni');
            break;
        case '07':
        case '7':
            console.log('Juli');
            break;
        case '08':
        case '8':
            console.log('Agustus');
            break;
        case '09':
        case '9':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('Month Out-Of-Range (01-12)');
            break;
    }

    sortDesc = hasil.sort();
    sortDesc = sortDesc.reverse();

    tgl = hasil.join('-');

    name = arr[1].slice(0,15);

    console.log(hasil);
    console.log(potong);
    console.log(sortDesc);
    console.log(tgl);
    console.log(name);
}

console.log('case 1: =============================================================');
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/5/1989", "Membaca"];
dataHandling2(input);

console.log('case 2: =============================================================');
input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"];
dataHandling2(input);