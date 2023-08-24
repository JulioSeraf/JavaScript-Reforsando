// Tenemos dos maneras de trabajer con los atributos

// com anotacion del punto 
//ex:asesando al atributo lang del html
console.log(document.documentElement.lang)

//la otra forma es usando el metodo getAtribute

console.log(document.documentElement.getAttribute("lang"))

// aun que los dos formas no stra los atriburtos, hay un diferencia al usar el punto y el getAttribute, el getAtribute no tras solamente el valor que contiene el su atributo ex com href

console.log(document.querySelector(".link-dom").href);// nos devolve total la url del href y su valor que es DOM-index.hmtl
console.log(document.querySelector(".link-dom").getAttribute('href')); // solo nos devolver el valor del href = DOM-index.hmtl


// ahora para atribuir un nuevo valor a un atributo, seria usando "=", como nas variaveis 

//anotacion del punto 
document.documentElement.lang = 'es';
console.log(document.documentElement.lang);

//la otra forma es con el metodo setAttribute que recibe como primero parametro el atributo a cambia y como segundo el nuevo valor, como esse metodo tbm podemos asignar un nuevo atribuo al elemento

document.documentElement.setAttribute("lang","br");
console.log(document.documentElement.lang);

//Una buena pretica de escritura de variaveis que guandan un elemento dom seria usar el "$" no comieso de su nombre
const $linkDom = document.querySelector(".link-dom");$linkDom.setAttribute("target","_blank")

// tbm tenemos el metodo para averiguar se existe el atributo el lo elemento hasAttribute()

console.log($linkDom.hasAttribute("href"))

// y el metodo para eliminar un atributo  removeAttribute()

$linkDom.removeAttribute("target")


//------------------Data-Attribute------------------------------
// por getAtribute
console.log($linkDom.getAttribute("data-description"));
// atribuir nuevo valor 
$linkDom.setAttribute("data-description","nuevo valor")
//YA por la anotacion del punto, los data-atributos son guardados en un mapa y lo assesamos por la propriedad dateset
console.log($linkDom.dataset.description)
//atribuir con anotacion del punto 
$linkDom.dataset.description = 'document object model';
console.log($linkDom.dataset.description)
