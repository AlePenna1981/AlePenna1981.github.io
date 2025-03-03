const btnAv = document.querySelector('.btnAvn');
const btnRe = document.querySelector('.btnRet');
const carousel = document.getElementById('carousel')
const imagenes = document.querySelectorAll('.cajaImg')

btnAv.addEventListener('click', e => moveRight())
btnRe.addEventListener('click', e => moveLeft())

let cambio = 0;

const moveRight = () => {
    cambio = cambio + 33.3;
    if (cambio > 66.6) {
        cambio = 0;
    }
    carousel.style.transform = `translate(-${cambio}%)`
}

const moveLeft = () => {
    cambio = cambio - 33.3;
    if (cambio < 0) {
        cambio = 66.6;
    }
    carousel.style.transform = `translate(-${cambio}%)`
}
