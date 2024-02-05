

JSON.parse(sessionStorage.getItem("carrito"))===null && sessionStorage.setItem("carrito", JSON.stringify([]));



document.addEventListener("DOMContentLoaded", () => {
    dibujarCarrito()
    dibujarFooter()
})


let carrito = JSON.parse(sessionStorage.getItem("carrito"));
const bodyCarrito = document.getElementById("bodyCarrito");
const footerCarrito = document.getElementById("footerCarrito")




/***************************Agregar producto a carrito*********************************/

const agregarCarrito = (idProducto) => {
const producto = dataBuzoDisponible.find((producto) => producto.id === idProducto);

const {id, nombre, precio, color, imagen, cantidad }= producto
const productoCarrito = carrito.find((producto) => producto.id === idProducto);
if (productoCarrito === undefined) {
    const nuevoProductoCarrito = {
        id:id,
        nombre: nombre,
        color: color,
        precio: precio,
        imagen: imagen,
        cantidad : 1
    }
    carrito.push(nuevoProductoCarrito);
    
    sessionStorage.setItem("carrito", JSON.stringify(carrito));

} 
else {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto);
    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    Swal.fire({
  title:(`Usted compro el producto ${nombre} ${color} `),
  text: "¡Muchas Gracias!",
  icon: "success"
});

    
}


carrito = JSON.parse(sessionStorage.getItem("carrito"));




}






/*********************************Crear Carrito****************************************/
const dibujarCarrito = () => {
    bodyCarrito.innerHTML = "";

    carrito.forEach((producto) => { 
    
    const { id, nombre, color, precio, imagen, categoria, cantidad } = producto
    let body = document.createElement("div");
    body.innerHTML = `

    <table class="table">
    <thead>
      <tr>
        
        <th scope="col"><img src="${imagen}" class="imagenCarrito" class="img-thumbnail"></th>
        
        <th scope="col">${nombre}</th>
        <th scope="col">${nombre}</th>
        
        <th scope="col">
            <button id="+${id}" class="btn btn-success">+</button>
            <button id="-${id}" class="btn btn-danger">-</button>
        </th> 
        <th scope="col">${cantidad}</th> 
        <th scope="col">$${precio}</th>
    </thead>
    </thead>
    </table>

    
    
        `;   
    bodyCarrito.append(body)


    const btnAgregar = document.getElementById(`+${id}`)
    const btnRestar = document.getElementById(`-${id}`)

    btnAgregar.addEventListener("click", () => aumentarCantidad(id))
    btnRestar.addEventListener("click", () => restarCantidad(id))

 dibujarFooter()


    } )
 
}

const dibujarFooter = () => {
    footerCarrito.innerHTML = "" ;


    if(carrito.length > 0){

        let footer = document.createElement("div")

        footer.innerHTML = `
        <table class="table">
        <thead>
          <tr>  
                    
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"> </th> 
            <th scope="col">TOTALES</th>
            <th scope="col">${generarTotales().cantidadTotal}</th> 
            <th scope="col">$${generarTotales().costoTotal}</th>
        </thead>
        </thead>
        </table>   
        
        
        
        `

        footerCarrito.append(footer)
        
       
    }else{
        
        footerCarrito.innerHTML = "<h3> No hay producto en carrito </h3>"
    }
    

}


const generarTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
}

const aumentarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()

}

const restarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0){
        carrito.splice(indexProductoCarrito, 1)
        delete dibujarFooter;
    }
    dibujarCarrito()

    sessionStorage.setItem("carrito", JSON.stringify(carrito))



}
