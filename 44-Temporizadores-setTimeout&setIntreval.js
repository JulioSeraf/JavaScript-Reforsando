// Son Functiones/Metodos que nos permitem Trabajar con tempo en JavaScript
// Tenemos dos metodos de tiempo en JavaScript : setTimeout y setInterval. 

// El setTimeout y el setInterval recibe como parametros un callback y un tiempo expresado en milessegundo, que seria el tiempo para executar tal callback

// El setTimeout solo se executa una vez
let timeOut = setTimeout(()=>{
    console.info('ess solo se executa una vez')
},1000)

//Para executar un varias indefinidamente vezes usamos setInterval
let time = setInterval(()=>{
    console.info('Este codigo de executa idefinidamente cada certo intervalo de tiempo');
},1000);
clearInterval(time);

// Para finalizar los fuctiones de tiempo time y interval, tenemos otras funciones para eso, pero para que dichas funciones se executen tenemos que asignar el time o interval a una variavel 

// criamos las function setInterval asignandoa a una variavel 
let timeIn = setInterval(()=>{
    console.log(new Date().toLocaleTimeString())
},1000)

// Despues usamos essa variavel como parametro para la function de detencion, para el caso de setInterval tenemos clearInterval()

clearInterval(timeIn) // con la variavel de la function a detener 

// para el setTimeout usamos  clearTimeout()

clearTimeout(timeOut) //con la variavel de la function a detener