function dataHandling2 (arr) {
    var potong, sortDesc, tgl;
    // var hasil, sortDesc, tgl, name;
    arr.splice(4, 1, "Pria", "SMA Internasional Metro");
    arr.splice(1, 1, `${arr[1]}Elsharawy`);
    arr.splice(2, 1, `Provinsi ${arr[2]}`);
    console.log(arr);

    potong = arr[3].split("/");
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

    sortDesc = arr[3].split("/");
    sortDesc = sortDesc.reverse();
    sortDesc.splice(1,2,sortDesc[2],sortDesc[1])
    console.log(sortDesc);

    console.log(arr[3].split("/").join('-'));

    // name = arr[1].slice(0,15);
    console.log(arr[1].slice(0,15));
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);