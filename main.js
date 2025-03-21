const buscadorButton = document.querySelector('.buscador-button');
const buscadorContainer = document.querySelector('.buscador-container');
const allButtons = document.querySelectorAll('.cesta');


buscadorButton.addEventListener('click', () => {
  buscadorContainer.style.display = 'flex'; 
  buscadorContainer.classList.add('show');
  allButtons.forEach((button) => {
    button.style.display = 'none'; 
  });
});


buscadorContainer.addEventListener('mouseleave', () => {
  buscadorContainer.style.display = 'none'; 
  buscadorContainer.classList.remove('show');
  allButtons.forEach((button) => {
    button.style.display = 'block'; 
  });
});
