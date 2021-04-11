console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

/*-- Definir el tamaño del convas*/
canvas.width = 200;
canvas.height = 100;

/*-- Obtener el contexto del canvas*/
const ctx = canvas.getContext("2d");
//const cty = canvas.getContext("2d");
//-- Leer la imagen del documento html
//-- Esta deshabilitada
var EEUU = document.getElementById("EEUU");
EEUU.onload = ()=> {
    //-- Insertar la imagen en el canvas, una vez que
    //-- ya esté cargada!
    ctx.drawImage(EEUU, 0,0, 105, 55);
}
/*-- Cada objeto a dibujar lo delimitaremos*/
/*-- por los métodos beginPath() y closePath()*/
ctx.beginPath();

/*-- Definir un rectangulo de dimensiones 100x50,*/
/*-- cuya esquina superior izquierda está en (5,5)*/
ctx.rect(0,0, 105, 55);
ctx.rect(105,50, 100, 5);
ctx.rect(105,40, 100, 5);
ctx.rect(105,30, 100, 5);
ctx.rect(105,20, 100, 5);
ctx.rect(105,10, 100, 5);
ctx.rect(105,0, 100, 5);
ctx.rect(0,60, 200, 5);
ctx.rect(0,70, 200, 5);
ctx.rect(0,80, 200, 5);
ctx.rect(0,90, 200, 5);
ctx.rect(0,100, 200, 5);

/*-- Color de relleno del rectángulo*/
ctx.fillStyle = 'red';

/*-- Mostrar el relleno*/
ctx.fill();



/*-- Mostrar el trazo del rectángulo*/
ctx.stroke();
ctx.closePath();
