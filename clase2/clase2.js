/*Se ingresan 2 num por teclado y se calcula el promedio.
Si el promedio es mayor a 7, aprobado
Si es mayor a 4, recupera
Si es menor a 4, recursa
Tambien se ingresa por teclado si el alumno es regular (SI o NO)
para aprobar o recuperar tiene que ser regular
*/

let numero1 = prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
let alumno_regular = prompt('Ingrese si el alumno es regular (Si/No)');
alumno_regular = alumno_regular.toUpperCase();

console.log(alumno_regular);

let result = (numero1 + numero2) / 2;

if (result > 7 && alumno_regular == "SI") {
    console.log("Aprobo");
} else if (result >= 4 && alumno_regular == "SI") {
    console.log("Recupera");
} else if (result < 4 ) {
    console.log("Recursa");
} else {
    console.log("el alumno no es regular");    
}


