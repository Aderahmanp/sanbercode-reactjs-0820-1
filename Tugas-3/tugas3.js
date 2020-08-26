// Jawaban soal 1 

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var gabungan = kataPertama + ' ' + kataKedua + ' ' + kataKetiga + ' '+ kataKeempat.toUpperCase()

console.log(gabungan)

// Jawaban soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";


var jumlah =  parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat)

console.log(jumlah)

// Jawaban soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,15);
var kataKetiga = kalimat.substring(15,19);
var kataKeempat = kalimat.substring(19,24); 
var kataKelima = kalimat.substring(24,31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

var nilai = 60

if (nilai >= 80 ) {
    console.log('indexsnya A')
}
else if (nilai >= 70 && nilai < 80 ) {
    console.log('indeksnya B')
}
else if (nilai >= 60 && nilai < 70 ) {
    console.log('indeksnya C')
}
else if (nilai >= 50 && nilai < 60 ) {
    console.log('indeksnya D')
}
else {
    console.log('indeksnya E')
}

// Jawaban soal 5

var tanggal = 19;
var bulan  = 11
var tahun = 1996;

var tanggalLahir = tanggal.toString() + ' ' + bulan + ' ' + tahun.toString()

switch(bulan) {
    case 1 : {console.log(tanggal.toString() + ' ' + 'Januari' + ' ' + tahun.toString()); break;}
    case 2 : {console.log(tanggal.toString() + ' ' + 'Febuari' + ' ' + tahun.toString()); break;}
    case 3 : {console.log(tanggal.toString() + ' ' + 'Maret' + ' ' + tahun.toString()); break;}
    case 4 : {console.log(tanggal.toString() + ' ' + 'April' + ' ' + tahun.toString()); break;}
    case 5 : {console.log(tanggal.toString() + ' ' + 'Mei' + ' ' + tahun.toString()); break;}
    case 6 : {console.log(tanggal.toString() + ' ' + 'Juni' + ' ' + tahun.toString()); break;}
    case 7 : {console.log(tanggal.toString() + ' ' + 'July' + ' ' + tahun.toString()); break;}
    case 8 : {console.log(tanggal.toString() + ' ' + 'Agustus' + ' ' + tahun.toString()); break;}
    case 9 : {console.log(tanggal.toString() + ' ' + 'September' + ' ' + tahun.toString()); break;}
    case 10 : {console.log(tanggal.toString() + ' ' + 'Oktober' + ' ' + tahun.toString()); break;}
    case 11 : {console.log(tanggal.toString() + ' ' + 'November' + ' ' + tahun.toString()); break;}
    case 12 : {console.log(tanggal.toString() + ' ' + 'Desember' + ' ' + tahun.toString()); break;}
}
