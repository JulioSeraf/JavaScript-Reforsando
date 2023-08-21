//Callback = llamada de vuelta : es una function que se executara despues que otra lo haga.Es es primero mecanismo que tiene JavaScript para poder trabajar con  asincronia.

function cuadradoCallback(value,Callback){
    setTimeout(()=>{
        Callback(value, value*value)
    },0|Math.random()*1000)
}
cuadradoCallback(5,(value,result)=>{
    console.log("Inicia Callback");
    console.log(`El valor ${value} multiplicado por ${value} es ${result}`);
    cuadradoCallback(10,(value,result)=>{
        console.log(`El valor ${value} multiplicado por ${value} es ${result}`);
        cuadradoCallback(23,(value,result)=>{
            console.log(`El valor ${value} multiplicado por ${value} es ${result}`);
            cuadradoCallback(20,(value,result)=>{
                console.log(`El valor ${value} multiplicado por ${value} es ${result}`);
            });
        });
    }); // Este seria el famoso callbackhell
});

// aqui podemos ver el LastIn firstOut = el ultimo en entrar el primero a salir. La function de sumar sale primero q la de cuadrador, por haver sido declarada por ultimo.

function sumador(valor, callback){
    setTimeout(()=>{
        callback(valor, valor + valor);
    }, Math.random()*1000)
};

sumador(3,(valor, result)=>{
     console.log("El resultado de " + valor + " si  mesmo e " + result);
});