function dataHandling2 (input) {
    var hasil, potong, sortDesc, tgl, name;
    // input[1].push('Elsharawy');
    // console.log(input);

    potong = input[3].split("/");
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

    sortDesc = potong.sort();
    sortDesc = sortDesc.reverse();

    tgl = potong.join('-');

    name = input[1].slice(0,15);

    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(potong);
    console.log(potong);
    console.log(sortDesc);
    console.log(tgl);
    console.log(name);
    console.log(input);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/5/1989", "Membaca"];
dataHandling2(input);