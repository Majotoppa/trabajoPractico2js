// confirm("Press a button!");

//bucle

//pedir texto

// almacenar texto

// condicion


////mostrar resultado

let ejecucion = true;
let resultado = "";

while (ejecucion){
    let texto = prompt ("ingrese una cadena de texto");

    resultado = resultado + "-" + texto;

    ejecucion = confirm("Press a button!");

}
console.log (resultado);