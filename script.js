document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.banner-container img');
    let currentIndex = 0;
  
    setInterval(() => {
      // Ocultar la imagen actual
      images[currentIndex].classList.remove('active');
      images[currentIndex].classList.add('hidden');
  
      // Pasar a la siguiente imagen
      currentIndex = (currentIndex + 1) % images.length;
  
      // Mostrar la nueva imagen
      images[currentIndex].classList.remove('hidden');
      images[currentIndex].classList.add('active');
    }, 10000); // Cambia cada 10 segundos
  });
  