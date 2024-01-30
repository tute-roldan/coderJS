
const productosBuzos = [ 
    
    {
        id: 1 ,
        nombre: "Buzo con capucha corto",
        color: "Gris topo/ crudo",
        precio: 25000 ,
        imagen: src="../img/buzos/14.jpg",
        categoria: "Buzos",
        cantidad: 1
    },


    {
        id: 2 ,
        nombre: "Buzo cuello redondo",
        color: "Gris topo/bordo",
        precio: 23000,
        imagen:  src="../img/buzos/14.jpg",
        categoria: "Buzos",
        cantidad: 1
    },


    {
        id: 3 ,
        nombre: "Buzo con capucha",
        color: "Negro / gris perla",
        precio:  25000,
        imagen: src="../img/buzos/18.jpg" ,
        categoria: "Buzos",
        cantidad: 1
    },

    {
        id: 4 ,
        nombre: "Buzo cuello redondo",
        color: "Verde Ingles",
        precio:  23000,
        imagen: src="../img/buzos/7.jpg" ,
        categoria: "Buzos",
        cantidad: 1,
    },

    {
        id: 5 ,
        nombre: "Buzo con capucha largo",
        color: "Mostaza / Verde ingles",
        precio: 25000 ,
        imagen: src="../img/buzos/9.jpg" ,
        categoria: "Buzos",
        cantidad: 1
    },


    {
        id: 6 ,
        nombre: "Buzo con capucha corto",
        Color: "Rosa chicle",
        precio:  25000,
        imagen:  src="../img/buzos/49.jpg" ,
        categoria: "Buzos",
        cantidad: 1
    }

]

JSON.parse(localStorage.getItem("productosBuzos")) ||localStorage.setItem("productosBuzos", JSON.stringify(productosBuzos));
   

     
