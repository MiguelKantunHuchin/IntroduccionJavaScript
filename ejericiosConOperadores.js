
function IMCfun(){
  
let pesoPersona = prompt("Ingrese su peso:");
let alturaPersona = prompt("Ingrese su altura");

let pesoKg = (pesoPersona*0.453592);
let estaturaM = (alturaPersona/100);

IMC = pesoKg/(Math.pow(estaturaM,2))

    if (IMC < 16){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Criterio de ingreso" );
    } else if(IMC <= 16.9){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Infrapeso")
    } else if(IMC <= 18.4){
        console.log( "Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Bajo peso")
    } else if(IMC <= 24.9){
        console.log( "Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Peso normal")
    } else if(IMC <= 24.9){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Peso normal")
    } else if(IMC <= 29.9){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Sobrepeso");
    }  else if(IMC <= 34.9){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es: Obesidad premórbida");
    } else if(IMC <= 45){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es:Obesidad mórbida");
    } else if(IMC > 45){
        console.log("Su peso es " + pesoKg + " kg y la clasificación de su IMC " + IMC + " de acuerdo a la OMS es:Obesidad hipermobida");
    }else {
        console.log("");
    }


}


IMCfun();