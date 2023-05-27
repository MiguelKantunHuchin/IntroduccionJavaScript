//alert("Estoy vivooooooooo :D");


/*

Variables


Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta varible ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.


Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente



*/



/* 


Se llaman primitivos porque no pueden ser modidificados, ya vienen con el lenguaje y se consideran el dato mas básico o sencillo


Tipos de datos

Primitivos:
String - Sirve para agregar valores de texto, para que se considre string el valor debe estár dentro de "comillas".


Number - Sirve para agregar valores en formato numerico para utilizarlo en operaciones aritmeticas, no se deben utilizar comillas.


Boolean - Sirve para representar 1 de 2 opciones, Verdadero,Falso, sí,no etc.


Undefined - Sirve para representar un tipo de dato que no tiene un valor


Null - Nos sirve para definir que un valor es nulo


NaN - Sirve para representar valores no numéricos

Symbol

No primitivo
Object



*/
recipiente = "Agua";

console.log(recipiente);

Apodo = "Aguacate 'Feliz'"
console.log(Apodo);


miEdad = 31;
console.log(miEdad);

esAdministrador = false;


  //este es un ejemplo de variable undefined




// aquí empiezan los tipos de variables

/* 
n JS tenemos 3 tipos principales de variables:


    - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa. 


    - let: Lo usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo o expresion (meter a la mama de bambi en una cajita), es una variable local.
 


    - const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia). 




*/



/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/



function prepararLimonada(limon = "limon", agua, hielos, azucar, vaso, cuchara){



    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Poner el jugo de limon en vaso " + vaso);
    console.log("Agregar hielos al vaso " + hielos);
    console.log("Agregar agua al vaso " + agua);
    console.log("Endulzar al gusto " + azucar);
    console.log("Mezcla y disfruta " + cuchara);


}

prepararLimonada();

// ejemplo de las 3 formas de agregar parámetros


// Primera forma - Usando parametros dentro del parentesis e inicializando en la funcion 

function suma(a, b) { //aquí los valores están en undefined

    a = 5; // aquí se reasigna el valor 5 a la variable a
    b = 7; // aquí se reasigna el valor 7 a la variable b
    operacion = a + b; // aquí se hace la suma

    console.log("El resultado de la suma es: " + operacion)  // aquí se muestra la suma
}

suma(); //se invoca la función


// Segunda forma - Asignando los valores dentro del parentesis

function resta(a=8, b=5){
operacion = a - b;
console.log("El resultado de la resta es: " + operacion);

}

resta();


//Tercera forma - Inicializando valores dentro de la invocación D:

function multiplicacion(a, b){
operacion = a * b;
console.log("El resultado de la multiplicacion es: " + operacion);

}

multiplicacion(3,9);


// funciones anonimas

let funcionAnonima = function(a,b){ //no tiene nombre la funcion pero se asigna a una variable

    operacion = a/b;
    console.log(operacion);
}

funcionAnonima(10,5); //para llamar una funcion anonima hay que llamar a la variable
