// Soal 1

// luas lingkaran
const rumus = 3.14
let diameter = 3

 const luasLingkaran = () => {
    return diameter / 2 * rumus
 }
 
 console.log(luasLingkaran())

 // keliling lingkaran

 const kelilingLingkaran = () => {
     return rumus * 2 * diameter 
 }

 console.log(kelilingLingkaran())

 // Soal 2
 let kalimat = ''
 let kataPeratama = 'saya'
 let kataKedua = 'adalah'
 let kataKetiga = 'seorang'
 let kataKeempat = 'frontend'
 let kataKelima = 'developer'
 const tambahKalimat = () => {
     return kalimat = `${kataPeratama} ${kataKedua} ${kataKetiga} ${kataKeempat} ${kataKelima}`
    }

    console.log(tambahKalimat())

// Soal 3 
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
       fullName () {
        console.log(firstName + " " + lastName)
        return 
      }
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 


// Soal 4

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject
console.log(firstName, lastName, destination, occupation, spell )

// Soal 5 
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combine  = [...west, ...east]

console.log(combine)
