/*

Bucles e iteracion

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.


- While (mientras)
 - Do While (hacer mientras)
 - For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.


*/


var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"];

var contador = 0;

while(contador < ingredientes.lenght){

}

function cocinarGalletas(){
tiempoCocinando = 0;

do{

    alert("Cocinando Galletas");
     tiempoCocinando +=5;
     var palilloLimpio = Math.random() < 0.4;
     console.log("palillo limpio? ",palilloLimpio,"y ya pasaron", tiempoCocinando, " minutos");
     

}while(tiempoCocinando <=30 && palilloLimpio === false);

alert("Las galletas ya están listas")

}



/*For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/

console.log("Ejemplo de la pizza con For")


//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"]; //3 pasos

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];


//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var i = 0; i < pasosDeReceta.length; i++){

    console.log("Realizando paso " + pasosDeReceta[i]);
    console.log("Esperando " + tiempoPorPaso[i] + " minutos");

}

console.log("Disfruta tu pizza");