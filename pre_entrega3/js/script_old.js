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

// Función que pregunta si queremos salir de la calculadora de prestamos
// Si llega con algún valor, devuelve el valor y no pregunta
// Si llega con 'null' pregunta si se desea salir
// Solo admite valores SI o NO
function salir_prestamo(valor_salir) {    
    if (valor_salir == null ) {
        let salir_function = 0;    
        while (salir_function != "SI") {
            salir_function = prompt("¿Desea salir de la calculadora de préstamos? - ingrese: Si/No");                    
            // Si no es nulo, pasamos el valor a Mayusculas
            if (salir_function != null) {            
                salir_function = salir_function.toUpperCase()
            }
            // Validamos si es SI o NO
            // Caso contrario volvemos a mostrar el mensaje
            if (salir_function == "SI" || salir_function == "SÍ") {
                console.log("Muchas gracias por usar nuestra calculadora de préstamos'");

                // Seteamos la variable en False así no sigue calculando
                continua_procesando = false;
                salir_while = true;

                return true;  
            } else if (salir_function == "NO") {
                console.clear()
                console.log("Excelente",nombre_usuario,"empecemos de nuevo"); 
                return false;                
            } else {
                console.log("Por favor ingrese solamente los valores 'Si' o 'No'");                 
            }                    
         }
    } 
    return valor_salir;
}

// Función que solicita y valida el monto ingresado correctamente
// Valida que solamente sea Numero y menor a $5.000.000,00.-
function pedir_y_validar_monto() {        
    let monto_ingresado = prompt("Ingrese el valor del préstamo a calcular. Recuerde que el máximo a solicitar es de $ 5.000.000,00.-");
    monto_ingresado = salir_prestamo(monto_ingresado);
    
    // Si todos los datos son correctos continuamos
    if (continua_procesando) {
        // Mientras el valor no sea Numérico y menor a 5.000.000     
        while (isNaN(monto_ingresado) || monto_ingresado == false || monto_ingresado < 1 || monto_ingresado > 5000000)  {            
            // Pedimos de nuevo el importe a calcular
            if (salir_prestamo(monto_ingresado) == false && monto_ingresado != '') {
                console.log("Usted quiere seguir calculando, genial... sigamos!");
                monto_ingresado = "Valor loop";
            } else if (isNaN(monto_ingresado)) {            
                console.log("El valor $",monto_ingresado,"' no es un número, por favor solo números!")
            } else if (monto_ingresado >= 5000000) {
                console.log("El valor $",monto_ingresado,"' supera la cantidad máxima para solicitar!")
            } else if (monto_ingresado < 1) {
                console.log("¿En serio? $",monto_ingresado,"' dale, no seas rata... vos pedí!")
            }         
            monto_ingresado = prompt("Por favor, ingrese un valor de préstamo valido, recuerde que el máximo a solicitar es de $5.000.000,00.-");     
            monto_ingresado = salir_prestamo(monto_ingresado);  
            
            if (continua_procesando != true) break;
        }   
        // Mostramos que el valor es correcto
        if (monto_ingresado != true ) {
            console.log("El monto ingresado es correcto!");
        }
    }
    return parseFloat(monto_ingresado);
}

// Función que solicita y valida la cantidad de cuotas
// Valida que solamente sea Numero y alguno de los valores 3-6-9-12-24-36
function pedir_y_validar_cuotas() {        
    let cuotas_ingresadas = prompt("Ingrese la cantidad de cuotas, recuerde que puede ingresar solo los valores 3, 6, 9, 12, 24 y 36");
    cuotas_ingresadas = salir_prestamo(cuotas_ingresadas);

    cuotas_ingresadas = validar_cuotas(cuotas_ingresadas)

    // Si todos los datos son correctos continuamos
    if (continua_procesando) {
        // Mientras el valor no sea Numérico y menor a 5.000.000     
        // while ((isNaN(cuotas_ingresadas) || cuotas_ingresadas == false) || (cuotas_ingresadas !=3 && cuotas_ingresadas !=6 && cuotas_ingresadas !=9 && cuotas_ingresadas !=12 && cuotas_ingresadas !=24 && cuotas_ingresadas !=36))  {
        while ((isNaN(cuotas_ingresadas) || cuotas_ingresadas == false) || (cuotas_ingresadas !=3 && cuotas_ingresadas !=6 && cuotas_ingresadas !=9 && cuotas_ingresadas !=12 && cuotas_ingresadas !=24 && cuotas_ingresadas !=36))  {
            // Pedimos de nuevo el importe a calcular
            if (salir_prestamo(cuotas_ingresadas) == false && cuotas_ingresadas != '') {
                console.log("Usted quiere seguir calculando, genial... sigamos!");
                cuotas_ingresadas = "Valor loop";
            } else if (isNaN(cuotas_ingresadas)) {            
                console.log("El valor",cuotas_ingresadas,"' no es un número, por favor solo el número de cuotas valido!")
            } else if (cuotas_ingresadas !=3 || cuotas_ingresadas !=6 || cuotas_ingresadas !=9 || cuotas_ingresadas !=12 || cuotas_ingresadas !=24 || cuotas_ingresadas !=36) {
                console.log("El valor",cuotas_ingresadas,"es incorrecto. Por favor, ingrese la cantidad de cuotas nuevamente, recuerde que puede ingresar solo los valores 3, 6, 9, 12, 24 y 36")
            }         
            cuotas_ingresadas = prompt("Por favor, ingrese un valor de cantidad de cuotas valido, recuerde que puede ingresar solo los valores 3, 6, 9, 12, 24 y 36");     
            cuotas_ingresadas = salir_prestamo(cuotas_ingresadas);

            if (continua_procesando != true) break;
        }   
        // Mostramos que el valor es correcto
        if (cuotas_ingresadas != true ) {
            console.log("La cantidad de cuotas ingresadas es correcta!");
        }
    }
    return parseFloat(cuotas_ingresadas);
}

// Función que calcula los valores del préstamo
// Los valores ya vienen validados por las otras dos funciones
function calcular_prestamo( valor_monto, valor_cant_cuotas) {
    // Calculamos el interés generado
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
    }
    // Sumamos el Interés al valor del préstamo para obtener el total
    monto_final = valor_monto + interes_generado + comision_apertura;
    
    // Calculamos el valor de la cuota
    valor_cuota = monto_final / valor_cant_cuotas;

    return true;
}

// Funcion que muestra los valores finales del prestamo.
function mostrar_resutados() {

    // Limpiamos la consola
    console.clear();
    
    console.log("Monto inicial solicitado: $",monto.toFixed(2));
    console.log("Cantidad de cuotas seleccionadas: ",cant_cuotas);    
    console.log("Valor de la Cuota: $",valor_cuota.toFixed(2));    
    console.log("Interés generado: $",interes_generado.toFixed(2));    
    if (cant_cuotas < 24) { console.log("Recuerde que los préstamos de menos de 24 cuotas tienen una comisión por apertura de: $",comision_apertura.toFixed(2)) };  
    console.log("Monto final: $",monto_final.toFixed(2));       
   
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

// Funcion que valida la cantidad de cuotas validas segun los valores del array
function validar_cuotas(valor_cant_cuotas) {    
    let existe_cuota = cuotas_validas.find(function(e) {   
        return e == valor_cant_cuotas;
    })    
    if (existe_cuota != null) {
        return existe_cuota;
    } else {
        return false;
    }    
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

// -------------------------------------------------Interfaz-------------------------------------------------
alert("No se mostraran los mensajes durante la primera ejecución, usted puede cancelar la primera simulación y presionar F5 y abrir la consola y ver la información.");

// Ingresamos el nombre 'Simulando el login del Usuario'    
nombre_usuario = prompt("Ingrese su nombre");
nombre_usuario = salir_prestamo(nombre_usuario);

// Si ingreso el nombre continuamos.
if (continua_procesando) {
    // Ingresamos la edad del usuario
    edad_usuario = prompt("Ingrese su edad");
    edad_usuario = salir_prestamo(edad_usuario);

    // Guardamos el usuario logueado en un Objeto
    usuario_logueado = new Usuarios_logueados(nombre_usuario,edad_usuario,0);
}

// Hacemos un loop hasta que el usuario no quiera calcular más prestamos
while (salir_while != true) {
    if (nombre_usuario == '') { continua_procesando = false};
    if (continua_procesando) {                
        console.log("Bienvenido", nombre_usuario,", te voy a ayudar a calcular un préstamo!");                
    
            // Si todos los datos son correctos continuamos
        if (continua_procesando) {
            // Ejecutamos la función que pide y valida el Monto del préstamo
            monto = pedir_y_validar_monto();
            
            // Si todos los datos son correctos continuamos
            if (continua_procesando) {
                // Ejecutamos la función que pide y valida la cantidad de cuotas
                cant_cuotas = pedir_y_validar_cuotas();
                
                // Si todos los datos son correctos continuamos
                if (continua_procesando) {
                    continua_procesando = calcular_prestamo(monto, cant_cuotas);
                    
                    // Mostramos el mensaje de procesando
                    alert("Estamos procesando su solicitud... 'Aceptar' para continuar!");
                    
                    continua_procesando = mostrar_resutados();                
                }
            }
        }
    }

    // Acumulamos la suma de los prestamos del usuario
    usuario_logueado.suma_total_simualada = usuario_logueado.suma_total_simualada + monto_final.toFixed(2);

    // Si todos los datos son correctos continuamos
    if (continua_procesando == true) {
        salir_while = salir_prestamo(); 
    }      
}
