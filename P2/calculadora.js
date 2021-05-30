console.log("Ejecutando JS...");

display= document.getElementById("display");
igual = document.getElementById("igual");
ac = document.getElementById("ac"); //el AC es borrar todo
del = document.getElementById("del"); //el DEL es borrar un numero



//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3,
}
//Empezamos en el estado inicial de nuestra maquina de estados
let estado = ESTADO.INIT;  

//creamos un array apartir de la clase botones especificada en el html
let boton = document.getElementsByClassName("botones");

//hacemos nuestro bucle para los botones
for(i=0; i<boton.length; i++){
    boton[i].onclick=(ev)=>{
        numero(ev.target.value); //El parámetro ev.target contiene el boton que ha recibido el click   
    
    }
}
//creamos un array apartir de la clase opera especificada en el html
let operacion = document.getElementsByClassName("operacion");

//hacemos nuestro bucle para los operadores
for(i=0; i<operacion.length; i++){
    operacion[i].onclick=(ev)=>{
        opera(ev.target.value);    
    }
}
//--n=numero
//En esta funcion segun el estado en el que estemos haremos una cosa u otra segun mi maquina de estados
function numero(n){
    if (estado == ESTADO.INIT){
        display.innerHTML = n;
        estado = ESTADO.OP1;
    }else if (estado == ESTADO.OP1){
        display.innerHTML += n;
    }else if (estado == ESTADO.OPERATION){
        display.innerHTML += n;
        estado = ESTADO.OP2;
    }else if (estado == ESTADO.OP2){
        display.innerHTML += n;
    }
}
function opera(o){
    if(estado != ESTADO.OPERATION){
        display.innerHTML += o;
        estado = ESTADO.OPERATION;
    }
}
//actualizamos nuestro display a cero cuando clickeamos el boton AC...
//.. y volvemos al estado inicial(INIT)
ac.onclick = () => {
  display.innerHTML = 0;
  estado = ESTADO.INIT;
}
//cuando clickeamos el boton DEl, actualizamos el display y borramos un numero
del.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
igual.onclick = () => {
    if (estado == ESTADO.OP1  || estado == ESTADO.OP2) {
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
}
}