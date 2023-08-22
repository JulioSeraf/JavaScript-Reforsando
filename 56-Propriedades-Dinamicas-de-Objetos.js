// Es una nueva caracteristica de JS para criar nombre de propiedades de objeto dinamicamente

const objUsuario ={};

const usuario = ['julio', 'gabriel', 'carla','maria'];

// adicionando la propriedad dinamicamente, lo que nos permite addicionar dinamicamente seria os [] de asignacion de los objetos
usuario.forEach((value, index)=>{ objUsuario[`id_${index}`] = value})

console.log(objUsuario)