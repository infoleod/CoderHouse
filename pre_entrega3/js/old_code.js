
// // Función que pregunta si queremos salir de la calculadora de prestamos
// // Si llega con algún valor, devuelve el valor y no pregunta
// // Si llega con 'null' pregunta si se desea salir
// // Solo admite valores SI o NO
// function salir_prestamo(valor_salir) {    
//     if (valor_salir == null ) {
//         let salir_function = 0;    
//         while (salir_function != "SI") {
//             salir_function = prompt("¿Desea salir de la calculadora de préstamos? - ingrese: Si/No");                    
//             // Si no es nulo, pasamos el valor a Mayusculas
//             if (salir_function != null) {            
//                 salir_function = salir_function.toUpperCase()
//             }
//             // Validamos si es SI o NO
//             // Caso contrario volvemos a mostrar el mensaje
//             if (salir_function == "SI" || salir_function == "SÍ") {
//                 console.log("Muchas gracias por usar nuestra calculadora de préstamos'");

//                 // Seteamos la variable en False así no sigue calculando
//                 continua_procesando = false;
//                 salir_while = true;

//                 return true;  
//             } else if (salir_function == "NO") {
//                 console.clear()
//                 console.log("Excelente",nombre_usuario,"empecemos de nuevo"); 
//                 return false;                
//             } else {
//                 console.log("Por favor ingrese solamente los valores 'Si' o 'No'");                 
//             }                    
//          }
//     } 
//     return valor_salir;
// }


// // Funcion que muestra los valores finales del prestamo.
// function mostrar_resutados() {

//     // Limpiamos la consola
//     console.clear();
    
//     console.log("Monto inicial solicitado: $",monto.toFixed(2));
//     console.log("Cantidad de cuotas seleccionadas: ",cant_cuotas);    
//     console.log("Valor de la Cuota: $",valor_cuota.toFixed(2));    
//     console.log("Interés generado: $",interes_generado.toFixed(2));    
//     if (cant_cuotas < 24) { console.log("Recuerde que los préstamos de menos de 24 cuotas tienen una comisión por apertura de: $",comision_apertura.toFixed(2)) };  
//     console.log("Monto final: $",monto_final.toFixed(2));       
   
//     return true;
// }


// // Funcion que valida la cantidad de cuotas validas segun los valores del array
// function validar_cuotas(valor_cant_cuotas) {    
//     let existe_cuota = cuotas_validas.find(function(e) {   
//         return e == valor_cant_cuotas;
//     })    
//     if (existe_cuota != null) {
//         return existe_cuota;
//     } else {
//         return false;
//     }    
// }

// alert("No se mostraran los mensajes durante la primera ejecución, usted puede cancelar la primera simulación y presionar F5 y abrir la consola y ver la información.");

// // Ingresamos el nombre 'Simulando el login del Usuario'    
// nombre_usuario = prompt("Ingrese su nombre");
// nombre_usuario = salir_prestamo(nombre_usuario);

// // Si ingreso el nombre continuamos.
// if (continua_procesando) {
//     // Ingresamos la edad del usuario
//     edad_usuario = prompt("Ingrese su edad");
//     edad_usuario = salir_prestamo(edad_usuario);

//     // Guardamos el usuario logueado en un Objeto
//     usuario_logueado = new Usuarios_logueados(nombre_usuario,edad_usuario,0);
// }

// // Hacemos un loop hasta que el usuario no quiera calcular más prestamos
// while (salir_while != true) {
//     if (nombre_usuario == '') { continua_procesando = false};
//     if (continua_procesando) {                
//         console.log("Bienvenido", nombre_usuario,", te voy a ayudar a calcular un préstamo!");                
    
//             // Si todos los datos son correctos continuamos
//         if (continua_procesando) {
//             // Ejecutamos la función que pide y valida el Monto del préstamo
//             monto = pedir_y_validar_monto();
            
//             // Si todos los datos son correctos continuamos
//             if (continua_procesando) {
//                 // Ejecutamos la función que pide y valida la cantidad de cuotas
//                 cant_cuotas = pedir_y_validar_cuotas();
                
//                 // Si todos los datos son correctos continuamos
//                 if (continua_procesando) {
//                     continua_procesando = calcular_prestamo(monto, cant_cuotas);
                    
//                     // Mostramos el mensaje de procesando
//                     alert("Estamos procesando su solicitud... 'Aceptar' para continuar!");
                    
//                     continua_procesando = mostrar_resutados();                
//                 }
//             }
//         }
//     }

//     // Acumulamos la suma de los prestamos del usuario
//     usuario_logueado.suma_total_simualada = usuario_logueado.suma_total_simualada + monto_final.toFixed(2);

//     // Si todos los datos son correctos continuamos
//     if (continua_procesando == true) {
//         salir_while = salir_prestamo(); 
//     }      
// }

// monto = pedir_y_validar_monto();
// cant_cuotas = pedir_y_validar_cuotas();
// continua_procesando = calcular_prestamo(monto, cant_cuotas);
// continua_procesando = mostrar_resutados();   

