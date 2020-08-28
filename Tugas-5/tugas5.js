// Soal 1

function halo() {
    return 'Halo Sanbers!'
}
console.log(halo())

// Soal 2
var num1 = 12
var num2 = 2
function kalikan(num1, num2) {
    return num1 * num2
}
var hasilkali = kalikan(num1, num2)

console.log(hasilkali)

// Soal 3

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

function introduce(name, age, address, hobby) {
    return "Nama Saya " + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address +' dan saya punya hobby yaitu ' + hobby +'!'
}

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// Soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var objectDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir :arrayDaftarPeserta[3]
  };

  console.log(objectDaftarPeserta)

  // Soal 5

var daftarBuah = [
    {
        nama: 'strawberry',
        warna: 'merah',
        adaBijinya: 'tidak',
        harga : 9000
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        adaBijinya: 'ada',
        harga : 8000
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        adaBijinya: 'ada',
        harga : 10000
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        adaBijinya: 'tidak',
        harga : 5000
    },
]

console.log(daftarBuah[0])

// Soal 6

var dataFilm = []
// versi 1
// function dataFilmBaru () {
//     newFilm = {
//         nama : 'sponbob',
//         durasi : '90 minute',
//         gendre : 'action',
//         tahun: 2007
//     }
//     return dataFilm.push(newFilm)
// }

// versi 2
function dataFilmBaru (nama, durasi, gendre, tahun) {
    newFilm = {
        nama : nama,
        durasi : durasi,
        gendre : gendre,
        tahun: tahun
    }
    return dataFilm.push(newFilm)
}

dataFilmBaru('sponbob', '90 minute', 'action', 2007)
console.log(dataFilm)