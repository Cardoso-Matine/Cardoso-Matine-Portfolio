const professions = ["Full Stack Engineer", "Web Developer"];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const typeWriter = () => {
    const currentProfession = professions[professionIndex];
    const typewriterElement = document.getElementById('typewriter');
    
    if (isDeleting) {
        typewriterElement.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentProfession.length) {
        isDeleting = true;
        typeSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
};


document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle 'Ver' / 'Ocultar' para a seção de projetos
    const toggleBtn = document.getElementById('toggleProjectsBtn');
    const projectsCollapse = document.getElementById('projectsCollapse');
    if (toggleBtn && projectsCollapse) {
        toggleBtn.addEventListener('click', () => {
            const expanded = projectsCollapse.classList.toggle('expanded');
            projectsCollapse.classList.toggle('collapsed', !expanded);
            toggleBtn.textContent = expanded ? 'Hide projects' : 'Show projects';

            // When expanding, scroll to the projects section to keep context
            if (expanded) {
                projectsCollapse.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

















