//Las delegacion de los eventos consiste el crie solamento un addEventListener() pegado a un father superior , neste caso podemos asignar al father raiz "Document", para despues simplismente tenemos que asignir al nodo/Elemnte que queremos que active este elemento, asi no tenemos que criar varios addEventeListenr() para cada elemento como los haciamos usando el metodo forEach(), esto nos da un mejor otimizacion de memoria de nustro app

// otra caracteristica de la delegacion  de los eventos es que ya no tenemos que estar teniendo la propagacion, ya que el evento esta pegado al nodo/elemento superior

//assignamos el addEventListener() al DOM
document.addEventListener('click',(e)=>{
    console.log(`click en ${e.target}`)
    // Dentro del evento criamos un condicional que valide el elemerto al qual vamos hacer la progamacion del evento
    //usamos el metodo matches() que busca un selector valido
    if(e.target.matches(".eventos-flujo div")){
        console.log()
    }
    if(e.target.matches(".eventos-flujo a")){
        console.log(`Hola soy el elemento ${e.target.tagName}`);
        e.preventDefault();
        //Como el evento esta asignado al nodo raiz "Document" ya no es necessario usar el metodo stopPropagation();
    }
})