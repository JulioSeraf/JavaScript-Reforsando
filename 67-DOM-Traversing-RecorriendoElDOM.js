// Es un series de metodos que nos da el APIsm del DOM para recorrer los elemento.Hay metodos para recorrer los nodos tbm, pero aqui trabajaremos com los de elementos
const $card = document.querySelector(".card");
console.log($card);
console.log($card.children) // todos elementos filhos del elemento card
console.log($card.firstElementChild) // primero filho del elemento card
console.log($card.lastElementChild) // ultimo filho del elemento card
console.log($card.parentElement) // elemento padre de card
console.log($card.previousElementSibling) // elemento antes del elemento card
console.log($card.nextElementSibling) // elemento despues de card
console.log($card.children[2].closest('section')) // nos devolve el elemento mas cercano al elemento que esta el el chidren[2] selecionado 