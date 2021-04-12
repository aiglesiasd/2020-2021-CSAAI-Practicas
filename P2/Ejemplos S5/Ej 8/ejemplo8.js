console.log("Ejecutando JS...");
//ahora vamos a aprender a usar document.getElementsByClassName(), debido a que cuando tenemos muchos botones no podemos usar document.getElementByID(), o es poco recomendable.  
//de esta manera todos los botones que representan números los podemos agrupar en la clase dígito
const botones = document.getElementsByClassName("digito");

for (let boton of botones) {
    console.log("Boton: " +  boton.value)
}