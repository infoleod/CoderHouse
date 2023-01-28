// Variables y constantes
const usr_invalido = "Usuario/Email incorrecto.";
const pass_invalido = "PassWord incorrecto.";
const usr_vacio = "Por favor, debe introducir un Usuario/Mail.";
const pass_vacio = "Por favor, debe introducir el password";
const usr_registrado = "El Usuario ya fue registrado, por favor inicie sesion";
const usr_no_registrado = "El Usuario no fue registrado, por favor registrese";
const monto_error_valido = "El monto ingresado no es valido";
const monto_error_supera_max = "El valor ingresado supera la cantidad máxima para solicitar";
const cuotas_error = "Debe seleccionar la cantidad de cuotas";
let usr_logoff = false;

// Defino el Array de los usuarios
let usuarios_logueados = new Array();
let array_JSON = sessionStorage.getItem("simulating_prestaming_usuarios");

// CAPTURAS ---------------------------------------------------------------
// Capturamos el Login/Register del usuario
let saludo_usuario = document.getElementById("saludo_usuario");

// Datos del usuario
let usr_nombre = document.getElementById("input_usr");
let pass_nombre = document.getElementById("input_pass");
let btn_registrar = document.getElementById("btn_registrar");
let btn_login = document.getElementById("btn_login");
let btn_cerrar_sesion = document.getElementById("btn_cerrar_sesion");
// let btn_iniciar_sesion = document.getElementById("btn_iniciar_sesion");
let btn_calcular_prestamo = document.getElementById("btn_calcular_prestamo");

// Capturamos los contenedores HtML
let visualizaHTML_simulador = document.getElementById("simulador");
let visualizaHTML_resultado = document.getElementById("resultado");
let visualizaHTML_no_login = document.getElementById("intro_no_login");
let visualizaHTML_login = document.getElementById("intro_login");
let visualizaHTML_redirect_login = document.getElementById("redirect_login");
let visualizaHTML_dolares = document.getElementById("div_dolar");

// Capturamos los contenedores de info
let div_intro_login = document.getElementById("intro_login");
let div_saludo_usuario = document.getElementById("saludo_usuario");
let div_simulador = document.getElementById("simulador");
let div_resultado = document.getElementById("resultado");

// Capturamos los input de Valor del prestamo y cant de cutoas
let input_valor_prestamo = document.getElementById("inp_valor_prestamo");
let input_cantidad_de_cuotas = document.getElementById("inp_cantidad_de_cuotas");

// Capturamos las etiquetas de error
let usr_nombre_error = document.getElementById("invalid_usr");
let pass_nombre_error = document.getElementById("invalid_pass");
let error_monto_invalido = document.getElementById("error_monto_invalido");
let error_cuotas_invalidas = document.getElementById("error_cuotas_invalidas");

// Capturamos los resultados
let res_monto_inicial = document.getElementById("res_monto_inicial");
let res_cant_cuotas = document.getElementById("res_cant_cuotas");
let res_val_cuota = document.getElementById("res_val_cuota");
let res_interes_generado = document.getElementById("res_interes_generado");
let res_comision_apertura = document.getElementById("res_comision_apertura");
let res_monto_final = document.getElementById("res_monto_final");

// Capturamos los carteles de valor del dolar
let div_dolar = document.getElementById("div_dolar");

// EVENTOS ----------------------------------------------------------------
// Boton registrar
btn_registrar.addEventListener("click", fn_btn_registrar);
// Boton iniciar sesion
btn_login.addEventListener("click", fn_btn_login);
// Boton cerrar sesion
btn_cerrar_sesion.addEventListener("click", fn_btn_cerrar_sesion);
// Boton calcular prestamo
btn_calcular_prestamo.addEventListener("click", fn_calcular_prestamo)
// Evento KEyup para mostrar mensaje
input_valor_prestamo.addEventListener("keyup",fn_valida_monto_ingresado)
// Botones dolares
div_dolar.addEventListener("click", fn_link_dolar)


// FUNCINONES -------------------------------------------------------------
function fn_btn_registrar() {
    let continuar = true;
    // Validamos si se completaron los campos usr y pass
    let validar_usr = validar_usr_pass(usr_nombre.value.trim(), pass_nombre.value.trim());
    
    // Si el usuario cargo usr y pass continuamos
    if (continuar && validar_usr) {
        let registrar = registrar_usuario(usr_nombre, pass_nombre);
    }
}

function fn_btn_login() {
    let continuar = true;
    let nombre_usuario = usr_nombre.value.trim().toUpperCase();
    // Validamos si se completaron los campos usr y pass
    let validar_usr = validar_usr_pass(usr_nombre.value.trim(), pass_nombre.value.trim());
    
    // Si el usuario cargo usr y pass continuamos
    if (continuar && validar_usr) {        
        let loguear = login_usuario(usr_nombre, pass_nombre);

        if (loguear) {
            let registrar_session_storage = registrar_usuario_session_storage(usr_nombre, pass_nombre);
            
            // Damos el mensaje de bienvenida
            fn_sweet_bienvenido(usr_nombre.value.trim());

            fn_visualizar_contenido_usuario(nombre_usuario);
            visualizaHTML_redirect_login.style.display = "none"; 
        }
    }
}

// Funciones Sweetalert bienvenida y chau
function fn_sweet_bienvenido(usuario) {
    let timerInterval
    Swal.fire({
        title: `Bienvenido/a  ${usuario.toUpperCase()}`,
        html: 'el mensaje se cerrara en... <b></b> milliseconds.',
        timer: 3000,
        timerProgressBar: true,
        imageUrl: 'img/bienvenido2.jpg',
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: 'Custom image',
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

function fn_sweet_hasta_luego() {
    let timerInterval
    Swal.fire({
        title: 'Nos vemos pronto...',
        html: 'el mensaje se cerrara en... <b></b> milliseconds.',
        timer: 3000,
        timerProgressBar: true,
        imageUrl: 'img/hasta_luego.gif',
        imageWidth: 600,
        imageHeight: 275,
        imageAlt: 'Custom image',
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval);  
            fn_visualizar_contenido_usuario(false);           
        }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
            fn_visualizar_contenido_usuario(false);          
        }
    })
}


// Cerramos la sesion
function fn_btn_cerrar_sesion() {
    sessionStorage.removeItem("simulating_prestaming_usuarios");   
    usr_nombre.value = null;
    pass_nombre.value = null;

    // la funcion hasta luego contiene la funcion fn_visualizar_contenido_usuario(false);  
    fn_sweet_hasta_luego()
}


// Iniciamos sesion
function fn_btn_iniciar_sesion() {
    fn_visualizar_contenido_usuario(false);
}

// Funcion que muestra o oculta todo
function fn_visualizar_contenido_usuario(usuario_logueado) {    
    if (usuario_logueado == false) {
        saludo_usuario.style.display = "none";
        saludo_usuario.innerText = `inicie sesion`;
        btn_cerrar_sesion.style.display = "none"; 
        div_intro_login.style.display = "none"; 
        div_saludo_usuario.style.display = "none"; 
        div_simulador.style.display = "none"; 
        div_resultado.style.display = "none"; 
        visualizaHTML_redirect_login.style.display = "none";
        visualizaHTML_dolares.style.display = "none";        
        visualizaHTML_no_login.style.display = "block";
    } else {
        saludo_usuario.style.display = "block";
        saludo_usuario.innerText = `Bienvenido/a ${usuario_logueado.toUpperCase()}`;
        btn_cerrar_sesion.style.display = "block"; 
        div_intro_login.style.display = "block"; 
        div_saludo_usuario.style.display = "block"; 
        div_simulador.style.display = "block"; 
        div_resultado.style.display = "block";   
        visualizaHTML_no_login.style.display = "none";
        visualizaHTML_redirect_login.style.display = "none";      
        visualizaHTML_dolares.style.display = "block";
    }
}

// Funcion que calcula el prestamo (desde el boton)
function fn_calcular_prestamo() {    
    let monto = pedir_y_validar_monto(input_valor_prestamo.value);
    
    if (monto != false) {
        let cuotas = pedir_y_validar_cuotas(input_cantidad_de_cuotas.value);

        if (cuotas) {
            let prestamo = calcular_prestamo(input_valor_prestamo.value,input_cantidad_de_cuotas.value);
        }
    }    
}

// Funcion de pausa
function fn_registrado() {
    visualizaHTML_redirect_login.style.display = "block"; 
    visualizaHTML_no_login.style.display = "none";   
    btn_cerrar_sesion.style.display = "block";         
    visualizaHTML_redirect_login.style.display = "none"; 
    div_intro_login.style.display = "block";            
    div_saludo_usuario.style.display = "block"; 
    div_simulador.style.display = "block"; 
    div_resultado.style.display = "block";  
    visualizaHTML_dolares.style.display = "block";    
};

// Funcion que valida lo ingresado en el campo Monto
function fn_valida_monto_ingresado() {
    let valor = parseFloat(input_valor_prestamo.value).toFixed(2);
  
    if ( valor > 50000000) {
        error_monto_invalido.style.display = "block";
        error_monto_invalido.innerText = monto_error_supera_max;
    } else if (isNaN(valor)) {
        error_monto_invalido.style.display = "block";
        error_monto_invalido.innerText = monto_error_valido;
    } else {
        error_monto_invalido.style.display = "none";
    }
}

// funcion link a dolarsi
function fn_link_dolar() {
    window.open("https://www.dolarsi.com/", '_blank').focus();
}

function fn_msg_tosty(text) {
    Toastify({
        text: text,        
        duration: 3000        
    }).showToast();
}

// Buscamos el usuario ingresado en el Array
if (array_JSON != null) {
    if (array_JSON.length > 0 ) {
        let usuario_logueado_session_storage = JSON.parse(array_JSON);            
        fn_visualizar_contenido_usuario(usuario_logueado_session_storage.usuario);
    } else {
        fn_visualizar_contenido_usuario(false);
    }
} else {
    fn_visualizar_contenido_usuario(false);
}




  
