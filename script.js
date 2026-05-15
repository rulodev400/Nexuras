document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // 1. Menú Hamburguesa Functional
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Evitar scroll cuando el menú está abierto
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // 2. Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 3. Efecto de Header al hacer Scroll (Sticky glassmorphism)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // 4. Smooth Scrolling mejorado para todos los anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Validación simple del formulario de contacto
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input').value;
        
        // Simulación de envío
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`¡Gracias! Hemos recibido tu correo: ${email}. Nos contactaremos pronto.`);
            btn.innerText = originalText;
            btn.disabled = false;
            form.reset();
        }, 1500);
    });
});
