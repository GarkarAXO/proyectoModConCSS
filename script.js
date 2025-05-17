function applyStyles() {
    const element = document.getElementById('element').value;
    const color = document.getElementById('color').value;
    const font = document.getElementById('font').value;
    const size = document.getElementById('size').value;

    const selectedElements = document.querySelectorAll(element);

    selectedElements.forEach(el => {
        el.style.color = color;
        el.style.fontFamily = font;
        el.style.fontSize = size + 'px';
    });
}

// prueba para aplicar estilos a los elementos con clases

// function aplicarEstilos() {
//     const selector = document.getElementById('elementoSelector').value;
//     const elementos = document.querySelectorAll(selector);

//     // Aquí puedes aplicar los estilos que desees a los elementos seleccionados
//     elementos.forEach(elemento => {
//         elemento.style.color = 'blue'; // Ejemplo de estilo
//         elemento.style.fontSize = '24px';
//     });
// }