/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales: Son estructuras o condiciones que nos permiten alterar el orden natural de ejecución de nuestro programa. Son sentencias especificas que nos ayudaran a decidir si una condicion se comple o no (verdadero o falso) a partir de esa respuesta se ejecuta una o varias instrucciones


*/


// condicional IF

/*
if (condicion){
    //ejecuta este codigo
}
*/


let edadFelipe = 17;
let edadMinima = 18;

if(edadFelipe < edadMinima){
    console.log("Lo siento, no puedes ingresar");

}

/*

Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.



Estructura basica del Else


if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 

else 

{
    //Este bloque se ejecuta si la condicion es falsa
}


*/

let edadAxel = 17;
let edadFiesta = 18;

if(edadAxel < edadFiesta){

    console.log("No puedes ingresar tampoco :C");
}
else {
    
}

/*

Else If (ademas si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
} else {
    //bloque de codigo que se ejecuta si la condicion 1,2 y 3 son falsas
}




*/


/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

*/
// Ejemplo de switch

let pisoDestino = prompt("Ingresa un numero de piso del 1 al 5:");
switch(pisoDestino){
    case "1":
    console.log("Vamos al piso 1");
    break;
    
    case "2":
    console.log("Vamos al piso 2");
    break;

    case "3":
    console.log("Vamos al piso 3");
    break;

    case "4":
    console.log("Vamos al piso 4");
    break;

    case "5":
    console.log("Vamos al piso 5");
    break;

    default:
        console.log("Ingresa un piso valido");

    
}
