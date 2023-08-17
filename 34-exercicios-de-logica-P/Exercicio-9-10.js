
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
        const generosAceptados =["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime"," Documentary" ,"Drama", "Family", "Fantasy", "Film Noir"," Game-Show", "History", "Horror", "Musical", "Music", "Mystery","News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"].join(',').toLocaleLowerCase().split(',')
        if(this.id.length !== 9 || /(A-Za-z){2}\d{7}/gi.test(this.id)) return console.error('ID IMDB de incorreto');
        if(this.titulo.length > 100) return console.warn('El titulo no puede passar de 100 caracteres');
        if(this.director.length > 50) return console.warn('EL nombre del director no pueder contener mais de 50 caracteres');
        if(typeof this.ano !== 'number') return console.warn(`EL valor "${this.ano}" no un año`);
        if(this.ano < 1896 || this.ano.toString().length !== 4) return console.warn(`El año "${this.ano}" no es valido`);
        if(!(this.pais instanceof Array)) console.warn(`EL formado ${this.pais} no es un array`);
        if(!(this.genero instanceof Array)) console.warn(`EL formado ${this.pais} no es un array`);
        console.log(this.genero)
        console.log(generosAceptados)
        this.genero.forEach(item => {
            let gerneroAce = [];
            if(typeof item !== 'string') return console.warn(`El genero "${item}" es incorreto , tiene que ser un cadena de texto`);
            if(!(generosAceptados.includes(item.toLowerCase()))){
                return console.warn('no');
            }else{
                 return console.info('aceptado');
            };       
        });
    };
    static aceptados(){
        this.genero.forEach(item => {
            if(typeof item !== 'string') return console.warn(`El genero "${item}" es incorreto , tiene que ser un cadena de texto`);
            if(!(generosAceptados.includes(item.toLowerCase()))){
                return console.warn('no');
            }else{
                 return console.info(item);
            };       
        });
    }
};

const jurassicPark = new Pelicula('ju1234567','Jurassic Park','',2000,['action'],['comedy','action'],23)
console.log()
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

