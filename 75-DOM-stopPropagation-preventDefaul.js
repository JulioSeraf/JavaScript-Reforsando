//Para parar la propagacion de los eventos dek DOM tenemos dos metodos que veremos a seguir 
//stopPropagation
 //este metodo para la propagacion de los eventos asi los otros elementos 
//preventDefaut
  //para por el evento que tiene el elemento por defecto com un linkU(a) o un bottom summit
const $linkEventos = document.querySelector('div a');
function saludar(e){
    console.log(`hola  te saluda ${this.className} desde ${e.target.className} `);
    // invocamoas el metodo stopPropagation para para la propagacion del veto asi los otro eventos 
    e.stopPropagation();
}
const $dis = document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click',saludar)
});

$linkEventos.addEventListener('click',(e)=>{
    //aqui para el evento del link que tiene por defector abrir un 
    console.log('El evento del link no se activara por el preventDefault()')
    e.preventDefault()
    // tbm paramos la propagacion para no activar los eventos de sus tives father
    e.stopPropagation();
});

//Ojo pq se un evento esta el modo captura, y queremos  prevenir un evento por defecto de un elemento que esta dentro de un elemento father, tenemos que estar de ojo pq el modo captura activa el evento del father a si el hijo, por consequecia el preventDefault() no se ativar si hay un stopPorpagation() asiginado al contenerdor father