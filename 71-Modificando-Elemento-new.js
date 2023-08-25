// Ahora vermeos los nuevo metodos para inserta elemento/nodos al DOM

/*
insertAdjacent...
    insertAdjacentElement(position,elemento)
    insertAdjacentHTML(position,html) // como innerHTML
    insertAdjacentText(position,text)

Position:
    beforebegin(hermano, anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguente)
*/

const $card = document.querySelector(".card"),
$newCard = document.createElement("figure"),
$newCard2 = document.createElement("figure");
$card.style.cssText = 'border:2px solid gray;'
$newCard.innerHTML =`<img src="https://picsum.photos/id/49/200/300" alt="city">
<figcaption>City</figcaption>`;
$newCard.classList.add('cards');
$newCard2.classList.add('cards');

//para inserta le usamos el metodo en el nodo de refecencia que neste caso el $card , y asignamos la posicion y el valor a signar
$card.insertAdjacentElement('beforeend',$newCard)
$card.insertAdjacentElement('beforeend',$newCard2)

let $contentCard =` <img src="https://picsum.photos/id/22/200/300" alt="people">
<figcaption></figcaption>`;
$newCard2.insertAdjacentHTML('afterbegin',$contentCard);
$newCard2.querySelector('figcaption').insertAdjacentText('afterbegin','people')


// Tbm tenemos los metodos  de la libreria jquery, apesar de ja no tiene mucho suporte

$card.prepend($newCard2); // add al pricipio del nodo referncia
$card.append($newCard) // add al final del noto referencia
$card.before($newCard) // add antes del nodo refencia
$card.after($newCard2) // add despues del nodo refencia