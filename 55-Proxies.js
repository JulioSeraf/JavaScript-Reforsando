//El Proxie es una nueva caracterist de JS que nos permite criar un nuevo objeto primitivo baseado/apartir de otro Objeto 

// Criamos un objeto base, y com un objeto proxies criamos nuevas estacia para esse objeto

const persona =  {
    nombre: '',
    apellido: '',
    edad: 0
};

// criando el handler/manejador, en el manejador hacemos todos las validaciones que queramos , para isso usamos el metodo set ()
const manejador = {
    // este metodo recibe 3 parametros el objeto, su propiedad y su valor
    set(obj,prop,val){
        //criamos la validación para no dejar add mais propriedades
        if(Object.keys(obj).indexOf(prop) === -1){
            console.error(`La proprieda ${prop} no se a encontrado en el objeto persona`);
        }
        obj[prop] = val;
    }
}
// criamos la nueva estancia del obj base , que recibe como parametro el obj pase neste caso "persona" y un majenador
const jon = new Proxy(persona, manejador);
// asignamos el valor al objeto accesando su propiedad  pera para q se acepte el valor los validamos e confirmos en en manejador
jon.nombre = 'julio';
jon.apellido = `serafim`;
jon.edad = 26;

// podemos criar nuevas propriendades para el objeto normalmente , pero por si acaso queremos mantenr las propriedas ja criadas nel propio obj, manejamos es validacón en el manejador
jon.genero = 'masculino';
console.log(jon)
console.log(persona)