
// 27) Programa una clase llamada Pelicula.

class Pelicula{
    constructor({id,titulo,director,ano, pais,genero,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.ano = ano;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        // if(this.titulo.length > 100) return console.warn('El titulo no puede passar de 100 caracteres');
        // if(this.director.length > 50) return console.warn('EL nombre del director no pueder contener mais de 50 caracteres');
        // if(typeof this.ano !== 'number') return console.warn(`EL valor "${this.ano}" no un año`);
        // if(this.ano < 1896 || this.ano.toString().length !== 4) return console.warn(`El año "${this.ano}" no es valido`);
        // if(!(this.pais instanceof Array)) console.warn(`EL formado ${this.pais} no es un array`);
        // if(!(this.genero instanceof Array)) console.warn(`EL formado ${this.pais} no es un array`);
        // this.genero.forEach(gen => { 
        //     if(typeof gen !== 'string') return console.warn(`El genero "${gen}" es incorreto , tiene que ser un cadena de texto`);
        //     if(!(generosAceptados.includes(gen.toLowerCase()))){
        //         return console.warn('no');
        //     }else{
        //          return console.info('aceptado');
        //     }; 
        // });
        // if(typeof this.calificacion !== 'number' || this.calificacion > 10 || this.calificacion < 0 ) return console.warn(`La calificación: "${this.calificacion}" es Incorreta`);
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAno(ano);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.g
    };
    validarCadena(propiedad, valor){
        if(typeof valor !== 'string') return console.warn(`El Valor ${propiedad}, No es una cadena de texto`);

        if(!valor) return console.warn(`El valor de ${propiedad} esta vacio`);

        return true;
    };
    validarLongitud(prop,valor,longitud){
        if(valor.length > longitud) return console.warn(`${prop} "${valor}" excede el numero de caracteres permitido (${longitud}).`);

        return true;
    };
    validarArray(proriedad, valor){
        if(valor.length === 0) return console.warn(`No has indroducido el ${proriedad}`);
        if(!(valor instanceof Array)) return console.warn(`El valor "${valor}" de ${proriedad} no es un Array`);
        valor.forEach((item, index) => {if(typeof item !== 'string') return console.warn(`El valor "${item}" de la posición ${index + 1} de ${proriedad} no es una cadena de texto`)});
        return true;
    };
    validarNumero(propiedad, valor){
        if(!valor) return  console.warn(` El valor de ${propiedad} esta vacio`);
        if(typeof valor !== 'number') return console.warn(`El ${propiedad}, tine que ser un numero;`)
        return true;
    };
    fichaTecnica(){
       return console.info(`IMBD :${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAno de estreno: ${this.ano}\nPais de Origen: ${this.pais}\nGeneros: ${this.genero}\nCalificación : ${this.calificacion}`)
    };
    validarIMDB(id){
        if(this.validarCadena('IMDB id',id)){
            if(!(/^([A-Za-z]){2}\d{7}$/.test(this.id))) return console.error(` IMDB id "${id}" es incorreto, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`); 
        };
    };
    validarTitulo(titulo){
        if(this.validarCadena('Titulo',titulo)){
            this.validarLongitud("Titulo",titulo,100);
        };
    };
    validarDirector(director){
        if(this.validarCadena('Director',director)){
            this.validarLongitud("Director",director,50);
        };
    };
    validarAno(ano){
        if(this.validarNumero('Año de Estreno',ano,)){
            if(!(/^\d{4}$/).test(ano) || ano < 1886) return console.warn(`El Ano de Esteno "${ano}" es Incorrento, tine que ser un numero de 4 digitos`);
        };
    };
    validarPais(pais){
        this.validarArray('Pais',pais);
    };
    validarGenero(genero){
        this.validarArray('Genero', genero);
        genero.forEach(item => {
            if(!Pelicula.ListaDeGeneros.includes(item)){
                console.warn(`El genero "${item}" no se a encontrado o no existe`);
                Pelicula.generosAceptados();
            } 
        })
    };
    validarCalificacion(calificacion){
        if(this.validarNumero(calificacion)){
            if(calificacion())
        }
    }
    static get ListaDeGeneros(){
        return["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime"," Documentary" ,"Drama", "Family", "Fantasy", "Film Noir"," Game-Show", "History", "Horror", "Musical", "Music", "Mystery","News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"].join(', ').toLocaleLowerCase().split(',');
    };
    static generosAceptados(){
        return console.info(`Los generos aceptasos son:\n\n${Pelicula.ListaDeGeneros}`);
    };
};
const peliculas = [
    ['ju1234567','Jurassic World: Dominion (Original)','Colin Trevorrow',2022,['Estados Unidos da América'],['Ação','Aventura', 'Ficção Científica'],7.7],
    ['ju2092934','Jurassic Park','Steven Spielberg',1993,['Estados Unidos'],['aventura',
    'ficção científica'],10],
    ['in3039221','Interstellar','Christopher Nolan',2014,['Estados Unidos da América','Reino Unido da Grã-Bretanha','Irlanda do Norte'],['Aventura',' Drama', 'Ficção Científica'],10]
]
const peli = new Pelicula({
    id: "it1234567",
    titulo: 'JULIO',
    director: 'jdi',
    ano: 3000,
    pais: ['julio'],
    genero: ['action','julio'],

    
})
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   X- Todos los datos del objeto son obligatorios.
//   X- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   X- Valida que el título no rebase los 100 caracteres.
//   x- Valida que el director no rebase los 50 caracteres.
//    X- Valida que el año de estreno sea un número entero de 4 dígitos.
//  x - Valida que el país o paises sea introducidos en forma de arreglo.
//   x- Valida que los géneros sean introducidos en forma de arreglo.
//   x- Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   x- Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

