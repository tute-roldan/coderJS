
const modalCompra = document.getElementById("modalCompra");
const productoCompra = []
const bodyCarrito = document.getElementById("bodyCarrito");
const footCarrito = document.getElementById("footCarrito")


JSON.parse(sessionStorage.getItem("carrito"))===null && sessionStorage.setItem("carrito", JSON.stringify([]));

let carrito = JSON.parse(sessionStorage.getItem("carrito"));




/***************************Agregar producto a carrito*********************************/

/*export*/ const agregarCarrito = (idProducto) => {
const producto = productosBuzosDisponibles.find((producto) => producto.id === idProducto);
carrito.push(productoCompra);

const {nombre, precio, imagen , id} = producto

const productoCarrito = carrito.find((producto) => producto.id === idProducto);
if (productoCarrito === undefined) {
    const nuevoProductoCarrito = {
        id:id,
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        cantidad : 1
    }
    carrito.push(nuevoProductoCarrito);


} else {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto);
    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
}


carrito = JSON.parse(sessionStorage.getItem("carrito"));




}





/*********************************Crear Carrito****************************************/
const dibujarCarrito = () =>{

carrito.forEach((producto) => { 
    let body = document.createElement("div");
    body.innerHTML = `
    <div class="listaCarrito"  >
        <div>
         <th><img src="${producto.imagen}"  style="height:100%"</th>
        </div>
        <div>
            <td>${producto.nombre}</td>
        </div>
        <div> 
            <td>${producto.color}</td>
        </div>
        <div>
            <td>${producto.cantidad}</td>
        </div>
        <div>
            <td>
            <button  id="+${producto.id}"  class="bi bi-plus-circle"></button>
            <button id="-${producto.id}" class="btn btn-danger">-</button>
            </td>
        </div>
        <div>
            <td>$${producto.precio}</td>
        </div>
                
      </div>
        `;   
    bodyCarrito.append(body)

    const btnAgregar = document.getElementById(`+${producto.id}`)
    const btnRestar = document.getElementById(`-${producto.id}`)

    btnAgregar.addEventListener("click", () => aumentarCantidad(producto.id))
    btnRestar.addEventListener("click", () => restarCantidad(producto.id))

   // dibujarFooter();

    } )
}

/*
    const dibujarCarrito = () => {
    
        if(carrito.lenght > 0){
            footerCarrito.innerHTML = "";
            let footer = document.createElement("tr")
            footer.innerHTML= `
            
            <th><b>Totales<b><th>
            <th><b>${cantidadTotal}<b><th>
            <th><b>${precioTotal}<b><th>
            `
            footerCarrito.append(footer);
    
        }
        else{
            footerCarrito.innerHTML= "<h3>No hay productos en carrito<h3>"
        }
            
    }
/*
   


const generarTotales = () => {

        const cantidadTotal = carrito.reduce((total, {cantidad}) => total + cantidad, 0)
        const precioTotal = carrito.reduce((total, {precio}) => total + precio, 0);
    }

    

*/


////////////////////////////////////////////////////////////////////////////////////

/*
<div >
<table class="table">
    <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Color</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">
        <tr>
        <th scope="row"><img src="${productoUsuario.imagen}" class="img-thumbnail"></img></th>
        <td>${productoUsuario.nombre}</td>
        <td>${productoUsuario.color}</td>
        <td>${productoUsuario.cantidad}</td>
        <td>$${productoUsuario.precio}</td>
        </tr>   
    </tbody>
    </table>
</div>
`;






*/
























/*


/*



dibujarFooter()
}

const dibujarFooter = () => {

if(carrito.length > 0){
    footCarrito.innerHTML = ""

    let footer = document.createElement("tr")

    footer.innerHTML = `
    <th><b>Totales:</b></th>
    <td></td>
    <td>${generarTotales().cantidadTotal}</td>
    <td></td>
    <td>${generarTotales().costoTotal}</td>
    `

    footCarrito.append(footer)
}else{
    footCarrito.innerHTML = "<h3>No hay producto en carrito</h3>"
}

}


        `;
    
    
    verCarrito.append(carritoUsuario)
    
    } )

   




let carteras = ["agua", "menta", "garrote"];

sessionStorage.setItem("carteras", JSON.stringify(carteras));




////////////////////////////////////////////////////////////////////////////////////



































/*

carrito.forEach((productoUsuario) => { 
let carritoUsuario = document.createElement("div");
carritoUsuario.innerHTML = `
   <div>

       <img src=${productoUsuario.imagen}>
   
       <div>
       <h5 >${productoUsuario.nombre}</h5>
       <p>${productoUsuario.color}</p>
           <p>${productoUsuario.categoria}</p>
           <h5 >$ ${productoUsuario.precio}</h5>
           <button id="comprar${productoUsuario.id}" class="btn btn-primary">COMPRAR</button>
       </div>
   </div>
    `;


verCarrito.append(carritoUsuario)

} )




/*
    const modalCarrito = document.createElement("div");
    modalCarrito.innerHTML=`  
        
    `
    modalCompra.append(modalCarrito);

    carrito.forEach = ((product)=>{
        let carritoContent  = document.createElement("div");
        carritoContent.innerHTML=`
        <img src="${product.imagen}">
   
       <div class="card-body">
           <h5 >${product.nombre}</h5>
           <p>${product.color}</p>
           <p>${product.categoria}</p>
           <h5>$ ${product.precio}</h5>
    
        
        `
    modalCarrito.append(carritoContent);
    })


})

*/































/*

carrito.forEach((productoUsuario) => { 
let carritoUsuario = document.createElement("div");
carritoUsuario.innerHTML = `
   <div>

       <img src=${productoUsuario.imagen}>
   
       <div>
       <h5 >${productoUsuario.nombre}</h5>
       <p>${productoUsuario.color}</p>
           <p>${productoUsuario.categoria}</p>
           <h5 >$ ${productoUsuario.precio}</h5>
           <button id="comprar${productoUsuario.id}" class="btn btn-primary">COMPRAR</button>
       </div>
   </div>
    `;


verCarrito.append(carritoUsuario)

} )




/*
    const modalCarrito = document.createElement("div");
    modalCarrito.innerHTML=`  
        
    `
    modalCompra.append(modalCarrito);

    carrito.forEach = ((product)=>{
        let carritoContent  = document.createElement("div");
        carritoContent.innerHTML=`
        <img src="${product.imagen}">
   
       <div class="card-body">
           <h5 >${product.nombre}</h5>
           <p>${product.color}</p>
           <p>${product.categoria}</p>
           <h5>$ ${product.precio}</h5>
    
        
        `
    modalCarrito.append(carritoContent);
    })


})

*/