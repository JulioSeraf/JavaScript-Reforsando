// Objeto Math es el Objeto que usamos para hacer operaciones matematica y por ser un objeto static cada vez q usarmos esse Objeto tenemos q invocar el prototipo Math
console.log(Math);

//METOSO abs() = nps devolver el valor absoluto de un numero 
console.log(Math.abs(-7.9));

// METODO ceil() = redondea al numero entero posterior 
console.log(Math.ceil(7.1));  // 8

// METODO floor() = redondea al numero inteiro menor
console.log(Math.floor(7.6)); // 7

// METODO round()= Redondea al numero dependendo del decimal
console.log(Math.round(7.4)); // 7
console.log(Math.round(7.5)); // 8

// METODO sqrt() = raiz quadrada de un numero 
console.log(Math.sqrt(7));

//METODO pow() = Potecia , primero numero la base el segundo el exponente 

console.log(Math.pow(2,5)); // 2 a la quinta potencia

// METODO sign() = Nos indica se un numero es negativo mostra -1 /zero mostra  0/positivo  mostra 1 
console.log(Math.sign(-8));

// METODO random() = Nos devolve un numero aleatorio entre o y 1 
console.log(Math.random()); // aleatorio fracionado