// Defino el Array de los usuarios
let usuarios_logueados = new Array();
// Validamos si existe algo en el Local Storage para nuestro ID
let local_storage = localStorage.getItem("simulating_prestaming_usuarios");

// LOCAL STORAGE ---------------------------------------------------------------------------------------
// Buscamos en el Local storage si esta registrado el usuario
function buscar_usuario_registrado(usuario) {
    let array_JSON = localStorage.getItem("simulating_prestaming_usuarios");
    
    // Validamos si existe el ID en el Local Storage
    if (array_JSON == null) {
        return false;
    }
    // Buscamos el usuario ingresado en el Array
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
        return false;
    }
}

// Registramos el usuario
function registrar_usuario(usuario, pass) {
    // Buscamos si no fue registrado anteriormente
    if (buscar_usuario_registrado(usuario.value.toUpperCase())) {
        usr_nombre_error.style.display = "block";
        usr_nombre_error.innerText = usr_registrado
    } else {
        usr_nombre_error.style.display = "none";
        usuarios_logueados.push({usuario: usuario.value.toUpperCase(), password: pass.value});
        
        let array_JSON = JSON.stringify(usuarios_logueados)
    
        
        localStorage.setItem("simulating_prestaming_usuarios", array_JSON);
        
        let registrar_session_storage = registrar_usuario_session_storage(usuario, pass);
        
        usuario.value = null;
        pass.value = null;

        alert("Usuario creado");
    }
}

// SESSION STORAGE -------------------------------------------------------------------------------------
// Buscamos en el Local storage si esta registrado el usuario
function buscar_usuario_session_storage(usuario) {
    let array_JSON = sessionStorage.getItem("simulating_prestaming_usuarios");
    
    // Validamos si existe el ID en el Local Storage
    if (array_JSON == null) {
        return false;
    }
    // Buscamos el usuario ingresado en el Array
    if (array_JSON.length > 0 ) {
        let usuario_logueado_session_storage = JSON.parse(array_JSON);
        let usuario_ok = false;
        
        if (usuario_logueado_session_storage.usuario == usuario) {
            usuario_ok = true;            
        }
        return usuario_ok;
    } else {
        return false;
    }
}

// Guardamos al usuario en el session storage
function registrar_usuario_session_storage(usuario, pass) {
    // Buscamos si no fue registrado anteriormente
    if (buscar_usuario_session_storage(usuario.value.toUpperCase())) {        
        console.log("buscar_usuario_registrado_local_storage", "errro")
    } else {        
        let array_JSON = JSON.stringify({usuario: usuario.value.toUpperCase(), password: pass.value})
    
        usuario.value = null;
        pass.value = null;
        
        sessionStorage.setItem("simulating_prestaming_usuarios", array_JSON);
    
        alert("Usuario creado session storage");
    }
}

// LOGIN USUARIO ---------------------------------------------------------------------------------------
// Valida la carga del usuario y password
function validar_usr_pass(usr, pass) {
    usr_nombre_error.style.display = "none";
    pass_nombre_error.style.display = "none";
    if (usr=="" || usr==null) {
        usr_nombre_error.style.display = "block";
        usr_nombre_error.innerText = usr_invalido;
        continuar = false;
        return false;
    } else if (pass=="" || pass==null) {
        pass_nombre_error.style.display = "block";
        pass_nombre_error.innerText = pass_invalido;
        continuar = false;
        return false;
    } else {
        return true;
    }
}

// Logueamos el usuario
function login_usuario(usuario, pass) {
    // Traemos los datos para ver si el usuario existe
    let array_JSON = localStorage.getItem("simulating_prestaming_usuarios");

    usuarios_logueados = JSON.parse(array_JSON);
    let login_usr_ok = false;
    let login_pass_ok = false;

    // recorremos el array y buscamos el usuario
    for(let usr of usuarios_logueados) {
        if (usr.usuario == usuario.value.toUpperCase()) {
            // Si encontramos el usuario continuamos            
            login_usr_ok = true;
            break;                                    
        }
    }
    
    // recorremos el array y buscamos el password
    if (login_usr_ok) {
        for(let usr of usuarios_logueados) {
            // Si encontramos el usuario continuamos            
            if (usr.password == pass.value) {
                // Si el pass es Correcto, continuamos                
                login_pass_ok = true;
                break;
            }            
        }
    }

    if (login_usr_ok != true) {
        usr_nombre_error.style.display = "block";
        usr_nombre_error.innerText = usr_invalido;        
    }
    if (login_pass_ok != true) {
        pass_nombre_error.style.display = "block";
        pass_nombre_error.innerText = pass_invalido;     
    }
    
    console.log("login_usr_ok", login_usr_ok, "login_pass_ok", login_pass_ok)

    if (login_usr_ok && login_pass_ok) {
        return true;
    } else {
        return false;
    }



}


