/* 

Operadores

Los operadores nos permiten realizar una operacion en uno o varios operandos 

Operadores de asignacion
Operadores de cadena
Operadores logicos
Operadores de comparacion
Operaciones artimeticos


Operadores de asignacion(=)


*/

/*
Operadores de comparacion

< Menor que
> Mayor que
<= Menor o igual que
>= Mayor o igual que
== Igual a
=== Estrictamente igual a
!= Diferente a 
!== Desigualdad estricta


*/



let numero1 = 13;
let numero2 = 25;
let numero3 = "25";
let veinticinco = 25;

//Operador menor que
console.log("El valor 13 es menor que el valor 25? " + (numero1<numero2)); 

//Operador mayor que
console.log("El valor 13 es menor que el valor 25? " + (numero1>numero2));

//Operador mayor o igual que
console.log("El valor 25 es mayor o igual que el valor 25? " + (numero2>=numero3));

//Operador de igualdad solo evaluea valores
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));

//Operador de igual estricta (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));

//Otro ejemplo de operador de igualdad estricta
console.log("El valor 25 es igual que el valor 25? " + (25 === "veinticinco"));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " + (numero2 != numero3));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3));


/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).






*/

/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 

    - Si ambas expresiones son verdaderas, el resultado es verdadero. 
    - Si una de las dos expresiones es falsa, todo el resultado es falso.




OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/

//Ejemplo con AND (&&)

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmaciones son verdaderas


//Ejemplo con OR (||)
afirmacion3 = (num1 < num2); //verdadero
afirmacion4 = (num1 !== num2); //verdadero

console.log(afirmacion3 || afirmacion4); 


//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso


//Ejercicio de combinacion de operadores


/*
Operadores aritmeticos (+,-,*,/,%,**,++,--)

+ (suma): Sirve para sumar dos valores
- (resta): Sirve para restar 2 valores
* (multoplicacion) sirve para multiplicar 2 valores
/ (division): sirve para dividir 2 valores
% (residuo): sirve para devolver el residio de una division




*/

let valor1 = 55;
let valor2 = 17;

console.log("El resultado de la suma es:", (valor1 + valor2));
console.log("El resultado de la restaes:", (valor1 - valor2));
console.log("el resultado de la multiplicacion es:", (valor1*valor2));
console.log("El resultado de la division es:", (valor1/valor2));
console.log("El residuo de la division es:", (valor1%valor2));

