const $whatisDom = document.getElementById("que-es");
const text =  `<p>El DOM es un API como los navegadores representa el codigo <strong>HTML y XML</strong> para trabajarlo en JavaScript, es como un arbole geonologica que dive en nodos los documento del navegador, manejar el historial etc... </p>`
// para addicionar texto a un elemento podemos usa el textContent o innerHTML 

//textContet solo altera el texto sin adicionar las tag  html

$whatisDom.textContent = text;

// para trabajar con las tag usamo el innerHTML
$whatisDom.innerHTML = text;
// el outerHTML elimina la tag que tiene el elemento y addiciona las que estan junto al texto
$whatisDom.outerHTML = text 