const boton= document.querySelector('.boton-activador');
const botonReducir= document.querySelector('.boton-desactivador');
const mensaje=document.querySelector('.contenedor-emergente');
const pantallaNegra=document.querySelector('.pantalla-negra');

mensaje.classList.add('desactivado');

boton.addEventListener('click', () => {
    mensaje.classList.toggle('desactivado');
pantallaNegra.classList.add('overlay')
})

botonReducir.addEventListener('click', () => {
    mensaje.classList.toggle('desactivado');
pantallaNegra.classList.remove('overlay')
})
