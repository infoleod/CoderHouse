let carrito = [];
document.body.style.backgroundColor = "grey";

let agregar_carrito = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let tiempo_carga = Math.random();
        console.log(tiempo_carga);
        if (tiempo_carga < 0.5) {
            carrito.push("Producto");
            resolve(carrito);
        } else {
            reject("No se pudo cargar el producto");
        }
    }, 2000 )
})

agregar_carrito 
        .then((carrito)=>{
            console.log("Producto agregado");
            console.log(carrito);
        })
        .catch((error)=>{
            console.log(error);
        })