let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

console.log(peliculas);




const destacarPelicula = (lista, pelicula) => {
    
    let peliculaMayusculas = pelicula.toUpperCase();

    let indice = lista.indexOf(pelicula);
    if (indice > -1) {
        lista.splice(indice, 1);
    }

    lista.unshift(peliculaMayusculas);
}

destacarPelicula(peliculas, "Thor: amor y trueno");

console.log(peliculas);


let proxPelis = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];

let cadenaPeliculas = proxPelis.join(", ");

console.log(cadenaPeliculas);

