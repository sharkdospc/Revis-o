// Smooth Scroll para navegação
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para links internos
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
    
    // Animação das barras de habilidade
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    }
    
    // Observador para animar habilidades quando visíveis
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(document.getElementById('habilidades'));
    
    // Formulário de contato
    const contactForm = document.querySelector('.contato-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio
        const button = this.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Enviando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Mensagem Enviada!';
            button.style.background = '#27ae60';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
    
    // Efeito de digitação no título (opcional)
    const title = document.querySelector('header h1');
    const originalTitle = title.textContent;
    
    title.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalTitle.length) {
            title.textContent += originalTitle.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Iniciar efeito de digitação
    setTimeout(typeWriter, 1000);
});