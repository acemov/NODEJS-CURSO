let objeto = {
    nombre: "Juan",
    edad: 22,
    frase: function () {
        return this.nombre + " tiene " + this.edad + " años"
    }
}
// console.log(objeto.frase())
// ------------------------------------------------------------
let a = () => {
    console.log("Hola mundo")
}
// a()
// ------------------------------------------------------------
function alumno(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad
}
let alumno1 = new alumno("Franco", "Counter", 88)
// console.log(alumno1.nombre);
// ------------------------------------------------------------

function crearContador() {
    let contador = 0; // Esta variable está en el "ámbito cerrado" de la función interna

    return function () { // Creamos una función interna (closure)
        contador += 1; // Incrementa el contador cada vez que se llama a esta función
        console.log(contador);
    };
}

const contador1 = crearContador(); // Creamos una instancia de contador
contador1(); // Muestra: 1
contador1(); // Muestra: 2
contador1(); // Muestra: 3

const contador2 = crearContador(); // Creamos otra instancia independiente
contador2(); // Muestra: 1
contador2(); // Muestra: 2
