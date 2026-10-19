const menuToggle = document.querySelector('#menuToggle');
const navigation = document.querySelector('#navigation');
const contactForm = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

// Abrir y cerrar el menú
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});

// Cerrar el menú al elegir una sección
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// Formulario de demostración
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  formMessage.textContent =
    '¡Gracias! Esta es una demostración: el mensaje no se envió ni se guardó.';

  contactForm.reset();
});