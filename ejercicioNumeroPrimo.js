function esPrimo(numero) {
    // 1 no es primo, así que lo tratamos como caso especial
    if (numero === 1) {
      return false;
    }
  
    // Verificar si el numero es divisible por algún numero menor a el mismo
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        // Si es divisible, no es primo
        return false;
      }
    }
  
    // Si no fue divisible por ningun numero, es primo
    return true;
  }
  
  // Solicitar un numero al usuario
  let numero = prompt("Ingresa un numero entero c:");
  
  // Verificar si el número es primo
  if (esPrimo(numero)) {
    alert(numero + " es un numero primo");
  } else {
    alert(numero + " no es un numero primo");
  }