// try - catch maneja los errores----------------------
try{
    console.log('En try se agrega el codigo a se evaluar');
    noExiste;
    console.log('segunda teste');
}catch(error){
    console.log('En catch se captura cualquer error producido o lanzado en Try');
}finally{
    console.log(' El finally se executa sempre al final de un try-catch');
}

// podemos criar errorer personalizado con try catch usando a palvra reservada Throw-----------------

try{
    let numero = 10;
    // teste de fialidacion de se es un numero o no-------------
    if(isNaN(numero)){
        // creando error personalizado usando throw-------
        throw new Error('el caracter nos es un numero')
    }
}catch(error){
    console.log(`se produjo el seguinte error: ${error}`)

}