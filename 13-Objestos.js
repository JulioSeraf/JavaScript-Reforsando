//Para criar un objerto usamos {}, al diferencia de los array los objetos tiene que ser definido su indice que neste caso seria un atributo o propiedad O LLAVES, y a cada atributo su valor, tbm se pueder criar functiones dentro de un objeto, q verian a ser metodos.
const b = {
    nombre: 'julio',
    apellido: 'serafim',
    edad: 26,
    saludar: function(){
        console.log('Hello!!')
    },
    contacto: {
        email: 'serafimone97@gmail.com',
        telefono: '9990909090'
    }, 
    array: [1,2,3,4,],
    // para usar una propriedad de un objeto dentro de un metodo usamos a la palavra reservada THIS
    presentar: function(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} anos, puedes contactarme con mi email ${this.contacto.email} y mi telefono ${this.contacto.telefono}`)
    }
};
// para assesar al valor podemos usar [""] con el atributo del valor asignado 

console.log(b["nombre"]);

// pero la forma mas usada es assesar los valore es con un punto . 

console.log(b.apellido);

// asseaando un objeto dentro de un objeto 

console.log(b.contacto.email)

// para assesar um metodo dentro de un objeto usamos el punto
b.saludar();
b.presentar()
 
// metodos de Objetos

// metodo Object.Keys() nos muestra todos las llaves/atributos de un Object
console.log(Object.keys(b));

// metodo Object.values() nos muestra todos los valores dentro de un Object
console.log(Object.values(b));

// metodo .hasOwnProperty() nos informa se la propriedad asignada existe dentro del Object, nos devolver un valor boleano true/false

console.log(b.hasOwnProperty("nombre"));