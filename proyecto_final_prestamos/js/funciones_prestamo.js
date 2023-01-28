// --------------------------------------------Variables generales--------------------------------------------
let nombre_usuario = null;
let monto = 0;
let monto_final = 0;
let cant_cuotas = 0;
let valor_cuota = 0;
let interes_generado = 0;
let comision_apertura = 0;
let salir_while = null;
let continua_procesando = true;
let usuario_logueado = new Object();
let datos_prestamo = new Array();
let tabla_resultados = new Object();
let cuotas_validas = new Array(3,6,9,12,24,36);

// --------------------------------------------Constantes generales-------------------------------------------
const interes_3_6 = 0.15;
const interes_9_12 = 0.30;
const interes_24_36 = 0.45;
const comision = 0.05;

// -------------------------------------------------Funciones-------------------------------------------------
// Función que solicita y valida el monto ingresado correctamente
// Valida que solamente sea Numero y menor a $5.000.000,00.-
function pedir_y_validar_monto(monto) {            
    let val_ret = true;

    // Pedimos de nuevo el importe a calcular
    if (isNaN(monto) || monto == '' || monto < 1) {            
        error_monto_invalido.style.display = "block";
        error_monto_invalido.innerText = monto_error_valido;     
        val_ret = false;
    } else if (monto >= 50000000) {
        error_monto_invalido.style.display = "block";
        error_monto_invalido.innerText = monto_error_supera_max
        val_ret = false;
    }    

    if (val_ret) {
        error_monto_invalido.style.display = "none";
        return parseFloat(monto);
    } else {
        return val_ret;
    }
}

// Función que solicita y valida la cantidad de cuotas
// Valida que solamente sea Numero y alguno de los valores 3-6-9-12-24-36
function pedir_y_validar_cuotas(cantidad_cuotas) {        

    // Validamos si el valor es nulo
    if (cantidad_cuotas == '' || cantidad_cuotas == null) {
        error_cuotas_invalidas.style.display = "block";
        error_cuotas_invalidas.innerText = cuotas_error
        return false;
    } else {
        error_cuotas_invalidas.style.display = "none";        
        return true;
    }    
}

// Función que calcula los valores del préstamo
// Los valores ya vienen validados por las otras dos funciones
function calcular_prestamo( valor_monto, valor_cant_cuotas) {
    // Calculamos el interés generado
    valor_monto = parseFloat(valor_monto);
    valor_cant_cuotas = parseFloat(valor_cant_cuotas);

    // Buscamos los datos del prestamo segun la cantidad de cuotas
    datos_prestamo = buscar_prestamo(valor_cant_cuotas);
    
    // Según la cantidad de cuotas calculamos el interés y le sumamos la comisión en el caso de 3, 6, 9 y 12
    if ((valor_cant_cuotas == 3 || valor_cant_cuotas == 6)) {
        interes_generado = (valor_monto * datos_prestamo.interes);
        comision_apertura = (valor_monto * datos_prestamo.val_comision);
    } else if ((valor_cant_cuotas == 9 || valor_cant_cuotas == 12)) {
        interes_generado = (valor_monto * datos_prestamo.interes);
        comision_apertura = (valor_monto * datos_prestamo.val_comision);        
    } else if ((valor_cant_cuotas == 24 || valor_cant_cuotas == 36)) {
        interes_generado = (valor_monto * datos_prestamo.interes);
        comision_apertura = parseInt(0);
    }
    // Sumamos el Interés al valor del préstamo para obtener el total
    monto_final = valor_monto + interes_generado + comision_apertura;
    
    // Calculamos el valor de la cuota
    valor_cuota = monto_final / valor_cant_cuotas;

    res_monto_inicial.value = valor_monto.toFixed(2);
    res_cant_cuotas.value = parseInt(valor_cant_cuotas);
    res_val_cuota.value = valor_cuota.toFixed(2);
    res_interes_generado.value = interes_generado.toFixed(2);
    res_comision_apertura.value = comision_apertura.toFixed(2);
    res_monto_final.value = monto_final.toFixed(2);

    scroll(0,900)

    fn_msg_tosty("Prestamo calculado con exito!")
    
    return true;
}

// Funcion que busca dentro del array de prestamos y devuelve el array completo si es que lo encuentra
function buscar_prestamo(buscar_cuotas) {
    for (let prestamos of prestamos_validos) {        
        if (prestamos.cuotas == buscar_cuotas) {
            return prestamos;
        }   
    }
    return false;
}

// --------------------------------------------------Arrays--------------------------------------------------
// Array que contiene toda la info de los prestamos
let prestamos_validos = [
    {cuotas: 3,interes: interes_3_6,val_comision: comision, nombre_prestamo: "Basic 3"},
    {cuotas: 6,interes: interes_3_6,val_comision: comision, nombre_prestamo: "Basic 6"},
    {cuotas: 9,interes: interes_9_12,val_comision: comision, nombre_prestamo: "Flex 9"},
    {cuotas: 12,interes: interes_9_12,val_comision: comision, nombre_prestamo: "Flex 12"},
    {cuotas: 24,interes: interes_24_36,val_comision: comision, nombre_prestamo: "Master 24"},
    {cuotas: 36,interes: interes_24_36,val_comision: comision, nombre_prestamo: "Master 36"},
]

// -------------------------------------------------Objetos--------------------------------------------------
// Objeto Constructor de usuarios logueados
function Usuarios_logueados(nombre, edad, suma_total_simualada) {
    this.nombre = nombre;
    this.edad = edad;
    this.suma_total_simualada = suma_total_simualada
}
