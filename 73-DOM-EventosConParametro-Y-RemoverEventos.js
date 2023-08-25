// Una fuction manejadoras de eventos solo puede recebir un parametro que es el evento en si.

const $eventMult = document.getElementById('evento-multiple');

// se creamos una fuction que recibe un parametro y le asignamos al manejadore de evento este parametro  passa a recebir el evento como valor

function saludar(nombre = 'desconocido(a)'){
    alert(`Hola, ${nombre} Benvenido(a)!!`)
}
$eventMult.addEventListener('click',saludar) // returna => Hola, [pointer event], Benvenido(a)

//Para solucionar esto antes de las Arrow fuction, lo que se hacia es criar un fuction para el manejador de evento y dentro de esta function add la function a executar 

$eventMult.addEventListener('click',function(){
    saludar();
});

// Com los arrow fuction es mas simplificado 

$eventMult.addEventListener('click',()=> saludar());
// con esto podemos mandarles parametro y invocar cuantas vezes necessario la function
$eventMult.addEventListener('click',()=> {
    saludar()
    saludar('julio')
});


//-------------------Elinimar Eventos de un Elemento----------------------

//Este metodo solo es posible com evento multiples, pues asi como tenemos el addEventListener() tenmos tbn el removeEventListener();
const $eventRemover = document.getElementById('evento-remove');

//Para poder remover un evento de un fuction esta tiene que ser un fuction declarada o expresado, con arrow fuction no funcio pues es un a fuction anonima (la caracteristica de una fuction anonima en un evento es que apartir de declarad se executa y con eso perde su referencia)

$eventRemover.addEventListener('dblclick',(e)=>{
    alert(`removiendo el evento de tipo "${e.type}" con arrow fuction`)
    // $eventRemover.removeEventListener('dblclick',fuction a eliminar)
    // como la fuction es anonimal no hay referencia para asignar al segundo parametro de removeEventLister()
});

//criamos un fuction expresada para exjemplo

const removerDBLClick =(e)=>{
    alert(`removiendo el evento de tipo "${e.type}"`)
    $eventRemover.removeEventListener('dblclick',removerDBLClick);
    $eventRemover.disabled = true;
};

$eventRemover.addEventListener('dblclick', removerDBLClick)
