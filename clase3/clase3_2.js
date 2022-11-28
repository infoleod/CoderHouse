/* Ejercicio
    VOTACION CLUB PEPITO JR
    VAN A VOTAR X CANTIDAD DE SOCIOS
    SE PUEDE VOTAR POR EL PARTIDO A O B O NULO (NO ES A NI B ) 
    POSIBLES RESULTADOS: 
        GANA A
        GANA B
        EMPATE
    INFORMAR QUE PARTIDO GANO
*/


let votacion = ""; 
let equipo_a = 0;
let equipo_b = 0;

while ( votacion != "SALIR") {
    votacion = prompt("Ingrese la votación (Ingrese quien gana, A, B o E para empate", "Ingrese A,B o E").toUpperCase();
    console.log(votacion);
    
    if (votacion=="A") {
        equipo_a = equipo_a +1
        console.log("punto para A");
    } else if (votacion=="B"){
        equipo_b = equipo_b +1
        console.log("punto para B");
    } else if (votacion=="E"){
        console.log("Empate");
    } else if (votacion != "SALIR") {
        console.log("No se puede computar el voto, recuerde ingresar A, B o E");
    }
    
    console.log(equipo_a);
}

if (equipo_a == equipo_b) {
    console.log("Empataron en el partido");    
} else if (equipo_a > equipo_b) {
    console.log("Gano el partido A");  
} else {
    console.log("Gano el partido B");  
}







