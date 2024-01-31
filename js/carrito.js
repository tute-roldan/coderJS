
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
    <div class="listaCarrito"  >
        <div>
         <th><img src="${productoUsuario.imagen}"  style="height:100%"</th>
        </div>
        <div>
            <td>${productoUsuario.nombre}</td>
        </div>
        <div> 
            <td>${productoUsuario.color}</td>
        </div>
        <div>
            <td>${productoUsuario.cantidad}</td>
        </div>
        <div>
            <td>
            <button id="+${productoUsuario.id}" class="btn btn-success">+</button>
            <button id="-${productoUsuario.id}" class="btn btn-danger">-</button>
            </td>
        </div>
        <div>
            <td>$${productoUsuario.precio}</td>
        </div>
        <div>
        </div>


         
      </div>


        `;
    
    
    verCarrito.append(carritoUsuario)


    const btnAgregar = document.getElementById(`+${productoUsuario.id}`)
    const btnRestar = document.getElementById(`-${productoUsuario.id}`)

    btnAgregar.addEventListener("click", () => aumentarCantidad(productoUsuario.id))
    btnRestar.addEventListener("click", () => restarCantidad(productoUsuario.id))
    
    } )

   




let carteras = ["agua", "menta", "garrote"];

sessionStorage.setItem("carteras", JSON.stringify(carteras));




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