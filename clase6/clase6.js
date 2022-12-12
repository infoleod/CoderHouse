// Armamos una clase
class Alumno {
    constructor(nombres, apellidos, edades) {
        this.nombre = nombres;
        this.apellido = apellidos;
        this.edad = edades;
    }
}

let lista_final = [];

for (let i = 0; i < 3; i++) {

    let nombre = prompt("Ingrese nombre");
    let apellido = prompt("Ingrese apellido");
    let edad = prompt("Ingrese edad");

    let lista_alumno = new Alumno(nombre, apellido, edad);    
    lista_final.push(lista_alumno);
}

console.log(lista_final)

// for (const iterator of object) {
    
// }

