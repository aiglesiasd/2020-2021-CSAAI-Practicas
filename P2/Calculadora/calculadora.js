console.log("Ejecutando JS...");

display = document.getElementById("display");
suma = document.getElementById("suma");
igual = document.getElementById("igual");
AC = document.getElementById("AC"); //el AC es borrar todo
DEL = document.getElementById("DEL"); //el DEL es borrar un numeross

let botones =document.getElementById("boton");
let operaciones =document.getElementById("operaciones");
//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
 
 
 //Empezamos en el estado inicial de nuestra maquina de estados
 let estado = ESTADO.INIT;   

//actualizamos nuestro display a cero cuando clickeamos el boton AC...
//.. y volvemos al estado inicial(INIT)
AC.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}