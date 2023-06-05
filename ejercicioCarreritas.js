function cambioLugar(antes,despues,array){

    array.splice(despues-1,0,array[antes-1]);
    array.splice(antes,1);
    return array
}

function lasVueltas(arreglo,nombre1,nombre2){
    indiceAntes = arreglo.indexOf(nombre1);
    indiceDespues = arreglo.indexOf(nombre2);
    return cambioLugar(indiceAntes+1,indiceDespues+1,arreglo);
    
}


let lugares1 = ["Roberto","Andrea","Jorge","Ramiro","Sofía"]
let aux1=lasVueltas(lugares1,"Jorge","Roberto")
aux1=lasVueltas(aux1,"Ramiro","Jorge")
aux1.splice(aux1.indexOf("Roberto"),1)
a=aux1.indexOf("Andrea")
temp=aux1[a]
aux1[a]=aux1[a+1]
aux1[a+1]=temp
aux1[aux1.length]="Jose"
console.log(aux1)