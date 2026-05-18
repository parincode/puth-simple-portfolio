// Smooth Scrolling is handled by CSS (scroll-behavior: smooth)
// This script can be used for future interactions or animations

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized: Welcome, Parin Puth!');
    
    // Theme Toggle Logic
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === 'light-theme') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark-theme');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Fade-in effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
