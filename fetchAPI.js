/*
Ejemplos de tareas sincronos

- ciclos
- Invocaciones o funciones
- EventListener (especificamente cuando necesito el click)
- Condicionales y todo lo que tenga que ver con toma de decisiones
- Prompts y alerts

*/

//Javascript sincrono
console.log("Inicia Sincrono");
function dosSync (){
    console.log("Se ejecuta la funcion dos");
}

function unoSync (){
    console.log("Se ejecuta la funcion uno");
    dosSync();
    console.log("Se ejecuta el codigo tres");
}

unoSync();
console.log("Fin de sincrono");


//Javascript asincrono
console.log("Inicio de Asincrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000); //Tiempo es en milisegundos
}


function unoASync(){
    dosAsync();
    console.log("Tres");
}

unoASync();
console.log("Fin de asincrono");

/*
- Funcion setTimeout
- Notificaciones de cierre de sesion de apps bancarias
- Spotify con su cola de reproduccion
- Conexiones a servidor
- Cargas de Apis
*/

/*
Ya que entendemos que la asincronia nos servira para conectarnos a unservidor, y que sin importar la espuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay verios mecanismos para maneras operaciones asincronas en Js

    - Callbacks (Llamadas de vuelta): la forma mas clasica de gestionar la asincronia
    - promises (promesas): Forma moderna
    - Async/Await: Forma moderna con una sintaxis mas ligera

*/

/*
que es un callback (Llamada de vuelta)

Un callback es una funcion que se pasa como argunmento a otra funcion. Esta funcion se ejecutara despues de que la otra lo haga.
Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine

Para que las necesitamos?
Sabemos que Js trabaja de forma descenddente, entonces habra casos que queremos hacer que un codigo se ejecute despues de que ocurra otra cosa, y tambien de forma no secuencial

*/
// function Hazclick(){
//     console.log("Le hiciste clic al boton");
// }

// function otrafuncion(){
//     Hazclick();

//const boton = document.getElementById("boton");
//boton.addEventListener("click", Hazclick);
//}

//otrafuncion();

//Ejemplo de Callback

//Defino una funcion que toma un numero y un callback (funcion) como parametros


//Creamos una funcion llamada dobleNumero, que toma un numero y un callback como argumentos (el callback es una funcion)
function doblenumero (num, callback){
    const resultado = num * 2;//operacion comun y corriente
    callback(resultado); //invocacion de ese callback con el resultado como parametro
}

//definir una funcion para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado);
}

//doblenumero (5, mostrarResultado);





/* Las promesas tienen estos estados
Pendiente (pending). El estado inicial de nuestra promesa, aun no muestra resultados


Aceptado (resolve) cuando la operación asincrona se completa con éxito

Rechazado (reject) cuando la operacion asincrona falla


Las promesas al ser un objeto, tienen métodos

then (function resolve): Ejecuta un callback llamando resolve cuando la promesa se cumple

catch (function reject): Ejecuta un callback llamando reject cuando la promesa falla

then (resolve, catch): Puede ejecutar ambas funciones en el mismo metodo then

*/

//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos(){
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function(resolve, reject){ //el objeto maneja dos funciones (resuelto, rechazo)
        fetch ('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
        .then(function(response){ //espero respuestas...
            if (response.ok){ //propiedad booleana (si o no hay respuesta)
                return response.json();//metodo para convertir la respuesta a un objeto .json
            }else{ //si no...
                throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
            }
        })
        .then(function(data){ //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
            resolve(data);
        })
        .catch(function(error){ //Si no hay una respuesta, resulvo con un rechazo.
            reject(error);
        });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function(cosito){
    console.log(cosito);
})

    .catch(function(error){
    console.log(error);
});



//Primer bloque para la conexion del servidor
const obtenerPokemon = new Promise((resolve,reject) =>{
    fetch ("https://pokeapi.co/api/v2/pokemon/ditto") //me conecto y busco
        .then(respuesta => { //cuando se conecte..
            if (respuesta.ok){ //Si la respuesta es ok
                return respuesta.json();  //guardo el dato en .json
            } else {  //si no
                throw new Error ("Error 404 jeje"); // Lanzo un mensaje de error
            }
        })
            //Segundo bloque, entonces esos datos...
        .then(datos => { //se usan como parametro de mi resolucion
            resolve(datos);
        })


        //tercer bloque solo en caso de que no se encuentre la resolucion
        .catch(error =>{
            reject("Mensaje de error: " + error);
        });

})

obtenerPokemon
.then(pokemon =>{ //el valor pokemon = datos obtenidos del servidor en .json
     console.log("Pokemon obtenido" , pokemon.name);
    })
    .catch(error => {
     console.log(error);
    });
    
    

/*

Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexiion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/



//Realizamos la peticion al servidor
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta  =>{//Cuando la promesa se resuelve, ejecutamos esta funcion
        return pokeRespuesta.json(); //esta funcion retorna la pokeInfo en un .json
    })

    .then(pokeInfo =>{//Cuando la promesa de la conexion se resuelve, entonces ejecutamos esta funcion, Esta funcion guarda la informacion de la respuesta, y lo guarda en una variable llamada pokeinfo.

        //Uso esa variable para hacer muchas cosas
        console.log("El nombre del pokemon es: ", pokeInfo.name, " su numero de la pokedex es: ", pokeInfo.id)
        console.log(pokeInfo)
    })

    .catch(pokeError =>{
            console.log("No encontramos nada de informacion", + pokeError);
    });
