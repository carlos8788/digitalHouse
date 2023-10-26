window.onload = function(){
    let titulo = document.querySelector('#title')
    let formulario = document.querySelector('form');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    // titulo.addEventListener('focus', () => {
    //     console.log('first')
    // })
    titulo.focus();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = Object.fromEntries(new FormData(formulario))
        console.log(inputs);
    })

}