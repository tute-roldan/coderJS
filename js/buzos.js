let productosBuzosDisponibles = JSON.parse(localStorage.getItem("productosBuzos"))    
let buzosRaiz= document.getElementById("buzosRaiz");









productosBuzosDisponibles.forEach((buzos) => {
let cardBuzos = document.createElement("div");
cardBuzos.innerHTML = `
   <div class="card" style="width: 20rem;">

       <img src=${buzos.imagen} class="card-img-top" alt="...">
   
       <div class="card-body">
           <h5 class="card-title">${buzos.nombre}</h5>
           <p class="card-text">${buzos.color}</p>
           <p class="card-text">${buzos.categoria}</p>
           <h5 class="card-title">$ ${buzos.precio}</h5>
           <button id="comprar${buzos.id}" class="btn btn-primary">COMPRAR</button>
       </div>
   </div>
    `;
    
    buzosRaiz.append(cardBuzos);
    
    const btnComprar = document.getElementById(`comprar${buzos.id}`);
    btnComprar.addEventListener( "click", () => agregarCarrito(buzos.id));

   
 })

 