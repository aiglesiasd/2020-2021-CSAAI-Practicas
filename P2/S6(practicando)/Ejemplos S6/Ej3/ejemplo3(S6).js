//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Definir un rectangulo de dimensiones 100x50,
    //-- cuya esquina superior izquierda está en (5,5)
    ctx.rect(5,5, 100, 50);

    //-- Dibujar
    ctx.fillStyle = 'white';

    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 20;

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
    
ctx.closePath()