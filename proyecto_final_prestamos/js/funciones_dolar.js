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