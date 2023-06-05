let numeroContandor = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");


var valorContador = 0;


function incrementar() {
    valorContador++;
    numeroContandor.innerHTML = valorContador;
    multiplos10();

}

function decrementar() {
    valorContador--;

    if (valorContador < 0) {

        alert("No puedes tener clicks negativos carnal")
        valorContador = 0;

    } else {
        numeroContandor.innerHTML = valorContador;
        multiplos10();
    }



}


function resetear() {
    valorContador = 0;
    numeroContandor.innerHTML = valorContador;
    quitarImagen();
}


function mostrarImagen() {
    var coleccionImagenes = ["./img/meme1.jpg", "./img/meme2.jpg", "./img/meme3.jpg", "./img/meme4.jpeg"];

    //Generar un indice aleatorio
    let indexRandom = Math.floor(Math.random() * coleccionImagenes.length);

    //Obtener la URL o direccion de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrego la URL al atributo src que deje vacio en el HTML
    memeRandom.src = urlAleatoria;
    //Cambio la propiedad de visualizacion (display) a un block
    memeRandom.style.display = "block";
    memeRandom.style.width = "720px"
    memeRandom.style.height = "480px";

}

function quitarImagen() {

    memeRandom.style.display = "none";


}

function multiplos10() {

    if (valorContador % 10 === 0) {
        
        mostrarImagen();
    } else {
        quitarImagen();
    }

}

botonIncremento.addEventListener("click", incrementar);
botonDecremento.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);
