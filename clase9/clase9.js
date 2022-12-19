
// let boton_saludar = document.getElementById("boton-saludar");

// boton_saludar.addEventListener("click", function(){console.log("Saludar")});

// boton_saludar.addEventListener("mousedown", function(e){
//     console.log(e);
//     console.log(e.button);
// });

// boton_saludar.addEventListener("mouseup", function(variable_evento){
//     console.log(variable_evento.button);
//     console.log("soltaste");
// });

// let body = document.body; 

// //----------------------------------------
// window.addEventListener("keydown", function(evento){

//     console.log(evento.key);
    
//     if (evento.key == "ArrowUp") {        
//         document.body.style.background = "red";
        
//     } else if (evento.key == "ArrowDown") {        
//         document.body.style.background = "white";
//     }


// })

//----------------------------------------

let usuario = document.getElementById("nombre_usuario");

usuario.addEventListener("input", function(e){
    console.log(e.target.value);
})

usuario.addEventListener("change", function(e){
    console.log(e);
})

