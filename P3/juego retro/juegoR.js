console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas(horizontal=600,vertical=200)
canvas.width = 370;
canvas.height = 500;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;

//-- Velocidad horizontal del objeto
let velx = 2;
let vely = 1;
//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

  //-- Comprobar colisión con borde derecho
  //--lo que le estoy poniendo es que si alcanza la altura del canvas 0 x es menor que 0, que invierta la velocidad
  //-- 
  if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;
  }
  //para que rebote en la horizontal de arriba y abajo:
   //-- Condición de rebote en extremos horizontales del canvas
   if (y <= 0 || y > 490) {
    vely = -vely;
  }
  //-- se actualiza la posicion asi
  x = x + velx;
  y = y + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.arc(x, y, 5, 0,2 * Math.PI);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();