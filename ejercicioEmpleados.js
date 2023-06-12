
let infoBtn = document.getElementById("infoBtn");
let contenedor = document.getElementById("contenedor")






class empleados {
    nombre = "";
    edad = 0;
    rfc = "";
    diasTrabajados = 0;


    constructor(nombre,edad,rfc,diasTrabajados){

        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.diasTrabajados = diasTrabajados;
    }

    
    sueldoQuincenaBruto(){

        let sueldo = 156.78;
        var sqn = (this.diasTrabajados/2*sueldo);
        console.log(sqn);
    

    }

    sueldoQuincenaNeto(){

        let sueldo = 156.78;
        var sqn = (this.diasTrabajados/2*sueldo)-((this.diasTrabajados/2*sueldo)*(31/100));
        console.log(sqn);


    }

    sueldoMensualBruto(){
        let sueldo = 156.78;
        var smb = this.diasTrabajados*sueldo
           console.log(smb);

    }

    sueldoMensualNeto(){
        let sueldo = 156.78;
        var smn = (this.diasTrabajados*sueldo)-((this.diasTrabajados*sueldo)*(31/100));
           console.log(smn);

    }
     mostrarNombre(){
        const infoEmpleado = document.createElement("div");
        infoEmpleado.innerHTML = `
            <br>
            <table border="1px">
            <tr> 
                <td>Nombre de empleado</td>
                <td>Edad</td>
                <td>Sueldo Quincenal Bruto</td>
                <td>Sueldo Quincenal Neto</td>
                <td>Sueldo Mensual Bruto</td>
                <td>Sueldo Mensuel Neto</td>
            <tr>
                <td>${empleado1.nombre}</td>
                <td>${empleado1.edad}</td>
                <td>${empleado1.values}</td>
                <td>${empleado1.sueldoQuincenaNeto}</td>
                <td>${empleado1.sueldoMensualBruto}</td>
                <td>${empleado1.sueldoMensualNeto}</td>
            
            
            </table>
        `
        contenedor.appendChild(infoEmpleado);
        
        
        }
}


/*
function ingresarDatos(){

     empleado  = new empleados(prompt("Ingresa tu nombre"),Number(prompt("ingresa tu edad")),prompt("ingresa tu rfc"),Number(prompt("Ingresa los días laboraods del mes")));


}


empezarBtn.addEventListener("click", ingresarDatos);*/

var empleado1 = new empleados(prompt("Ingresa tu nombre"),Number(prompt("ingresa tu edad")),prompt("ingresa tu rfc"),Number(prompt("Ingresa los días laboraods del mes")));




/*function mostrarNombre(){
const infoEmpleado = document.createElement("div");
infoEmpleado.innerHTML = `
    <br>
    <table border="1px">
    <tr> 
        <td>Nombre de empleado</td>
        <td>Edad</td>
        <td>Sueldo Quincenal Bruto</td>
        <td>Sueldo Quincenal Neto</td>
        <td>Sueldo Mensual Bruto</td>
        <td>Sueldo Mensuel Neto</td>
    <tr>
        <td>${empleado1.nombre}</td>
        <td>${empleado1.edad}</td>
        <td>${empleado1.sueldoQuincenaBruto}</td>
        <td>${empleado1.sueldoQuincenaNeto}</td>
        <td>${empleado1.sueldoMensualBruto}</td>
        <td>${empleado1.sueldoMensualNeto}</td>
    
    
    </table>
`
contenedor.appendChild(infoEmpleado);


}*/


infoBtn.addEventListener("click", empleado1.mostrarNombre);


empleado1.sueldoQuincenaBruto();
empleado1.sueldoQuincenaNeto();
empleado1.sueldoMensualBruto();
empleado1.sueldoMensualNeto();