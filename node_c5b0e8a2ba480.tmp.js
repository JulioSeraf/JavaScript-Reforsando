//Asincronia es un processo muito importante en JavaScript ja que , JS es una linguaje single Thread = que solo se exexuta una vez.

//single Thead: Hilo de execución

// Operaciones de CPU y Operaciones de I = INPUT / O = OUTPUT.
    //La operaciones de CPU son aquellas q pasa maior tiempo cosumindo los prosecosso de nostra CPU.,
    //I / O : Son aquelas operaciones que ban passar maior parte del tiempo esperando la petición del recurso que han solicitado. Recurso seria como una peticion de formulario.
//Operaciones Concurrentes y Palalelas.
    // Concurrente: es quando varias tareas estan progresando al mismo tiempo(no se refere a iniciar al mesmo tiempo e si a processarce juntas)
    // Paralelas: es cuando varias tareas estan se executando al mismo tiempo se inicial al mismo tiempo.
//Operaciones Bloquantes y No bloqueantes.
    //Bloqueante: es aquella que no va a devolver el controle a la app/programa haste terminar so tarea. no devolve la execucion al hilo primcipal hasta terminar so tarea.
    //No bloqueante: Se executal e ya devolve el control al hilo principal, no imporatando se a terminado su tarea o no.
//Operacione sincronas y asincronas
    //Sincrona: Esta operacion representa el presente una operacion sincrona espera el resultado y sigue.
    //asincrona: Esta no espera el resultado, su respuesta es futura, por esso q es una operacion q se executa y ja delvolve el controle al hilo princial.


// En JavaScript tenemos dos operaciones Bloqueante.
//Código sincrono Bloqueante.
(()=>{
    console.log('Código sincrono');
    console.log("inicio");

    function dos(){
        console.log("dos");
    };
    function uno(){
        console.log("uno");
        dos();
        console.log("tres");
    };
    uno();
})();
//Código asíncrono No bloqueante
