const notas = [20, 12, 6.5];

let somaDeNotas = 0;


for (let i = 0; i < notas.length; i++) {

    somaDeNotas += notas[i]; //somaDeNotas = SomaDeNotas + notas[i];
    //somaDeNotas = 20+12 = 32 + 6.5 = 38.5;
}
//38.5/3 = 12.8333333334
let media = somaDeNotas / notas.length;

console.log(media);