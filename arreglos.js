
/*

Arreglos (arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.




*/


//Formas de declarar un array o arreglo

//1. Usando los corchetes [ ]

var miArray = [1, 2, 3, 4, 5, 6];
console.log(miArray);

//Variable sin inicializar
var colores;


//Arreglo sin asignar a una variable
["azul", "rojo", "Naranja", "Verde"];


//Variable colores declarada e inicializada
var colores = ["azul", "rojo", "Naranja", "Verde", ["Verde Pastel", "Amarillo Pastel", "Rosa Pastel"]];


//Podemos tener distintos tipos de datos en un mismo arreglo
var datosDeFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];


//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3= "Fisica";


//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];


//Impresion del tipo de dato que es un array
console.log(typeof(asignaturas));


//Acceso a elementos de un arreglo
console.log("El elemento en la posicion 2 de mis asignaturas es: " , asignaturas[2]);


//Si accedemos a un elemento que no existe, nos mostrara un undefined porque el espacio existe pero no tiene ningun valor
console.log("El elemento en la posicion 2 de mis asignaturas es: " , asignaturas[10]);


//Mostrar la longitud de mi arreglo
console.log(asignaturas.length);




//Ejemplos de arrays

var carrito = [ "pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-Mayo-2023"];

console.log(publicacion);



//Modificar los elementos dentro del arrays

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion[1] = 138;

console.log(publicacion);


// No teniamos un elemento en la posicion (index) 4 (indefinido = 150)
publicacion[4] = 150;



//Metodo para agregar elementos al final de un arreglo
asignaturas.push("Biologia");

console.log(asignaturas);


asignaturas.push("Inglés");

console.log(asignaturas);



//Metodo para eliminar el ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);




//Metodo para agregar elementos al principio de un arreglo
asignaturas.unshift("Quimica", "Educacion Fisica", "Artes");
console.log(asignaturas);


//Metodo para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);


//Metodo para saber si mi arreglo incluye un elemento especifico

let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

regalo = carritoDeWalmart.includes("Coquita");


if (regalo === true){
    console.log("Te regalo un sarten");
}



var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Marina"];

var mejoresAmigos;

var publico;


if(!amigos){
    console.log("Mi meme de bob esponja");
}



//Metodo para concatenar arreglos

var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mangos", "toronjas", "platanos", "fresas", "toronjas"];


var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas);

console.log(listaDeComprasDeLaQuincena);
console.log(listaDeGolosinas , listaDeFrutitasYVerduritas);


//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("Chicharrones"));



console.log("Resumen de compra");
//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join(" *** "));