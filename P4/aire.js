console.log('Ejecutando JS...');

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
var img = document.getElementById('imagen');
const ctx = canvas.getContext('2d');
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