console.log('Estoy conectado');



// Array.from()

const h2 = document.querySelectorAll('h2');

h2.forEach(subtitle => console.log(subtitle))
// console.log(h2);

class Musician extends People {
    constructor(name, age, instrument, genre, yearsOfExperience) {
        super(name, age);  
        this.instrument = instrument;        
        this.genre = genre;                  
        this.yearsOfExperience = yearsOfExperience; 
        this.band = '';                     
    }
}