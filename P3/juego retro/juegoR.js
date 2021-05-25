console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
//-- Definir el tamaño del canvas(horizontal,vertical)
canvas.width = 500;
canvas.height = 500;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//Radio de la bola
var radioB = 9;
var x = canvas.width/2; //puntoX en el que empieza
var y = canvas.height - 9; //puntoY en el que empieza

//-- Velocidad del objeto 1
var velx = 3;
var vely = 2;
    const chocaLadrillo = new Audio('choca.mp3');
    const ganamos = new Audio('ganamos.mp3');
    const perdemos = new Audio('perdemos.mp3');
    const chocaRaqueta = new Audio('choca.mp3');
    const unaMenos = new Audio('unaMenos.mp3');
//funcion para dibujar la pelota
function DrawBall(){
  ctx.beginPath();
  ctx.arc(x, y, 9, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}
var vidas = 3;

//Vidas 
function VidasQuedan(){
  ctx.font = "15px Times New Roman";
  ctx.fillText("Vidas: " + vidas , 7, 13);
  ctx.fillStyle = 'white';
}

var puntos = 0;

//Puntos 
function Points(){
  ctx.font = "15px Times New Roman"
  ctx.fillText("Puntos: " +puntos, 410, 12);
  ctx.fillStyle = 'white';
  
}
var HRaqueta = 10; //H= Height
var WRaqueta = 62; //W= Width
var R = (canvas.width - WRaqueta)/2;

//Función para dibujar nuestra raqueta
function DrawRacket(){
  ctx.beginPath();
  ctx.rect(R, canvas.height-HRaqueta, WRaqueta, HRaqueta);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}
var right = false;
var left = false;
//pulsadas
document.addEventListener("keyup", keyUpHandler, false);
//sin pulsar
document.addEventListener("keydown", keyDownHandler, false);

function keyUpHandler(e){
  if(e.keyCode == 39){
    right = false;
  }
  if(e.keyCode == 37){
    left = false;
  }
}
function keyDownHandler(e){
  if(e.keyCode == 39){
    right = true;
  }
  if(e.keyCode == 37){
    left = true;
  }
}
const BRICK = {
  C : 13, //COLUMNAS
  F : 6, //FILAS
  W : 35, //W= WidthW 
  H : 15, //H= Height
  padding: 1, //RELLENO
  ESTADO : true, 
}  

const bricks = [];
//Recorrer filas
for (let i = 0; i < BRICK.F; i++) {
  bricks[i] = []; //inicializamos
  for (let j = 0; j < BRICK.C; j++) {
    bricks[i][j] = {
      x: (BRICK.W + BRICK.padding) * j,
      y: 20 + (BRICK.H + BRICK.padding) * i,
      Width: BRICK.W,
      Height: BRICK.H,
      padding: BRICK.padding,
      ESTADO: BRICK.ESTADO
    };
  }
}


//Dibujar los ladrillos
function DrawBricks(){
  for (let i = 0; i < BRICK.F; i++){
    for(let j = 0; j < BRICK.C; j++){

      if (bricks[i][j].ESTADO){
          ctx.beginPath();
          ctx.rect(bricks[i][j].x, bricks[i][j].y, BRICK.W, BRICK.H);
          ctx.fillStyle = "white";
          ctx.fill();
          ctx.closePath();
      }
    }
  
}
}
  var playing = false;
  
//funcion para detectar colisiones entre bola y ladrillos
function bricksBall() {
                  for (let i = 1; i < BRICK.F; i++) {//Inicializo en 1 porque igual lo hice en el bucle de arriba
                    for (let j = 1; j < BRICK.C; j++) {
                      if (bricks[i][j].ESTADO) {
                        if ((y >= bricks[i][j].y) && (y <= (bricks[i][j].y + 20))){
                          if ((x >= bricks[i][j].x) && (x <= (bricks[i][j].x + 70))){
                            bricks[i][j].ESTADO = false;
                            vely = -vely;
                            puntos += 1;
                            chocaLadrillo.play();
                  }
              }
          }
      }
  }
}


//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  VidasQuedan();
  Points();
  DrawBall();
  DrawRacket();
  DrawBricks();
  bricksBall();

      //Rebota la bola
      if(x + velx > canvas.width - radioB || x + velx < radioB){
          velx = -velx;
      }
      if(y + vely < radioB) {
          vely = -vely;
      }else if(y + vely > canvas.height - radioB){
          if(x > R && x <R + WRaqueta){
              vely = -vely;
          }
          chocaRaqueta.play();
      }

      //cuando la pelota toca el suelo....

      if (y >= canvas.height){
        velx = 0;
        vely = 0;
        x = canvas.width/2;
        y = canvas.height - 10;
        R= (canvas.width - WRaqueta)/2;
        vidas -= 1;
        unaMenos.play();
      }else if(vidas == 0){
        velx = 0;
        vely = 0;
        raqueta = (canvas.width - WRaqueta)/2;
        document.getElementById("try").style.display = "";
        document.getElementById("game_over").style.display = "block";
        document.getElementById("canvas").style.display = "none";
        perdemos.play();
      }
      //cuando destruimos todos los bloques....
      if(puntos == 70){
        velx = 0;
        vely = 0;
        R = (canvas.width - WRaqueta)/2;
        document.getElementById("try").style.display = "";
        document.getElementById("win").style.display = "block";
        document.getElementById("canvas").style.display = "none";
        ganamos.play();
      }
      //para que mi pala no se salga del canvas
      if(right && R < canvas.width - WRaqueta){
          R += 6;
      }
      else if(left && R > 0) {
          R -= 6;
      }

      x += velx;
      y += vely;
      
        //-- 4) Volver a ejecutar update cuando toque
        requestAnimationFrame(update);
      }

      //-- ¡Que empiece la función!
      update();
