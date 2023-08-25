//Los eventos en javaScrip son los mecanimos que tenemos en javaSCript para poder controlar las acciones de los usuario y definir certos comportamendos del documentos para que suceda a certo momento o  para que se compla algunas condiciones

// hay 3 maneras de definir los eventos en JavaScript

//hay varios tipos de eventos, para poder verlos todos puedes acessar los documento de https://developer.mozilla.org/en-US/docs/Web/Events

//function invocada para el atrributo onclick del artivo html

function holaMundo(){
    alert("Hola, Mundo!!");
};

//otro forma de executar un evenro es un manejador de evento semantico
//acessamos al elemento a add el evento y le asgnamos a una variable

const $eventSematico = document.getElementById('evento-semantico');

//despues invocamos el metoso de onclick y asgnamos la function a executar sin los () para evitar que se execute sicronicamente

$eventSematico.onclick = holaMundo;
// el incoveniente de este metodos es que no se le puede asignar mas de un fuction , ya que una replaca la otra como a seguir q deja de executar holaMundo() y renplaca por la function anonimal

$eventSematico.onclick = function(e){
    alert('Hola, Mundo manejador de eventos semanticos');
    console.log(e)
};

//Para invocar un evento que maneje varias fuction tenemos los MANEJADORE MULTIPLES, para eso usamos el metodo  addEventListener() , que recibe como primer parametro el envento a invocar si el "on" en el principio de la palabra onclick = click y segundo la function a executar

const $eventMult = document.getElementById('evento-multiple');

$eventMult.addEventListener('click',holaMundo);
$eventMult.addEventListener('click',(e)=>{
    alert('Hola, Mundo con manejador de eventos multiples')
    console.log(e.target)
    console.log(e.type)
});
