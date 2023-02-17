// Obtener el elemento con el id "parrafo"
let paragraph = document.getElementById("parrafo");

// Obtener el texto del párrafo
let text = paragraph.innerText;

// Dividir el texto en un arreglo de palabras
let words = text.split(" ");

// Inicializar una variable para almacenar el texto acortado
let shortenedText = "";

// Inicializar una variable para contar el número de caracteres
let characterCount = 0;

// Recorrer cada palabra del arreglo
for (let i = 0; i < words.length; i++) {
    // Añadir la palabra al texto acortado
    shortenedText += words[i] + " ";
    // Aumentar el contador de caracteres
    characterCount += words[i].length + 1;
    if (characterCount >= 100) {
        // Si se ha alcanzado el límite de caracteres, agregar un salto de línea y resetear el contador
        shortenedText += "\n";
        characterCount = 0;
    }
}
// Establecer el texto acortado en el elemento "parrafo"
paragraph.innerText = shortenedText;

// Opcional, para añadir interacción con JavaScript

// const menu = document.querySelector("#menu");
// menu.addEventListener("click", function(event) {
  // console.log(event.target.textContent);
// });
