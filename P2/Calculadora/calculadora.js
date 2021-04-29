console.log("Ejecutando JS...");

display = document.getElementById("display");
suma = document.getElementById("suma");
igual = document.getElementById("igual");
AC = document.getElementById("AC"); //el AC es borrar todo
DEL = document.getElementById("DEL"); //el DEL es borrar un numeross
//los botones que representan números los podemos agrupar en la clase botones
let boton = document.getElementsByClassName("botones");
//...clase operaciones
let operacion = document.getElementByClassName("operaciones");
//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
//hacemos nuestro bucle para los botones
for(i=0;i<boton.length;i++){
    boton[i].onclick=(ev)=>{
        botones(ev.target.value) //El parámetro ev.target contiene el boton que ha recibido el click   
    
    }
}
//hacemos nuestro bucle para los operadores
for(i=0;i<operacion.length;i++){
    operacion[i].onclick=(ev)=>{
        operaciones(ev.target.value)    
    }
}
 
//Empezamos en el estado inicial de nuestra maquina de estados
let estado = ESTADO.INIT;   

//actualizamos nuestro display a cero cuando clickeamos el boton AC...
//.. y volvemos al estado inicial(INIT)
AC.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}
//cuando clickeamos el boton DEl, actualizamos el display y borramos un numero
DEL.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0,-1)
  }
igual.onclick= () => {
    if(estado==ESTADO.OP1 || estado==ESTADO.INIT || estado==ESTADO.OP2)
    display.innerHTML = eval(display.innerHTML);
}