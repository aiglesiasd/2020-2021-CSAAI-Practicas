console.log('Ejecutando JS...');

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
var imagen = document.getElementById('imagen');
const ctx = canvas.getContext('2d');
const Selec1 = document.getElementById("Selec1");
const Grises = document.getElementById("Grises");
const Colores = document.getElementById("Colores");
//-- Para los deslizadores
const deslizador_R = document.getElementById('deslizador_rojo');
const deslizador_G = document.getElementById('deslizador_verde');
const deslizador_B = document.getElementById('deslizador_azul');
//-- Para el valor de cada deslizador
const range_value_R = document.getElementById('value_r');
const range_value_G = document.getElementById('value_v');
const range_value_B = document.getElementById('value_a');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
imagen.onload = function () {

    //-- Se establece como tamaño del canvas el mismo
    //-- que el de la imagen original
    canvas.width = imagen.width;
    canvas.height = imagen.height;
  
    //-- Situar la imagen original en el canvas
    ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
  
    console.log("Imagen lista...");
  
  };
  
// Para la foto que quiero modificar cuando haga click..(seleccionamos)
Selec1.onclick = () => {
    imagen = document.getElementById('imagen');
    ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
  }
