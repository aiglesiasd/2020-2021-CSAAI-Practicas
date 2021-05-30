console.log('Ejecutando JS...');

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
var imagen = document.getElementById('imagen');
var img = ctx.getImageData(0, 0, canvas.width, canvas.height);
var img1 = document.createElement("img1");
img1.data = img;
const ctx = canvas.getContext('2d');
const Selec1 = document.getElementById("Selec1");
const Grises = document.getElementById("Grises");
const Colores = document.getElementById("Colores");
//-- Para los deslizadores
const deslizador_rojo = document.getElementById('deslizador_rojo');
const deslizador_verde = document.getElementById('deslizador_verde');
const deslizador_azul = document.getElementById('deslizador_azul');
//-- Para el valor de cada deslizador
const value_r = document.getElementById('value_r');
const value_v= document.getElementById('value_v');
const value_a = document.getElementById('value_a');
var estado = "Colores";
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
  Colores.onclick = () => {
    estado = "Colores";
    ctx.putImageData(paraFiltroColor(), 0, 0);
  
  }

  
  function paraFiltroColor() {
    //-- Mostrar el nuevo valor del deslizador
    value_r.innerHTML = deslizador_rojo.value;
    value_v.innerHTML = deslizador_verde.value;
    value_a.innerHTML = deslizador_azul.value;

    ctx.drawImage(imagen, 0,0, canvas.width, canvas.height)
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
  
    
    rojo = deslizador_rojo.value;
    verde = deslizador_verde.value;
    azul = deslizador_azul.value;
    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > rojo)
        data[i] = rojo;
      if (data[i+1] > verde)
        data[i+1] = verde;
      if (data[i+2] > azul)
        data[i+2] = azul;
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
    return imgData;
  }
        //-- Funcion de retrollamada del deslizador rojo
        deslizador_rojo.oninput = () => {
            if (estado == "Colores"){
            paraFiltroColor();
        
            }
        }
        //-- Funcion de retrollamada del deslizador verde
        deslizador_verde.oninput = () => {
            if (estado == "Colores"){
            paraFiltroColor();
        
            }
        }
        //-- Funcion de retrollamada del deslizador azul
        deslizador_azul.oninput = () => {
            if (estado == "Colores"){
            paraFiltroColor();
        
            }
        }
  