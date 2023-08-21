// Functiones Asíncronas , son las functiones como su nombre mismo diz, que usamos para trabajar un codigo que tarda un determido tiempo e llegar como un petición a un api. Importante: las funtiones asíncronas (async await) no so vinero a replacar las promesas, una trabaja con la otra.

// Usaremos la function que usamos para demostra en Promese
function cuadradoPromise(value){
    if(value === 0) return Promise.reject("El numero no puede ser zero"); // Usando el metodo estatico de Promese "reject"

    return new Promise((resolve, reject)=>{
        if(typeof value !== 'number') return reject(`El valor "${value}" no es un Numero`) // Usando el parametro reject para mandar el error de la promesa
        setTimeout(()=>{
            resolve({
            value,
            result: value*value
        });
    },0|Math.random()*1000);
});
};

// Para criar una function asincrona usamos la parabra reservada "async" antes de criarla

async function functionAsinconaDeclarada(){
    // Para manejar error pode usar TRY - CATCH
    try{
        //asignamos la llamada de la Promesa a una variavel, assim podemos cambiar por cuantas llamadas queramos
        // El resultado de console.log nos retorna undefined, pq el codigo rodara sincrono
        let func = cuadradoPromise(2);
        console.log(`El resultado de "${func.value}" multiplicado por si mismo es "${func.result}"`);

        // Como la functio es cuadradoPromise es una promesa devemos trabajar con la parabra await = esperar, assim el codigo espera el resultado de la function antes de siguer para executar el resto del los programas, Trasformando el asincrono.
        func = await cuadradoPromise(2);
        console.log(`El resultado de "${func.value}" multiplicado por si mismo es "${func.result}"`)

        func = await cuadradoPromise(7);
        console.log(`El resultado de "${func.value}" multiplicado por si mismo es "${func.result}"`)
    }catch(err){
        // el catch recibe le reject de la promesa, para manipular el error
        console.log("ERROR:" + err);
    };
};

functionAsinconaDeclarada();

// Otra forma de trabajar con fucntiones asíncronas el con arrow function 

// para isso adicionas la palabra async ande del parentecis de parametro de la function:
let functionAsinconaExpresada = async()=>{
    try{
        let func = await cuadradoPromise(9);
        console.log(`El resultado de "${func.value}" multiplicado por si mismo es "${func.result}"`);}catch(err){console.log('ERROR:' + err)
    }};

functionAsinconaExpresada();