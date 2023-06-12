// 1- Obtener los elementos del HTML para guardar la variable

//const container = document.getElementById("productContainer");
const agregarProductosBtn = document.getElementById("agregarProducto")




function agregarProductos(){


const tarjetaProducto = document.createElement("div");
productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
`;

container.appendChild(tarjetaProducto);
}

//agregarProductosBtn.addEventListener("click", agregarProductos);



//1- Obtener los elementos del HTML para guardarlos en variables

//Almaceno el lugar de destino en una constante
const container = document.getElementById("product-container");
const botonagregarProductos = document.getElementById("agregarProductos");

//Almacenar datos o elementos del formulario en variables de Js
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");



//Quiero que cada tarjetita tenga su propio div o contenedor
function agregarProductos(){
    //Guardar os valores de mis inputs
   var nombreinputProducto = nombreProducto.value;
   var descripcioninputProducto = descripcionProducto.value;
   var imageninputProducto = imagenProducto.value;

    const productCard = document.createElement("div");

//1 Creo el elemento
productCard.innerHTML = `
    <img src="${imageninputProducto}" alt="Producto">
    <h3> ${nombreinputProducto} </h3>
    <p> ${descripcioninputProducto} </p>
    <p> Precio: $9.99 <p>
    <button class="btn"> Agregar al carrito </button>
`;

//Agregar esa tarjeta de prodcuto al container especificado (este es el hijo) inserto el elemento
container.appendChild(productCard);
}
//Creamos el boton de escucha
botonagregarProductos.addEventListener("click", agregarProductos);
