// fetch("http://jsonplaceholder.typicode.com/posts")
//     // Con funcion anonima
//     //.then(function(response) {return response.json()})  
    
//     //con Arrow funcion
//     .then(response=> response.json())
//     .then(data=> {
//         console.log(data);
//         console.log(data[0]);
//         console.log(data[41].title);
//     })


/*    
fetch("producto.json")
    .then(response=> response.json())
    .then(data=> {
        console.log(data[99]);        
    })
*/
/*
// await siempre dentro de una funcion asincronica
let resultado_dos = async function() {
    let resultado = await fetch("http://jsonplaceholder.typicode.com/posts");
    console.log(resultado);
}
resultado_dos();
*/

// fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&lang=es&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17")
//     .then(response=> response.json())
//     .then(data=> console.log(data))




// how to connect api widt get?



// fetch("https://api.dolarhoy.com/v2/valores/dolar", {
//     headers: {
//         "Authorization": "Bearer TU_LLAVE_DE_ACCESO"
//     }
// })
// .then(response => response.json())
// .then(data => console.log(data))



let dolar_titulo_oficial = document.getElementById("data_titulo_oficial");
let dolar_compra_oficial = document.getElementById("data_compra_oficial");
let dolar_venta_oficial = document.getElementById("data_venta_oficial");
let dolar_titulo_blue = document.getElementById("data_titulo_blue");
let dolar_compra_blue = document.getElementById("data_compra_blue");
let dolar_venta_blue = document.getElementById("data_venta_blue");
let obj_dolar = [];

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response=> response.json())
    .then(data=>fn_prueba(data))

let x;    

function fn_prueba(data) { 
    let i = 0;       
    while (i < data.length) {        
        let dolar_tipo = data[i].casa.nombre.toUpperCase();
    
        if (dolar_tipo == "DOLAR OFICIAL") {
            dolar_titulo_oficial.innerText = data[i].casa.nombre.replace("Dolar","");    
            dolar_compra_oficial.innerHTML = `${data[i].casa.compra}<span>Compra</span>`;
            dolar_venta_oficial.innerHTML = `${data[i].casa.venta}<span>Venta</span>`;
    
        } else if (dolar_tipo == "DOLAR BLUE") {
            dolar_titulo_blue.innerText = data[i].casa.nombre.replace("Dolar","");    
            dolar_compra_blue.innerHTML = `${data[i].casa.compra}<span>Compra</span>`;
            dolar_venta_blue.innerHTML = `${data[i].casa.venta}<span>Venta</span>`;
        }
        i++;
    }
}


