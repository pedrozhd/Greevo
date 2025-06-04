document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.querySelector('.menuHamburguer');
    const menuOverlay = document.querySelector('.menuOverlay');
    const closeMenu = document.querySelector('.closeMenu');
    const menuLinks = document.querySelectorAll('.item__lista__menu');

    if (menuHamburguer && menuOverlay) {
        menuHamburguer.addEventListener('click', () => {
            menuOverlay.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth < 992) {
                    menuOverlay.classList.remove('active');
                }

                const href = link.querySelector('a').getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        history.pushState(null, null, href);
                    }
                }
            });
        });
    } else {
        console.error('Elementos do menu não encontrados');
    }
});