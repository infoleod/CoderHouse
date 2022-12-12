
class Producto {    
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos() {
        console.log("----- datos del producto -----");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
    }
    
    get_stock() {
        console.log("----- devolvemos el Stock del producto -----");        
        console.log("Stock: ", this.stock);
        if (this.stock <= 3) {
            console.log("Hay poco stock");
        }
    }

    set_stock(stock) {
        this.stock = this.stock + stock;
    }
}

let cartas = new Producto("Cartas",500,6);
let cocina = new Producto("Cocina",11254,2);
let monitor = new Producto("Monitor",12000,6);

cartas.get_datos();
cocina.get_datos();
monitor.get_datos();
