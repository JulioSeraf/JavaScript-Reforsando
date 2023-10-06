//JSON = JavaScriot Object Notation
//Es una herramienta muy importante en JS, Es un formato ligero de intercambio de datos. ( entre linguajes)

//JSON es el estander entre el intercambio de datos de linguajes , no es exclusivo de javaScript

// para criar un archivo JSON  devemos criarlo con la anotacion json ex: "ejemplo.json" y dentro de este archivo passamos los datos quereremos en via, importante los datos de este archivo deven estar todos entre ""

// Por ejemplo en seguinte objeto
const datosPersonal = {
    nombre : 'julio',
    apellido:'serafim',
    telefono : '344-233-555',
    edad: 26,
    objeto: {
        instragam: "@julio-sr23",
        emal: 'serafimone97@gmail.com'
    },
    nulo: null
};
// objeto datosPersonal para JSON
/*
{
    "nombre" : "Julio",
    "apellido":"Serafim",
    "telefono" : "344-233-555",
    "edad": "26",
    "objeto": {
        "instragam": "@julio-sr23",
        "emal": "serafimone97@gmail.com"
    },
    "nulo": null
}
*/
// console.log(JSON)
//JavaScript contiene dos metodos para converter JSON: parse() stringify()

//parse() transforma la cadena de texto json en un valor que sea valido en JavaScript
const objText = "[2,3,4]"
console.log(objText)
console.log(JSON.parse(objText)) // trasforma el array string
console.log(JSON.parse("23"))
console.log(JSON.parse("null"))
console.log(JSON.parse('{"nombre" : "Julio", "apellido":"Serafim","telefono" : "344-233-555","edad": "26","objeto": {"instragam": "@julio-sr23","emal": "serafimone97@gmail.com"},"nulo": null}'))



//stringify hace lo contrario, coje un objeto o un valor valido javaScript y lo converte en cadena de texto valido para transferencia JSON
const objText1 = [2,3,4];

console.log(JSON.stringify(objText)) // converte el array en una cadena de texto
console.log(JSON.stringify(datosPersonal));