
// 27) Programa una clase llamada Pelicula.

class Pelicula{
    constructor(id,titulo,director,ano, pais,genero,calificacion){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.ano = ano;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;
        const generosAceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime"," Documentary" ,"Drama", "Family", "Fantasy", "Film Noir"," Game-Show", "History", "Horror", "Musical", "Music", "Mystery","News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"].join(',').toLocaleLowerCase().split(',');
        // this.generosAceptados = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime"," Documentary" ,"Drama", "Family", "Fantasy", "Film Noir"," Game-Show", "History", "Horror", "Musical", "Music", "Mystery","News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"].join(',').toLocaleLowerCase().split(',')
        if(this.id.length !== 9 || /(A-Za-z){2}\d{7}/gi.test(this.id)) return console.error('ID IMDB de incorreto');
        if(this.titulo.length > 100) return console.warn('El titulo no puede passar de 100 caracteres');
        if(this.director.length > 50) return console.warn('EL nombre del director no pueder contener mais de 50 caracteres');
        if(typeof this.ano !== 'number') return console.warn(`EL valor "${this.ano}" no un año`);
        if(this.ano < 1896 || this.ano.toString().length !== 4) return console.warn(`El año "${this.ano}" no es valido`);
        if(!(this.pais instanceof Array)) console.warn(`EL formado ${this.pais} no es un array`);
        if(!(this.genero instanceof Array)) console.warn(`EL formado ${this.pais} no es un array`);
        // console.log(this.generosAceptados.includes('action'))
        this.genero.forEach(gen => { 
            if(typeof gen !== 'string') return console.warn(`El genero "${gen}" es incorreto , tiene que ser un cadena de texto`);
            if(!(generosAceptados.includes(gen.toLowerCase()))){
                return console.warn('no');
            }else{
                 return console.info('aceptado');
            }; 
            
        });
        if(typeof this.calificacion !== 'number' || this.calificacion > 10 || this.calificacion < 0 ) return console.warn(`La calificación: "${this.calificacion}" es Incorreta`);
    };
    fichaTecnica(){
       return console.info(`IMBD :${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAno de estreno: ${this.ano}\nPais de Origen: ${this.pais}\nGeneros: ${this.genero}\nCalificación : ${this.calificacion}`)
    };
    static aceptados(ge){
        
    }
};
const peliculas = [
    ['ju1234567','Jurassic World: Dominion (Original)','Colin Trevorrow',2022,['Estados Unidos da América'],['Ação','Aventura', 'Ficção Científica'],7.7],
    ['ju2092934','Jurassic Park','Steven Spielberg',1993,['Estados Unidos'],['aventura',
    'ficção científica'],10],
    ['in3039221','Interstellar','Christopher Nolan',2014,['Estados Unidos da América','Reino Unido da Grã-Bretanha','Irlanda do Norte'],['Aventura',' Drama', 'Ficção Científica'],10]
]
peliculas.forEach(item => {
    item.forEach((item,index) =>{
        new Pelicula()
    })
})
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//    - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

