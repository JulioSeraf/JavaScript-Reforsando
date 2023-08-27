//El flujo de evento es como el evento va a problagar dentro del DOM, por defecto tenemos el efecto burbuja que propaga el evento como una burbuja , o sea crece asta todo elemeto padre 

const $divsEventos = document.querySelectorAll('.eventos-flujo div');
console.log($divsEventos)
function flujoEventos(e){
    console.log(`Hole te saludar ${this.className} desde el ${e.target.className}`)
}
//En este ejemplo podemos ver el efecto burbuja , al criar los eventos click de las seguintes div, las que estan dentro de un father con evento click, al ser acionadas consecutivamente acionan a los eventos que estan en su contenedor father
$divsEventos.forEach(div => {
    // el addEventListener tiene un tercer parametro que especifica el modo del evento, se no le asgnamos valor o le asgnamos "false", coresponde a el modo burbuja como a seguir
    div.addEventListener('click', flujoEventos,false);
    // Se le asgnamos "true" so modo passa a ser captura ques funciona de forma contraria del burbuja
    div.addEventListener('click', flujoEventos,true);
})

// el modo Captura como su nombre diz captura los eventos de contenedor father al hijo como contracion, contrario de lo burbuja que es en forma de expanción