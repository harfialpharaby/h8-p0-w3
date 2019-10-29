function dataHandling2 (arr) {
    var hasil = arr.splice(3,1);
    console.log(hasil);
    var potong = hasil[0].split("/");
    console.log(potong);
    switch (potong[1]) {
        case '01' && '1':
            console.log('Januari');
            break;
        case '02' && '2':
            console.log('Februari');
            break;
        case '03' && '3':
            console.log('Maret');
            break;
        case '04' && '4':
            console.log('April');
            break;
        case '05' && '5':
            console.log('Mei');
            break;
        case '06' && '6':
            console.log('Juni');
            break;
        case '07' && '7':
            console.log('Juli');
            break;
        case '08' && '8':
            console.log('Agustus');
            break;
        case '09' && '9':
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
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/5/1989", "Membaca"];
dataHandling2(input);