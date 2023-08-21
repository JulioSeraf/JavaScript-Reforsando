//Callback = llamada de vuelta : es una function que se executara despues que otra lo haga.Es es primero mecanismo que tiene JavaScript para poder trabajar con  asincronia.

function cuadradoCallback(value,Callback){
    setTimeout(()=>{
        Callback(value, value*value)
    },0|Math.random()*100)
}
cuadradoCallback(0,(value,result)=>{
    console.log("Inicia Callback")
})