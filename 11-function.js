/*Function es un block de codigo autocontenido (tiene su propio contenido indenpendente del scolp(alcande de un variavel)) que se define solo una vez y que se puede llamar a qualquer momento quantas vezes necessario 

Las functiones en JavaScript son un tipo especial de Objetos

Opicionamente una function pode receber parametros y devolver valores 

deven ser criadas y llamadas*/

// funcion Declarada

function declarada(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
};

function devolverValor(){
    console.log('uno');
    console.log('dos');
    console.log('tres');
    // para devolver valorer en una function usamos la palavra reservada RETURN 
    return 'La function retorno una cadena de texto';
    // Es importante recordar q RERTURN finaliza una function, todo codigo depues de return no se executara
    console.log('no se executa por estar despues de un Return')
};

// la function tienes dos parametros nombre y edad, tbm podemos auto asiginar un valor al parametro  ex: conParametros(nombre = 'julio', edad = 26)

function conParametros(nombre,edad){
    console.log(`Hola mi nombre es ${nombre} tengo ${edad} anos`);
};

 // Invocaion de function 
 declarada();
 declarada();
 console.log('++++++++++++++++++++++++++++++++++++++++++');
 console.log(devolverValor());
 // se asgina los paramentro de la funtion en su llamada
 conParametros('julio', 26);


 // functiones Declaradas vs functiones Expresadas
 
 // llama antes de ser declarada 
 functionDeclarada();

function functionDeclarada(){
    console.log('La function declarada puede ser llamada en cualquer parte de nuestro codigo inclusive antes de si mesma');
}
// llamada despues de ser declarada
 functionDeclarada();

// function anonima asignada a una variavel
 const functionExpressada = function(){
    console.log('una function expressada es una function q se le a asignado como valor a una variavel, este tipo de fuinction solo puede ser llamda despues de ser declarada');
 };