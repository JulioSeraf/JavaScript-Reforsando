//Las functiones anonimas auto ejecutadas, son functiones donde englobamos todos el codigo que queremos ejecutar en una unica function que se ejecuta al ser criada

// Criando la function, para eso criamos una function sin nombre y ponemos todo el corpo de la function envolta en parentecis () y al final de la function otro () para los parametros.

(function(){
    console.log('Primera IIFE (FUNCTION AUTO EJECUTABLE');
})();
 
// Con parametros.
(function(d,w,c){
    console.log('Primera IIFE (FUNCTION AUTO EJECUTABLE');
    console.log(d,w);
    c.log('este es un console.log');
})(document,window,console);
 
// Otras formas de criar functines anonimas auto Ejecutables

// La CrockForm (JavaScript The Good Parts)
((function(){
    console.log('version CrockForm')
})());

//Unaria
+function(){
    console.log('version Unaria');
}();

//Facebook
!function(){
    console.log('version facebook');
}();