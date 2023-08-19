
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

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAno(ano);
        this.validarPais(pais);
        this.validarGenero(genero);
        this.validarCalificacion(calificacion);
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
            item = item.toLowerCase();
            if(!Pelicula.ListaDeGeneros.includes(item)){
                console.warn(`El genero "${item}" no se a encontrado o no existe`);
                Pelicula.generosAceptados();
            };
        });
    };
    validarCalificacion(calificacion){
        if(this.validarNumero('Calificación',calificacion)){
            if(calificacion > 10 || calificacion < 0) return console.warn(`El valor "${calificacion}" no Coresponde como calificación, hay q ser un numero de 0-10`)
        };
    };
    static get ListaDeGeneros(){
        return["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"].join(',').toLocaleLowerCase().split(',');
    };
    static generosAceptados(){
        return console.info(`Los generos aceptasos son:\n\n${Pelicula.ListaDeGeneros}`);
    };
    fichaTecnica(){
        return console.info(`IMBD :${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAno de estreno: ${this.ano}\nPais de Origen: ${this.pais}\nGeneros: ${this.genero}\nCalificación : ${this.calificacion}`)
     };
};
const peliculas = [
    ['ju1234567','Jurassic World: Dominion (Original)','Colin Trevorrow',2022,['Estados Unidos da América'],['Ação','Aventura', 'Ficção Científica'],7.7],
    ['ju2092934','Jurassic Park','Steven Spielberg',1993,['Estados Unidos'],['aventura',
    'ficção científica'],10],
    ['in3039221','Interstellar','Christopher Nolan',2014,['Estados Unidos da América','Reino Unido da Grã-Bretanha','Irlanda do Norte'],['Aventura',' Drama', 'Ficção Científica'],10]
];
const pelis = [{
    id: "tt0369610",
    titulo: 'Jurassic World',
    director: 'Colin Trevorrow',
    ano: 2022,
    pais: ['Estados Unidos da América'],
    genero: ['action','Adventure','Sci-Fi'],
    calificacion: 6.9
},{
    id: "tt1598776",
        titulo: 'Oppenheimer (Original)',
        director: 'Christopher Nolan',
        ano:  2023,
        pais: ['Estados Unidos da América','Reino Unido da Grã-Bretanha','Irlanda do Norte'],
        genero: ['Biography','Drama',"War",'History'],
        calificacion: 10
    
},{
    id: "tt0001436",
        titulo: 'Te Blue Lagoon (Original)',
        director: 'Randal Kleiser',
        ano: 1980,
        pais: ['Estados Unidos da América'],
        genero: ['Adventure','Drama','Romance'],
        calificacion: 2.7
}];
pelis.forEach(item => {
    let peli = new Pelicula(item);
    peli.fichaTecnica();
});


