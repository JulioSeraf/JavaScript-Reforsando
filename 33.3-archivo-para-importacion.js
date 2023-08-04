// metodo de exportacion de un codigo em expecifico
export const pi = Math.PI,
person = {
    nombre: 'julio',
    edad: 26,
    genero: 'Masculino'
 };
 // tbm podemos agrupar en un objeto para hacer la exportaciión

 const sumar = function(a,b){
    return a+b;
 };
 const restar = (a,b)=>{
    return a-b;
 };
 export const operaciones = {
    sumar,
    restar
 };
// Exportar de manera default hace que el codigo se exporte automaticamente sin necessidade de hacer el import(el JavaScript se hace cargo de importar ), pero no podemos tener dos codigos exportado por default, SOLO SERA IMPORTADA AL USARLA

// export default function saludar(){
//     console.log('Hello word!!!')
//  };

 // el export default no exporta directamente cosnt/let o functiones expresadas en variaveis para hacermos la exportacion de dichos codigos primero tenemos q declarar despues hacemos la exportacion

 // declarmos
 const ladrar = function(){
    console.log('guaaa!!!,guauauu!!!');
 };

 // asignamos a la exportacion 
 export default ladrar;