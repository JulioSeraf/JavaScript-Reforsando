//Metodos de incerción de elemento y modificación de elementos en el DOM

const $card = document.querySelector(".card"),
$newCard = document.createElement("figure");

$newCard.innerHTML =`<img src="https://picsum.photos/id/49/200/300" alt="city">
<figcaption>City</figcaption>`

$card.style.cssText = 'border:3px solid black; margin:10px 0;';
//Para remplacar un elemento usamos ele metodo replaceChild() que recibe como primer parametro el nuevo nodo/elemente y el nodo/element a der renplacado

// =====$card.replaceChild($newCard,$card.children[4])====

//Metodo para incertar elemente antes de otro elemeto especifico , usamo el metodo insertBefore() que recibe los parametros primero el nuevo elemente despues el elemento que sera la referncia de add antes.

// aqui tomamos el primero elemeto como elemento, por consecuecio ele nuevo elemeto passa a ser el primero

// =====$card.insertBefore($newCard,$card.firstChild)=====

//Motodo para eliminar el elemeto/nodo  es removeChild() recibe el elemento a eliminar como parametro

$card.removeChild($card.children[4]);

//Tbm podemos cria un clone de un nodo/elemento dinamicamente, com el metodo cloneNode() que recibe como parametro  un boolenan que si es false solo clona la tag en si, se es true clona la tag con sua elemetos children
const $clone = $card.cloneNode(true);

document.body.appendChild($clone)