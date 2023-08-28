//El BOM tiene los siguentes metodos que podemos utilizar

//muestra un alerta en el navegador
    // window.alert() 
//muestra un mensagem de confirmacion que podemos amarzenar la respuesta el boolenao
    // const respuesta = window.confirm('Disfrutas de JavaScript')
    // console.log(respuesta);
// promp() nos agrega como un input donde el usuario puede escrivir algo , tbm podemos almazenar la respuesta
    // let nombre = window.prompt('Infoma tu nombre:');
    // console.log(nombre)

    const $abrir = document.getElementById('abrir-ventana'),
        $cerrar = document.getElementById('cerrar-ventana'),
        $imprimir = document.getElementById('imprimir-ventana');

    $abrir.addEventListener('click',(e)=>{
        // el metodo open() abre una nueva ventana no navegador con la url que le passamos como parametro
        open('http://127.0.0.1:5500/62-DOM-index.html')
    });
    $cerrar.addEventListener('click',(e)=>{
        //El metodo close() cierra la ventana el que se le llama el metodo
        window.close();
    });
    $imprimir.addEventListener('click',(e)=>{
        // este metodo cria un fomato para imprimir nuestra ventana del navegador, esto podemos combinar com el style media print para mudar el estilo de la impreción.
        print();
    });