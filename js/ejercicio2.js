let numeroIncorrecto = true;

while (numeroIncorrecto){
   
    let MyNota = prompt("ingrese una nota del 1 al 10");
    document.write("Nota " + MyNota);
    console.log("Nota " + MyNota);

    if (isNaN(MyNota)){
        alert("introduce un numero valido")
    }else if(MyNota > 10 || MyNota < 0){
        
        alert("ingresar un numero entre 0 y 10")
        

    }else{
        numeroIncorrecto = false;
    }
 
}










if(MyNota <=2){
    alert("muy deficiente");
}else if (MyNota <=4){
    alert("insuficiente")
}else if (MyNota <=6){
    alert("suficiente")
}else if (MyNota <=7){
    alert("bien")
}else if (MyNota <=9){
    alert("notable")
}else if (MyNota <=10){
    alert("sobresaliente")
}
