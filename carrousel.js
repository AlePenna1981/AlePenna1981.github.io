const btnAv = document.querySelector('.btnAvn');
const btnRe = document.querySelector('.btnRet');
const img = document.getElementById('carousel');

const imagenes = [
    'img/imagen css.png',
    'img/imagen html.png',
    'img/imagen js.png'
];

let index = 0;

const moveRight = () => {
    index = (index + 1) % imagenes.length;
    img.src = imagenes[index];
}

const moveLeft = () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    img.src = imagenes[index];
}

