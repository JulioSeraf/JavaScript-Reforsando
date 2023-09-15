//Las Promessas(la podemos ver como un if esle) teine dos recursos principa el resolve y el reject, se la promesas se comple (por ejemplo un petición a una api) entoce se ejecuta el resolve , si no, se sale un error se ejecuta el reject. 


// Como ejemplo vamos usar el exercicio del callback 
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
cuadradoPromise(2)
.then( obj => {console.log(`El valor de ${obj.value} es ${obj.result}`);
 return cuadradoPromise(5);
})
.then(obj =>{ console.log(`El valor de ${obj.value} es ${obj.result}`)
return cuadradoPromise(4);
})
.then( obj => {console.log(`El valor de ${obj.value} es ${obj.result}`);
return cuadradoPromise("Juio");
}).then( obj => {console.log(`El valor de ${obj.value} es ${obj.result}`);
console.log("FIM DE LA PROMESA")
})
.catch(err => console.error(`Error: ${err}`)); // el CATCH recorre el error de qualquer promesa criada. Essa es la mejora de la promesa sobre el callback.