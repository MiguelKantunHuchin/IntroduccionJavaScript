var elementoEvolucion = prompt("Ingrese el elemento con el que evolucionaras a tu pokemon");

switch (elementoEvolucion) {
    case "piedraFuego":
        console.log("Tu Eevee evoluciono a Flaereon");
        break;

    case "piedraTrueno":
        console.log("Tu Eevee evoluciono a Jolteon");
        break;

    case "piedraAgua":
        console.log("Tu Eevee evoluciono a Vaporeon");
        break;

    case "esDeMañana":
        console.log("Tu Eevee evoluciono a Espeon");
        break;

    case "esDeNoche":
        console.log("Tu Eevee evoluciono a Umbreon");
        break;

    case "rocaMusgo":
        console.log("Tu Eevee evoluciono a Leafeon");
        break;

    case "rocaHielo":
        console.log("Tu Eevee evoluciono a Glaceon");
        break;

    case "conoceMovimientoHada":
        console.log("Tu Eevee evoluciono a Sylveon");
        break;
    
    default:
        console.log("Se mantiene tu Eevee, todo bonito.");
        break;
}