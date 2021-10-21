//bucle

//pedir numero

// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números

// “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = true;
let Resultado = 0;

while (suma){
    let numeros =  prompt("ingrese un numero");
    
    if (isNaN(numeros)){
        alert("no es un numero");

    }else{
        //Resultado = Resultado + numeros;
        Resultado = parseInt(Resultado) + parseInt(numeros);
        suma = confirm("Press a button!");
    }

} console.log(Resultado);