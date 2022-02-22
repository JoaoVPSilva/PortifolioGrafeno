const target = document.querySelectorAll('[data-anime]');
const animationCLass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4); //declaração variável windowTop
    target.forEach(function(element) {

        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationCLass);
        } else {
            element.classList.remove(animationCLass);
        }

    })
}

animeScroll(); //função sempre executada quando usuario entra na pag



window.addEventListener('scroll', function() {
    animeScroll();
});