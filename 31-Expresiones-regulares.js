
// Las Expresiones regulares es una sequencia de caracteres que forma un patron de busqueda y que precipalmente is utilizado na busqueda de padrones en cadenas de texto.

// Hay dos maneras de expresar o criar una expresion regular, esos dos metodos reciben primero la expresion a a buscar y depues la bandera(las bandera nos ajunda a ajustar la busqueda como queramos hay varias, para estudiar-las ir a la pagina de modizilla ;) :

//Por el METODO new RegExp();
 let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere nam, nihil, deserunt corrupti dolorem beatae nisi perferendis illo minus dicta sit cumque eos maiores, veniam tenetur commodi vero ad."

 let firtReg = new RegExp('lorem','ig'); // (expresion, bamdera)

 // La segunda forma es usar / /;

 let segundReg = /elit/ig; // /expresión/banderas;

 //Para validar la expresion hay varios metodos , aqui vamos mirar dos el primero es el metodo test();

 // test();  Primero la variavel de la expresion regular seguida del metodo test con la cadena que queremos validar
 console.log(firtReg.test(cadena));

 //Metodo exec() = nos devulve un arreglo, con la validacion si es true/false, la posicion index de la cadena, la origin de busqueca de la cadena.
 console.log(segundReg.exec(cadena));