
const modalCompra = document.getElementById("modalCompra");
const productoCompra = []
const verCarrito = document.getElementById("verCarrito");

//JSON.parse(sessionStorage.getItem("carrito")) || ses.setItem("carrito", JSON.stringify(carrito));


JSON.parse(sessionStorage.getItem("carrito"))===null && sessionStorage.setItem("carrito", JSON.stringify([]));

let carrito = JSON.parse(sessionStorage.getItem("carrito"));

const agregarCarrito = (id) => {
  const productoCompra = productosBuzosDisponibles.find(item => item.id === id);
  /*alert(`   
    id : ${productoCompra.id} ,
    Nombre : ${productoCompra.nombre} ,
    color: ${productoCompra.color} ,
    precio:${productoCompra.precio} ,
    imagen: ${productoCompra.imagen} ,
    categoria:${productoCompra.categoria} ,
    cantidad: ${productoCompra.cantidad} ,
`)*/
carrito.push(productoCompra);
sessionStorage.setItem("carrito", JSON.stringify(carrito));
console.log(carrito);




}

carrito.forEach((productoUsuario) => { 
    let carritoUsuario = document.createElement("div");
    carritoUsuario.innerHTML = `
    <div>
    
           <img src=${productoUsuario.imagen}>
        
           <h5 >${productoUsuario.nombre}</h5>
      </div>
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