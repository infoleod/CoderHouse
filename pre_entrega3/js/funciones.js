




// Cerramos la sesion
function fffn_btn_cerrar_sesion() {
    sessionStorage.removeItem("simulating_prestaming_usuarios");
    
    fn_visualizar_contenido_usuario(false);
}