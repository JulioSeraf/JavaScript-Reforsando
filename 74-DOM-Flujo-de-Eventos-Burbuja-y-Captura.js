//El flujo de evento es como el evento va a problagar dentro del DOM, por defecto tenemos el efecto burbuja que propaga el evento como una burbuja , o sea crece asta todo elemeto padre 

const $divsEventos = document.querySelectorAll('.eventos-flujo div');
console.log($divsEventos)
function flujoEventos(e){
    console.log('Hola')
}
$divsEventos.forEach(div => div.addEventListener('click', flujoEventos))