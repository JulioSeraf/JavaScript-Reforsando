//El objeto Maps es objeto interador muy parecido a un objeto primitivo,

    const mapa = new Map();
    // Para adicionar valores usamos el metodo set
    mapa.set("nombre","julio")
    mapa.set("apellido","Serafim")
    mapa.set("idad",23)
    console.log(mapa)
    // para ver el total de valores estabelecidos en un map usamos la propiedad size
    console.log(mapa.size)

    //usamos el metodo has() para averiguar se hay la llave proporcionada
     console.log(mapa.has("nombre")) // => true
     console.log(mapa.has("genero")) // => false
     //Para obtener un valor de maps usamos el metodo get() con el index del valor a obtener
    console.log(mapa.get("nombre")) // => Julio

    // Para reaciginar una valor usamos el metodo set() con el index del valor a subistituir

    mapa.set("nombre",'juninho');
    // para deletar un valor usamos el metodo delete()
    mapa.delete('apellido');

    // para recorrer un maps usamos el ciclo de repeticio for of

    for( let [key,value] of mapa){
        console.log(`LLAVE: ${key}\nValor: ${value}`)
    };

    // Una de las caracteristica de maps como objeto es que al diferente de un obeto primitivo que el nombre de una llave solo pueder ser asgnados con cadena de texto en maps se puede usar number, booleano, null etc.., como nombre de llave (lo que nos es muy consejavel)

    const mapa2 = new Map();
    mapa2.set(null,'julio');
    mapa2.set(2,'juju');
    mapa2.set(undefined, 2);
    console.log(mapa2);
    
    // Otra forma de asginar valores a maps es criaso directamente pero para cada llave tenemos que ponerlos en un[] como un array dentro de otro array

    const mapa3 = new Map([
        ['nombre', 'gabi'],
        ['genero', 'famele']
    ])
