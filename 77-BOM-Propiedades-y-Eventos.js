//estas propriedades no mostra el tamaño de la ventana de WINDONS se las barra de busqueda y etc... solo la ventana en si
// console.log(window.innerWidth)
// console.log(window.innerHeight)

// estos ya no motra las ventana con todo los otra herramietas adicionais
// console.log(window.outerWidth)
// console.log(window.outerHeight)
window.addEventListener('resize',(e)=>{
    //"resize", evento que se activa ao redimincionar la ventana del navegador 
    console.clear()
    console.log('***********Evento resize**********')
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log(window.outerWidth)
    console.log(window.outerHeight)
    console.log(e)
});

//para manejar los desplazamiento de la barra de scroll 
//horizontal
// console.log(window.scrollX)
//vertical
// console.log(window.scrollY)

window.addEventListener('scroll',(e)=>{
    //"scrool" se activa al movimental el scrool(barra de rollagen)
    console.clear()
    console.log('***********Evento scrool**********')
    //horizontal
    console.log(window.scrollX)
    //vertical
    console.log(window.scrollY)
    console.log(e);
});

//Estas propriedade nos mostra donde se encontra la ventana del navegador en nuestra pantalla del ordenador el modo de px
//horizontal
console.log(window.screenX)
//vertical
console.log(window.screenY)
window.addEventListener('load',e=>{
    //"load" se activa al terminar de cargar la ventana del navegador

    console.log('***********Evento Load**********')
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
});

//El Evento DOMContentLoaded es mucho mais eficiente para trabajar com el DOM ya que se carga mais rapido, sobre todo cuando estamos trabajando con peticiones asincronas, pq el DOMContentLoaded es disparado cuando el documento html es cargado y parciado , pero no espera la hoja de style ni tampoco los scripts, el load si lo hace
document.addEventListener('DOMContentLoaded',e=>{

    console.log('***********Evento DOMContentLoaded**********')
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(e)
});
