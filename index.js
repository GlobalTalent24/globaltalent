//-- Carrusel ABout
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("pdfModal");
    const btn = document.getElementById("openPdf");
    const span = document.getElementsByClassName("close")[0];
    const iframe = document.getElementById("pdfFrame");

    // Asegurarse de que el modal esté oculto inicialmente
    modal.style.display = "none";

    btn.onclick = function(event) {
        event.preventDefault();
        iframe.src = btn.href;
        modal.style.display = "flex";
    }

    span.onclick = function() {
        modal.style.display = "none";
        iframe.src = ""; // Para detener la carga del PDF
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            iframe.src = ""; // Para detener la carga del PDF
        }
    }
});




// Toggle Servicios
function showModal(pdfPath) {
    const pdfModal = document.getElementById('pdfModal');
    const pdfIframe = document.getElementById('pdfIframe');
    const closeModal = document.querySelector('.close');

    pdfIframe.src = pdfPath;
    pdfModal.style.display = 'block';

    closeModal.onclick = () => {
        pdfModal.style.display = 'none';
        pdfIframe.src = '';
    };

    window.onclick = (event) => {
        if (event.target == pdfModal) {
            pdfModal.style.display = 'none';
            pdfIframe.src = '';
        }
    };
}





// Mixitup (Identidad)
const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});
mixer.filter('*');
// Logica para el Modal PDF (Identidad)
document.addEventListener('DOMContentLoaded', () => {
    const previewButton = document.getElementById('preview-button');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');

    previewButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});




// Swiper JS (Testimonios)
document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const pagination = document.querySelector('.swiper-pagination');
    let currentIndex = 0;

    // Crear bullets de paginación
    slides.forEach((slide, index) => {
        const bullet = document.createElement('div');
        bullet.classList.add('swiper-pagination-bullet');
        if (index === 0) bullet.classList.add('swiper-pagination-bullet-active');
        bullet.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        pagination.appendChild(bullet);
    });

    function updateSlider() {
        const offset = -currentIndex * (slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight));
        swiperWrapper.style.transform = `translateX(${offset}px)`;
        document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, index) => {
            bullet.classList.toggle('swiper-pagination-bullet-active', index === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    let slideInterval = setInterval(autoSlide, 3000);

    document.querySelector('.swipe').addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    document.querySelector('.swipe').addEventListener('mouseout', () => {
        slideInterval = setInterval(autoSlide, 3000);
    });
});






// Preguntas Frecuentes (FAQ)
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".faq__item");

    items.forEach(item => {
        const question = item.querySelector(".faq__question");
        
        question.addEventListener("click", () => {
            item.classList.toggle("active");

            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});



// Banner Cookies
document.addEventListener('DOMContentLoaded', (event) => {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesButton = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});




// Nav Toggle
const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');
const navSubmenuToggles = document.querySelectorAll('.nav__item--has-submenu > a');

const openNavHandler = () => {
    navMenu.classList.add('show');
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.classList.remove('show');
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';

    // Cerrar todos los submenús abiertos
    const allSubmenus = document.querySelectorAll('.nav__submenu');
    allSubmenus.forEach((submenu) => {
        submenu.classList.remove('show');
    });
}

const toggleSubmenuHandler = (event) => {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;

    // Alternar el submenú actual
    submenu.classList.toggle('show');
}

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);
navSubmenuToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleSubmenuHandler);
});




// Chat Bot //
document.addEventListener('DOMContentLoaded', function() {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotPanel = document.getElementById('chatbotPanel');
    const closeChat = document.getElementById('closeChat');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    const welcomeMessage = "Bienvenido a Global Talent. ¿En qué te podemos ayudar?";

    const faq = {
        "¿Cuáles son sus horarios de atención?": "Nuestro horario de atención es de lunes a viernes de 8:00 AM a 5:00 PM.",
        "¿Dónde están ubicados?": "Estamos ubicados en la Cra 8. 26-79, Pereira.",
        "¿Qué servicios ofrecen?": "Ofrecemos un servicio único relacionado con el asesoramiento estratégico.",
        "¿Cómo puedo contactar con Global Talent?": "Puedes contactar con nosotros enviando un correo servicio.globaltalent@gmail.com y llamando o escribiendo al +57 310 556 213 0."
    };

    chatbotButton.addEventListener('click', function() {
        chatbotPanel.style.display = 'flex';
        addMessage(welcomeMessage, 'bot');
        showFaqOptions();
    });

    closeChat.addEventListener('click', function() {
        chatbotPanel.style.display = 'none';
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const userMessage = chatInput.value;
            addMessage(userMessage, 'user');
            chatInput.value = '';
            getBotResponse(userMessage);
        }
    });

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showFaqOptions() {
        const faqOptions = document.createElement('div');
        faqOptions.classList.add('faq-options');

        Object.keys(faq).forEach(question => {
            const button = document.createElement('button');
            button.textContent = question;
            button.classList.add('faq-button');
            button.addEventListener('click', () => {
                addMessage(question, 'user');
                getBotResponse(question);
            });
            faqOptions.appendChild(button);
        });

        chatMessages.appendChild(faqOptions);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const response = faq[userMessage] || "Lo siento, no tengo una respuesta para esa pregunta.";
        addMessage(response, 'bot');
    }
});

