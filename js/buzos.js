let dataBuzoDisponible = JSON.parse(localStorage.getItem("dataBuzo"))    
let buzoRaiz= document.getElementById("buzoRaiz");






fetch("../productos.json")
    .then((response) => response.json())
    .then((dataBuzo) => {

    

dataBuzo.forEach((producto) => {
let cardBuzo = document.createElement("div");
cardBuzo.innerHTML = `
   <div class="card" style="width: 20rem;">

       <img src=${producto.imagen} class="card-img-top" alt="...">
   
       <div class="card-body">
           <h5 class="card-title">${producto.nombre}</h5>
           <p class="card-text">${producto.color}</p>
           <p class="card-text">${producto.categoria}</p>
           <h5 class="card-title">$ ${producto.precio}</h5>
           <button id="comprar${producto.id}" class="btn btn-primary">COMPRAR</button>
       </div>
   </div>
    `;
    
    buzoRaiz.append(cardBuzo);
    
    const btnComprar = document.getElementById(`comprar${producto.id}`);
    btnComprar.addEventListener( "click", () => agregarCarrito(producto.id));

   
 })
 JSON.parse(localStorage.getItem("dataBuzo")) ||localStorage.setItem("dataBuzo", JSON.stringify(dataBuzo));
})