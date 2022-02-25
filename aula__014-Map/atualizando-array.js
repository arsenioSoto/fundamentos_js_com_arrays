const notas = [20, 9, 18];

const notasAtualizadas = notas.map(nota => nota == 20 ? nota : ++nota); //9 + 1 = 10

console.log(notasAtualizadas);