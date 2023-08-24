//para haceder a class en en style css usamos el metodo classList y className
const $card = document.querySelector(".cards");
 console.log($card)
 console.log($card.classList)
 console.log($card.className)

 // el metodo contains de classList no informa se el elemento tiene dicha class

console.log($card.classList.contains('rotate-45')) // => false 
// para adicionar una class usamos el metodo de classList add()
$card.classList.add("rotate-45");
// para eliminar usamos el metodo remove()
$card.classList.remove("rotate-45")
// tbm tenemos el metodo que funciona como add y remove a mismo tiempo , se el elemento tiene la clase la remove si no la tiene la adiciona toggle()
$card.classList.toggle('rotate-45') // NO TIENE => ADICIONA 
// $card.classList.toggle('rotate-45')//TIENE => REMOVE

// Tbn tenemos el metodo de replacar una clase por otra replace() que recibe como primer parametro la clase a remplasar e segundo la nueva clase

$card.classList.replace('rotate-45','rotate-135')

// para dicionar o remover o add o togglear mais de una classe solo es necessario pasar mais parametro al metodo separados por coma ,
