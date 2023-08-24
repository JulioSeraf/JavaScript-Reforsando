//Criando tag html dinamicamente
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Church"),
$card = document.querySelector(".card"),
$figure2 = document.createElement("figure");

// agregando al dom y agregando style y text
$img.setAttribute("src","https://picsum.photos/id/49/200/300");
$img.setAttribute("alt","Church")
$figure.appendChild($img);
$figure.appendChild($figcaption).appendChild($figcaptionText);
$card.appendChild($figure);
$figure.classList.add("cards")

// tbm podemos hacer com innetHTML para criar elementod dinamicamente, lo malo de eso es que apos crialos JS no lo considera un nodo.

$figure2.innerHTML = `<img src="https://picsum.photos/id/22/200/300" alt="people">
<figcaption>People</figcaption>`;
$figure2.classList.add("cards")

$card.appendChild($figure2);

// para addicionar varios elementos dinamicamente

const estaciones = ['verano','inverno','outono','primavera'],
$ul = document.createElement("ul");
document.write(`<h3>Estaciones del Año`);
document.body.appendChild($ul);

estaciones.forEach(el => {
   const $li =  document.createElement("li");
   $li.textContent = el;
    $ul.appendChild($li)
});

const continentes = ['Africa','europa','asia','america','oceania'],
$ul2 = document.createElement("ul");
document.write(`<h3>Continentes del Mundo</h3>`);
document.body.appendChild($ul2);
$ul2.innerHTML = '';
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

// al addicionar elementos como hicemos com innerHtml o creteElement eso dependendo do total de elementos criados pode calsar una demora el la app del usuario, pos a cada add estamos atualizando el dom

// para solucionar isso tenemos los fragmento, que criamos aparte en memoria para ir adicionando todos esos elementos, depues que todos los elementos estan adicionado el ese elemento, hay si hacemos la incersion en el DOM el una solo add, usamos el metodo createDocumentFragment()

const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "Agosto",
    "septiembro",
    "octubro",
    "noviembro",
    "deciembro"
],
$ul3 = document.createElement("ul"),
$fragmento = document.createDocumentFragment();

meses.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmento.appendChild($li)
});

document.write("<h3> Meses del Años</h3>");
document.body.appendChild($fragmento)

