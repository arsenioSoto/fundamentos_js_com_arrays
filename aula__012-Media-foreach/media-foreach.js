const notas = [20, 12.5, 18, 9];

let somaDasNotas = 0;

//notas.forEach(nota => {

// somaDasNotas += nota; // 0 + 20 = 20, 20+12.5 = 32.5,  59.5

//});notas

notas.forEach(function(nota) {
    somaDasNotas += nota;
});

//console.log(somaDasNotas);
//59.5          //4
let media = somaDasNotas / notas.length;


console.log(media);