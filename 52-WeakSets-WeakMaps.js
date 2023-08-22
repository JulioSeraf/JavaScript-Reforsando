// WeakSet y WeakMap son como hermanos pequeños de los objetos  Set y Map, pero solo almazenan referencia debiles es decir, las llaven solo puede ser de tipo Objetos, como so referencia debiles al pasar el recoletor de vazura de vaneganor los elimina dando un mejor rendimeto a la nustra aplicacion

// estos objetos no cuetan con los metodos clear(),size()

// esso metodos no se les puede asignar valores directamente

// const weakSet = new WeakSet([3,3,4,7,87,0, 'JULIO', null]);
// console.log(weakSet); // return error

//Para asignarles valore tenemos que criar manualmente con el metodo add()
const ejemploSet = new WeakSet();
// pero Ojo como solo acepta referncia debiles ( obejtos) los asignasmo como objetos 
let valor1 = {'valor': 1}
let valor2 = {'valor': 2}
let valor3 = {'valor': 3}
// weakSet.add(2) // => return error
ejemploSet.add(valor1);
ejemploSet.add(valor2);
ejemploSet.add(valor3);
console.log(ejemploSet)

// usamos el metodo has() para ver si tiene alguna referncia

console.log(ejemploSet.has(valor1)) // => true


// Los WeakMap son map debiles