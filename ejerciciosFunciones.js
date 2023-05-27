//Escriba un programa que reciba como entrada de los coeficientes A,B y C de una ecuación de segundo grado e imprima en pantalla el resultado de x. Asuma que la ecuación tiene solución real


function ecuacionGeneral(a, b, c){
    resultadoRaiz = Math.sqrt(Math.pow(b,2)-(4*a*c));
    resultadoNumeradorNegativo = -b - resultadoRaiz;
    resultadoNumeradorPositivo = -b + resultadoRaiz;

    x1 = resultadoNumeradorPositivo/(2*a);
    x2 = resultadoNumeradorNegativo/(2*a);

    console.log("Los resultados son; X1: " + x1 + " y X2: " + x2);

}

ecuacionGeneral(2,6,4);

//


function velocidad(distancia,tiempo){

    operacion = distancia/tiempo;
    console.log("La velocidad es: " + operacion + " metros/segundo")


}

velocidad(12,90);