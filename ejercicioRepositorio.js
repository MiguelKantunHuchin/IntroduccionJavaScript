/*
Leer numeros enteros positivos del teclado, hasta que el usuario ingrece el numero cero e informar cual fue el mayor y menor numero ingresado

*/

let arrayNumeros = [];

do{
    
    var numeroIngresado = Number(prompt("Ingrese un numero:"));
    arrayNumeros.push(numeroIngresado);
    arrayNumeros.sort((a,b) => {
        if (a<b){
            return -1;
        }
        if (a>b){
            return 1;
        }

        return 0;


    })
    console.log(arrayNumeros);


}while(numeroIngresado != 0){

} console.log("El numero mas pequeño (sin contar el 0) es " + arrayNumeros[1] +", y el mas grande es: " + arrayNumeros[arrayNumeros.length - 1])