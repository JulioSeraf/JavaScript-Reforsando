// para haceder al estilo del elemeto usamos la anotaion del punto .style, apartir de eso podemos haceder a todas las propriedades de estilos del css, pero neste caso al diferente de css que las propriedades estan escritas con - ex: background-color 
//En en javaScript usariamos el metodo cameCase en las propriedades a invocarlas ex: backgroundColor 
const $linkDom = document.querySelector(".link-dom");
$linkDom.style.backgroundColor = "red";
$linkDom.style.color = "white";
 // otra forma de acessar  a estilo es com getComputedStyle() que recibe el elemento a selecionar el styel seguido de getProperyValue() que recibe la propriedade css
  getComputedStyle($linkDom).getPropertyValue('text')
// para atribuir valores usamos el punto o el setProperty("atributo","valor") 

$linkDom.style.setProperty('text-decoration','none');
$linkDom.style.display = 'block'


//Variables CSS = Custom Properties CSS
const $html = document.documentElement;
const $body = document.body;
const varRedStyle = getComputedStyle($html).getPropertyValue("--style-red"),
varfoot = getComputedStyle($linkDom).getPropertyValue("--style-foot")
