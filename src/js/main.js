const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        setTimeout(() => (main.style.opacity = 1), 50);
        main.style.display = 'block';

    }, 4000);
}

init();