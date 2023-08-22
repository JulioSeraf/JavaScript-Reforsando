// Es una fuction que nos permite trabajar de una manera mas comoda con los interables

//para criar un functiion generadora depois de la palabra function adicionamos un "*", eso indica a JS que esto es un  generador

// un generador es convertir un codego de un fiction en interable
function* interable (){
    // en una fuction normal para retornar un valor usamos la palabra reservada return en un generador usamos yield
    yield "Hola";
    console.log("hola consola");
    yield "Hola 2";
    console.log('seguimos para el proximo yield');
    yield "hola3"
    console.log("fim")
};

let interador = interable();
// console.log(interador.next())
// console.log(interador.next())
// console.log(interador.next())
// console.log(interador.next())

for(let y of interador){
    console.log(y)
};

// guardando los valores de yield de de iterable in un array

let arr = [...interable()]
console.log(arr)

// usando el generador para mostrar una function de cuadrado

function cuadrado(valor){
    setTimeout(()=>{
        return console.log({
            valor,
            resultado: valor * valor
    })
    },Math.random()*1000)
};
function* generador(){
    console.log('Inicio de Generator')
    yield cuadrado(2);
    yield cuadrado(5);
    yield cuadrado(6);
    yield cuadrado(0);
    console.log('fim de Generator')
};

let interadorCuadrado = generador();

for(let y of interadorCuadrado){
    console.log(y)
}