

console.log("Aqui inicia el ejercicio jugueteria");
payaso = 112;
muñeca = 75;
numero_de_muñecas = 14;
numero_de_payasos = 27;
peso_paquete = (numero_de_muñecas*muñeca) + (numero_de_payasos*payaso);

console.log("El peso total del paquete es: " + peso_paquete);


//aquí inicia la version 2 del ejercicio


function pesoPaquete(){
    
    payaso = 112;
    muñeca = 75;
    numero_de_muñecas = prompt("introduce el numero de muñecas: ");
    numero_de_payasos = prompt("introduce el numero de payasos");
    peso_paquete = (numero_de_muñecas*muñeca) + (numero_de_payasos*payaso);
    console.log("El peso total del paquete es: " + peso_paquete);
    alert("el peso es " + peso_paquete + " gramos");

}

pesoPaquete();