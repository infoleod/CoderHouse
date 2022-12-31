// localStorage.setItem("usuario_uno", "Leo");
// localStorage.setItem("edad_usuario", "41");
// localStorage.setItem("colores", ["rojo","azul","verde","negro"]);


// let usr = localStorage.getItem("usuario_uno");
// let edad = localStorage.getItem("edad_usuario");
// let col = localStorage.getItem("colores");

// console.log(usr);
// console.log(edad);
// console.log(col);

// console.log(new Array(col))
// console.log(typeof col);

// function saludar() {
//     sessionStorage.setItem("usuario_dos", "Marta")
//     console.log("Hola gato")
// }


// //recorro el local storage
// for(let i=0 ; i < localStorage.length; i = i +1 ) {
   
//     let clave = localStorage.key(i);
//     console.log("clave",clave)
//     console.log("valor",localStorage.getItem(clave));

// }
//------------------------------------------------------------
// JSON
// let clientes = {nombre:"Leonardo",apellido:"Dorto"};
// // convertimos a json
// let clientes_JSON = JSON.stringify(clientes);

// console.log(clientes_JSON);
// // lo guardamos en localstorage
// localStorage.setItem("clientes", clientes_JSON);

// // recuperamos de localstorage
// let recuperando_clientes = localStorage.getItem("clientes")
// console.log("recuperando clientes", recuperando_clientes);

// // usamos la misma variable y desconvertimos
// recuperando_clientes = JSON.parse(recuperando_clientes);
// console.log("recuperando clientes", recuperando_clientes);

//PRACTICAMOS-------------------------------------------------

let arreglo_de_usuarios = [];

function set_data(){
    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");

    console.log(nombre_usuario.value);
    console.log(pass_usuario.value);

    let usuario = {nombre:nombre_usuario.value, password:pass_usuario.value}

    arreglo_de_usuarios.push(usuario);

    let arreglo_JSON = JSON.stringify(arreglo_de_usuarios)

    localStorage.setItem("arreglo_de_usuarios", arreglo_JSON);

    JSON.parse(localStorage.key(arreglo_de_usuarios));



    console.log(JSON.parse(localStorage.getItem("arreglo_de_usuarios")));


}

let boton = document.getElementById("boton");












