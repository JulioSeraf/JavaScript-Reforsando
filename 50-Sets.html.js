// Set es una estrutura similar a un array pero de datos unicos, o sea es un array que no acepta datos duplicados
let set = new Set([1,2,3,3,4,4,true,true,{},{}, "hola", 'HoLA']);
 console.log(set);
 // Para addicionar un valor al set usamos el metodo add()

 let set2 = new Set();
 set2.add(3);
 set2.add('julio');
 set2.add(2);
 set2.add('julio');
 console.log(set2);
 // para saber el total de Elementos en un set usamos size(como length)
 console.log(set2.size);
 
 // para recorrer el set podemos usar el ciclo for of, forEach()

 for(item of set2 ){
    console.log(item)
 };
 // para poder acesseder a la posicón de set(index) comos no es un array no podemos usar for in, para isso usamos el medoto de Arry from() que es un metodo q trasnfomar un objeto interable en un array, assim lo podemos recorrer
 let serAR = Array.from(set2)
 console.log(serAR[1]) // ahora se comporta como un array

 // los set tiene un metodo para eliminar valores que es el metodo delete

 set2.delete(2);

console.log(set2);

// tenemos el metodo para comprovar valore has()

console.log(set2.has('julio')) // dependendo se encontra el valor devolve un valor booleano.

// tenemos el metodo para eliminar los valores de un Set el metodo clear()

set2.clear();
