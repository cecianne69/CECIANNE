// Configuración del intervalo de cambio de imágenes (en milisegundos)
const intervalo = 3000; // Cambiar cada 3 segundos

// Función que cambiará las imágenes
function cambiarImagen() {
    const items = document.querySelectorAll('.carousel-item');
    const activeItem = document.querySelector('.carousel-item.active');
    let index = Array.from(items).indexOf(activeItem);

    // Remover la clase 'active' de la imagen actual
    activeItem.classList.remove('active');

    // Cambiar a la siguiente imagen
    index = (index + 1) % items.length;  // Ciclo a través de las imágenes
    items[index].classList.add('active');
}

// Llamar a la función cambiarImagen cada X segundos
setInterval(cambiarImagen, intervalo);
