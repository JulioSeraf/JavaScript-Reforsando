//Date es prototipo Objeto para mostrar la Hora
console.log(Date());
//JavaScript tiene varios metodos para nos mostrar a data y hora

let fecha = new Date();
console.log(fecha);
// Dia del mes 
console.log(fecha.getDate());
// Dia de la semana (lembrando q comesamos a contar de 0 en programacion ya q es un array);
console.log(fecha.getDay());
// MES(tbn nos muestra com el numero indece de un array)
console.log(fecha.getMonth());
// Año
console.log(fecha.getFullYear());

//horaios
console.log(fecha.getHours());
console.log(fecha.getSeconds());
console.log(fecha.getMinutes());
console.log(fecha.getMilliseconds());

//METODOS de date para mostrar date y hora geral 

console.log(fecha.toString()); // HORA PUNTA
console.log(fecha.toDateString());
console.log(fecha.toLocaleString()); // HORA ORGANIZADO LEGIVEL
console.log(fecha.toLocaleDateString()); // SOLO LADATA
console.log(fecha.toLocaleTimeString()); // SOLO LA HORA
 console.clear();

 // Fecha time stamp 1 enero de 1970
 console.log(Date.now());

 
// una libreria potente para manejo de tiempo seria MOMENT.JS

//Pasando nuestra data de nacimento para el console 
// Primeiro passamos el año, despues el mes , el dia y la hora al final 
let nacimento = new Date(1997,0,14,2,30,33);
console.log(nacimento)














