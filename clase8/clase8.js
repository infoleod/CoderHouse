let boton_numero = 0;   


function agregar_producto() {
    let producto = document.getElementById("producto");
    
    let lista = document.getElementById("lista");
    
    let new_li = document.createElement("li");
    new_li.setAttribute("id","li_"+boton_numero)
    new_li.innerHTML = `<span>${producto.value}</span><button onclick='eliminar_producto(${boton_numero})'>Eliminar</button>`;

    lista.appendChild(new_li)
    
    boton_numero++;
    
    console.log("boton_numero",boton_numero);
}


function eliminar_producto(nro) {
    let lista_completa = document.getElementById("li_"+nro);
    
    lista_completa.remove();    
}