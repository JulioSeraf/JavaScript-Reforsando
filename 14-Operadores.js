// Operadores 

// Aritmeticos + - / % ()

/*  
    + === sumar 
    - === restar
    / === divición
    % === divisón absoluta
    () === cochetas

*/

// Relacionales : >,<,>=,<=,==,===,!=,!== 

/* 
    > maior que
    < menor que 
    >= maior o igual
    <= menor o igual 
    = asignacion 
    == igualador de valores (ya no se usa tanto se considera mala pratica)
    === igualador de tipos e valore (estandar de uso)
*/

// incrementacio y Decrementacion 
 
/*
    b =+ suma la varialve a si mesma mas uno
    igaul b = b + 1;  
    b =- suma la variavel a si mesma y resta uno
    igual a b = b - 1;
*/

// Operador unario, aumenta los valores por unidades

/* 
    a++ / ++a; suma un a la variavel 
    a-- / --a; resta un valor a la variavel 

    // Ojo si el unario viene primeira q la variavel primeiro se le suma o resta un valor si el unario viene depues de la variavel primero se le la variavel depues se le suma o resta el valor

*/

let a = 2;
// Se le suma el valor a la variavel despues se la le
console.log(++a);
// primeiro la variavel depues se le suma 
console.log(a++);

// Operadores Logicos 

/*
    ! not  
        Niega, es decir lo que es verdadero lo vuelve falso y viserversa

    || or 
     
        si tengo dos condiciones use una de ellas es verdadera me retorna verdadeiro

    && AND

       solo retorna verdadeiro caso todas las condiciones son verdadera 
*/

console.log(!true) // retorna false 
console.log(!false) // retorna true
console.log(true || false) // returna true ya q una es true
console.log(true && false && true) // retorna false ya que una de las condiciones es false