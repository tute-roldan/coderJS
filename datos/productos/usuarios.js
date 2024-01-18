export let datosUsarios = [
   { 
    id : 1,
    user : "Matias",
    pass :  12345678,
    admin : true,
    }
]

JSON.parse(localStorage.getItem("datosUsuarios")) || localStorage.setItem("datosUsuarios", JSON.stringify(datosUsarios));
