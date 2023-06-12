/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/


//Arreglos (objetos)
var casaArreglo = [3, 2, 1, "rojo"]; //Aqui no hay contexto de a que se refiere cada elemento


//Objetos Casa


const casa = {
    numeroHabitaciones: 3,
    numeroPisos: 2,
    numeroBaños: 1,
    color: "rojo",
}

console.log("La casa es de color", casa.color);


//Instrucción: Crear 50 casitas, la misma estructura pero diferente color

//Classe para generar 



class casaPlantilla {
    //1. Empezamos a definir nuestras propiedades como variables para posteriormente ponerle valores.

    numeroHabitaciones = 0;
    numeroPisos = 0;
    numeroBaños = 0;
    color = "";



    //3. Definimos nuestra fncion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construcion y asi poder instanciar nuestro objeto.

    //Los parametros se pasan en el orden que definimos en las plantillas

    constructor(numeroHabitaciones, numeroPisos, numeroBaños, color){

        this.numeroHabitaciones = numeroHabitaciones;
        this.numeroPisos = numeroPisos;
        this.numeroBaños = numeroBaños;
        this.color = color;


    }


    //2. Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer nuestro objeto

    encenderLuces() {
        console.log("Las luces se han encedido");

    }

    abrirVentanas() {
        console.log("Las ventanas se han abierto");


    }

    guardarmeDelFresnito() {

        console.log("Aaaaaaaaah");


    }

}

//En las clases se declaran las variables de forma "normal" (Entiendase, usando operador de igualdad)
//Cuando el objeto se crea (instancia) se visualiza de otra forma con : y , entre valores


//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)


/*Instanciar objetos

Para instanciar objets, usamos la siguiente sintaxis:


variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/

let casaMiguel = new casaPlantilla(3,2,2,"Azul");

console.log(casaMiguel);
casaMiguel.encenderLuces();


//Ejemplo POO con gatitos

class gatitos {

    //propiedades


    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //Definimos constructor

    constructor(nombre,edad,tamaño,caracter,numVidas,color,raza,vacunas){

        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numVidas = numVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;


    }


    //Definir metodos

    imprimirInfo(){

        console.log("El nombre de mi gato es", this.nombre);
        console.log("La edad de mi gato es", this.edad);
        console.log("El tamaño de mi gato es", this.tamaño);
        console.log("El caracter de mi gato es", this.caracter);
        console.log("El numero de vidas de mi gato es", this.numVidas);
        console.log("El color de mi gato es", this.color);
        console.log("La raza de mi gato es", this.raza);
        if(this.vacunas == false){
            console.log("Mi gato NO está vacunado (dueño irresponsable)");
        }else {
            console.log("Mi gato sí está vacunado");
        }

    }

    maullar(){

        console.log("meow");

    }

    ronronear(){
        console.log("Prrrrr");

    }

    rasguñar(){
        console.log("Tu gato ha rasguñado algo");

    }


}


let gatoNaranja = new gatitos("Naranja",1,"chiquito","bien tranqui",2,"naranja","naranja",true);
let gatoNegro = new gatitos("Negrito",3,"grande","bien travieso",2,"negro","desconocido",false);

gatoNaranja.imprimirInfo();
console.log("\n \n");
gatoNegro.imprimirInfo();

/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);


//Para deserializar un JSON vamos a utilizar un método llamado JSON.parse

let objetoDeserializado = (JSON.parse(objetoSerializado));