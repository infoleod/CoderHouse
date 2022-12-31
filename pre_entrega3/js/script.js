// Variables y constantes
const usr_invalido = "Usuario/Email incorrecto.";
const pass_invalido = "PassWord incorrecto.";
const usr_vacio = "Por favor, debe introducir un Usuario/Mail.";
const pass_vacio = "Por favor, debe introducir el password";
const usr_registrado = "El Usuario ya fue registrado, por favor inicie sesion";

// CAPTURAS ---------------------------------------------------------------
// Capturamos el Login/Register del usuario
let usr_nombre = document.getElementById("input_usr");
let pass_nombre = document.getElementById("input_pass");
let btn_registrar = document.getElementById("btn_registrar");
let btn_login = document.getElementById("btn_login");

// Capturamos las etiquetas de error
let usr_nombre_error = document.getElementById("invalid_usr")
let pass_nombre_error = document.getElementById("invalid_pass")
// let invalid_usr_registrado = document.getElementById("invalid_usr_registrado")


// EVENTOS ----------------------------------------------------------------
// Boton registrar
btn_registrar.addEventListener("click", fn_registrar);
// Boton iniciar sesion
btn_login.addEventListener("click", fn_login);

// FUNCINONES -------------------------------------------------------------
function fn_registrar() {
    let continuar = true;
    // Validamos si se completaron los campos usr y pass
    let validar_usr = validar_usr_pass(usr_nombre.value.trim(), pass_nombre.value.trim());
    
    // Si el usuario cargo usr y pass continuamos
    if (continuar && validar_usr) {        
        let registrar = registrar_usuario(usr_nombre, pass_nombre);
    }

}


function fn_login(usr, pass) {
    let continuar = true;
    // Validamos si se completaron los campos usr y pass
    let validar_usr = validar_usr_pass(usr_nombre.value.trim(), pass_nombre.value.trim());
    
    // Si el usuario cargo usr y pass continuamos
    if (continuar && validar_usr) {        
        let loguear = login_usuario(usr_nombre, pass_nombre);

        if (loguear) {
            let registrar_session_storage = registrar_usuario_session_storage(usr_nombre, pass_nombre)

            console.log("Adentooooooooooooo")
        }
    }
}



// -------------------------------------------------------------------------














// Capturamos los contenedores HtML
let visualizaHTML_simulador = document.getElementById("simulador");
let visualizaHTML_resultado = document.getElementById("resultado");
let visualizaHTML_no_login = document.getElementById("intro_no_login");
let visualizaHTML_login = document.getElementById("intro_login");







