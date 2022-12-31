//Defino el Array
let usuarios_logueados = new Array();

function registrar_usuario() {

    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");

    if (buscar_usuario_registrado(usuario.value)) {
        console.log("El usuario ya fue registrado")
    } else {
        usuarios_logueados.push({usuario: usuario.value.toUpperCase(), password: pass.value});
        
        let array_JSON = JSON.stringify(usuarios_logueados)
    
        usuario.value = null;
        pass.value = null;
        
        localStorage.setItem("usuarios_logueados", array_JSON);
    
        alert("Usuario creado");
    }
}

function login_usuario() {
    let usuario = document.getElementById("usuario");
    let pass = document.getElementById("pass");

    let array_JSON = localStorage.getItem("usuarios_logueados");

    usuarios_logueados = JSON.parse(array_JSON);
    let login_ok = false;

    for(let usr of usuarios_logueados) {
        console.log(usr);

        if (usr.usuario == usuario.value.toUpperCase()) {
            console.log("Usuario ok");
            if (usr.password == pass.value) {
                console.log("Pass ok");
                login_ok = true;
                break;
            } else {
                console.log("pass error")                
            }            
        } else {
            console.log("usuario error")                            
        }
    }
    console.log(usuarios_logueados);
    console.log(login_ok);    
}

function buscar_usuario_registrado(usuario) {
    let array_JSON = localStorage.getItem("usuarios_logueados");

    if (array_JSON == null) {
        return false;
    }

    if (array_JSON.length > 0 ) {
        usuarios_logueados = JSON.parse(array_JSON);
        let usuario_ok = false;
    
        for(let usr of usuarios_logueados) {
            if (usr.usuario == usuario) {
                usuario_ok = true;
                break;
            }
        }
        return usuario_ok;
    } else {
        usuario_ok = true;
    }

}

