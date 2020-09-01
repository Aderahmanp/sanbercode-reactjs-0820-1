// Soal 1


class Animal {
    constructor(name, legs = 4 ) {
        this.name = name
        this.legs = legs
        this.cold_blooded = false
    }
}

// Release 1
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal {
    constructor(name, legs) {
        super(name, legs);
    }
    jump() {
        console.log('“hop hop”') 
    }
}

class Ape extends Animal {
    constructor(name, legs = 2) {
        super(name, legs);
    }
    yell() {
        console.log('“Auooo” ') 
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log(sungokong.legs)

// Soal 2


  class Clock {
    constructor({template},timer) {
      this.template = template
      this._timer = timer
    }

    render() {
      this.date = new Date();
  
      this.hours = this.date.getHours();
      if (this.hours < 10) this.hours = '0' + this.hours;

  
      this.mins = this.date.getMinutes();
      if (this.mins < 10) this.mins = '0' + this.mins;
  
      this.secs = this.date.getSeconds();
      if (this.secs < 10) this.secs = '0' + this.secs;
  
      this.output = this.template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);
  
      console.log(this.output)

    }
    stop () {
      clearInterval(timer)
    }
    start() {
      this.render()
      this.timer = setInterval(this.render.bind(this), 1000)
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 