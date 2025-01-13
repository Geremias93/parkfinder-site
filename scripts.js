// scripts.js

// Muestra una alerta y desplaza la vista a la sección deseada
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Valida el formulario de contacto
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    alert('Gracias por contactarnos. Responderemos pronto.');
    return true;
}

// Carrusel de imágenes en la sección hero
// scripts.js

let currentSlide = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + 1) % totalSlides;
    
    const carouselImages = document.querySelector('.carousel-images');
    const newTransformValue = -currentSlide * 100 / totalSlides + '%';
    carouselImages.style.transform = `translateX(${newTransformValue})`;
}

setInterval(showNextSlide, 5000);

