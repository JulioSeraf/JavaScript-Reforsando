// Utilizando Break y continue-------------------
const numeros = [1,2,3,4,5,6,7,8,9,0];
for(let i= 0 ; i < numeros.length ; i++){
    // utilizamos el break para parar el fluxo do for onde queramos neste caso en el 5 usando la estructura if
    if (i === 5){
        break;
    }
    console.log(numeros[i]);
}

for(let i= 0 ; i < numeros.length ; i++){
    // Al utilizar Continue el fluxo continua pero saltano la position a signada, en neste caso la position 5 (numero 6)
    if (i === 5){
        continue;
    }
    console.log(numeros[i]);
}