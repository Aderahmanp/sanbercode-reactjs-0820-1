// // Soal 1 
console.log('LOOPING PERTAMA')

var i = 2
while (i < 20) {
    console.log( i + ' -' + ' ' + 'I love coding')
    i++;
  }

console.log('LOOPING KEDUA')

while (i >= 2) {
    console.log( i + ' -' + ' ' + 'I will become a frontend developer')
    i--;
  }

// Soal 2

for ( i = 1; i < 21; i++) {
    if ( i % 3 == 0 ) {
        console.log(i + ' - ' + 'I Love Coding')
    }
    else if ( i % 2 == 1  ) {
        console.log(i + ' - ' + 'Santai')
    }
    else if (i % 2 == 0) {
        console.log(i + ' - ' + 'Berkualitas')
    }
}

// Soal 3
var pagar = '';
for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= i; j++) {
        pagar += '#';
    }
    console.log(pagar);
    pagar = '';
}

// Soal 4 
var kalimat="saya sangat senang belajar javascript"

console.log(kalimat.slice())

// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

for (var i = 0; i < daftarBuah.length; ++i ){
    if ( i == 4) {
        console.log(daftarBuah[i])
        for (var j = 0; j < daftarBuah.length; ++j ){
            if ( j != 4) {
                console.log(daftarBuah[j])
            }
        }
    }
}