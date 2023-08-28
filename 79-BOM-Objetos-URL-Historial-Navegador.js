// //Objeto URL/Locatión 
// console.log('****************Location**************');
// console.log(location);
// // nuestra la origen del url
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);

// console.log('*****************historial*******************');
// //guarda el historial de la ventana en que me encuentro
// console.log(history);
// //guarda cuantas pagina hemos visitados
// console.log(history.length);
// //el metodo back() nos permite regresar el total de paginas que le indicamos como valor de parametro
// console.log(history.back(3));
// //Contrario de back(), avanza para frente 
// console.log(history.forward(3));
// //Este metodo es una mixto de back() y forward(), le infomamos paginas adelante con numeros positivos y para tras con numeros negativos
// console.log(history.go());

console.log('*****************Navigator*******************');
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
//mediaDevices nos muestra los dispositivos como camera y microfonos
console.log(navigator.mediaDevices);
//onLine nos muestra si el navegador tiene coneción on no con valor booleano
console.log(navigator.onLine);
//serviceWorker es un Api que nos ayuda a convertir un simple site web en una applicación instalable
console.log(navigator.serviceWorker);
//storege Api de almazenamiento
console.log(navigator.storage);
console.log(navigator.usb);
//nos mustra informacions de los dispositivo que esta esta conectanco a la app
console.log(navigator.userAgent);