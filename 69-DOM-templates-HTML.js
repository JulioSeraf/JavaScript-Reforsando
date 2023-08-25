// Templates es un nueva tag hmtl, en la cual tu estructura tu contenindo html que mediante JS se converte en dinamico, es forma tbm de poder interactuar con el DOM

const $card = document.querySelector(".card"),
// armazenamos eel tempate en un avariable pero con la propiedad .content para hacerde a su contenido
$templete = document.getElementById("templete").content,
//creamos un fragemento para add dinamicamente el contenico para despues add de una sola vez al DOM
$fragment = document.createDocumentFragment(),
//criamos los valores a add dinamicamente/ simulando una peticion de datos.
cardContent = [
    {
        title:'tech',
        img:"https://picsum.photos/id/2/200/300"
    },
    {
        title:'Nature',
        img:"https://picsum.photos/id/15/200/300"

    },
    {
        title:'Study',
        img:"https://picsum.photos/id/20/200/300"
    },
    {
        ttitle:'bots',
        img:"https://picsum.photos/id/21/200/300"
    }
];

cardContent.forEach(el =>{
    $templete.querySelector("img").setAttribute("src",el.img)
    $templete.querySelector("img").setAttribute("alt",el.title)
    $templete.querySelector("figcaption").textContent = el.title
    //los datos anteriores seran add al template existente, pero como solo tenemos un nodo de template tenemos que criar mais para add los restante de los datos para eso hacemos un clone del noto template

    //para cria los clones usamos el metodo importeNode, que recibe como primer parametro el nodo a clonar e segundo un boolenan, se asignamos false solo se copia la tag de abertura y de cierre del nodo, pero se asignamos true copia todo su conntenido y tag en geral
    let $clone = document.importNode($templete,true);
    //Despues de criado lo add al documente Fragmente
    $fragment.appendChild($clone)
})
 // al final hacemos la incercion en  el DOM de una solo vez com el Document Fragment
$card.appendChild($fragment)