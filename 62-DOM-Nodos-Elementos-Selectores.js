//Un nodo de texro es un texto que esta dentro de una tag como (h1,p,a,div, etc...)
//un Nodo elemente es la tag en si como div, h1, p etc....
 //METODOS QUE LLA NO ES UTILIZA
 console.log(document.getElementsByTagName) // nombre de la tag
 console.log(document.getElementsByClassName) // Nombre de la class
 console.log(document.getElementsByName) // atributo name

// Los 3 metodos anteriores han sido replacados por los seguintes dos metodos
console.log(document.querySelector(`#menu`)) // recibe como parametro qualquer Selector valido como  id ou clase colocando su respequitivos selectores antes de su nombre => .class #id
console.log(document.querySelectorAll('li')) // seleciona mais de un elemento 
// tbm podemo manda que querySelector busque un tag 
console.log(document.querySelector('a'))

// aun que podemos selectionar el id com querySelector es recomendado usar el ById, ya que su metodo es mais rapido devido aque el querySelector tiene que hacer antes una validacion se le estamos passando un id o un class

 console.log(document.getElementById) // por id