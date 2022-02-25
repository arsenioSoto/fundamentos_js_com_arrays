const nomes = ['Arsenio', 'Jose', 'Antonio', 'Gito', 'Sergio', 'Alexandre', 'Soto', 'Shaida', 'Alicia', 'Claudia'];
const notas = [12, 14.5, 18, 7.5, 9, 6, 9, 5, 6, 10];


const reprovados = nomes.filter((_, indice) => notas[indice] < 9.4); // i = 7.5 < 9.4 se {Gito, }
console.log(`Alunos reprovados: ${reprovados}`);