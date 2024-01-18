const productosGorras = [ 
    
    {
        id: 7 ,
        nombre: "Gorra Trucker",
        color: "Chocolate/Crudo/Naranja",
        precio: 10500 ,
        imagen: src= "../img/gorras/1.jpg",
        categoria: "Gorras",
        cantidad: 1
    },


    {
        id: 8 ,
        nombre: "Gorra Flores",
        color: "Negra/Verde/Rosa",
        precio: 10500,
        imagen: src="../img/gorras/10.jpg" ,
        categoria: "Gorras",
        cantidad: 1
    },


    {
        id: 9 ,
        nombre: "Gorra Trucker",
        color: "Chocolate/Crudo",
        precio:  10500,
        imagen: src="../img/gorras/17.jpg",
        categoria: "Gorras",
        cantidad: 1
    },

    {
        id: 10 ,
        nombre: "Gorra Trucker",
        color: "Verde/Crudo/Negro",
        precio:  10500,
        imagen: src="../img/gorras/2.jpg" ,
        categoria: "Gorras",
        cantidad: 1
    },

    {
        id: 11 ,
        nombre: "Gorra Trucker",
        color: "Azul/Chocolate/Canela",
        precio: 10500 ,
        imagen: src="../img/gorras/4.jpg",
        categoria: "Gorras",
        cantidad: 1
    },


    {
        id: 12 ,
        nombre: "Gorra Trucker",
        Color: "Crudo/Gris/Canela",
        precio:  10500,
        imagen:  src="../img/gorras/6.jpg",
        categoria: "Gorras",
        cantidad: 1
    }


]

JSON.parse(localStorage.getItem("productosGorras")) || localStorage.setItem("productosGorras", JSON.stringify(productosGorras));



let gorrasRaiz = document.getElementById("gorrasRaiz");

productosGorras.forEach((gorras) => {
let cardGorras = document.createElement("cardGorras");
cardGorras.innerHTML = `
   <div class="card" style="width: 20rem;">

       <img src=${gorras.imagen} class="card-img-top" alt="...">
   
       <div class="card-body">
           <h5 class="card-title">${gorras.nombre}</h5>
           <p class="card-text">${gorras.color}</p>
           <p class="card-text">${gorras.categoria}</p>
           <h5 class="card-title">$ ${gorras.precio}</h5>
           <a href="#" class="btn btn-primary">COMPRAR</a>
       </div>
   </div>
    
    `;
    gorrasRaiz.append(cardGorras);

 })


 