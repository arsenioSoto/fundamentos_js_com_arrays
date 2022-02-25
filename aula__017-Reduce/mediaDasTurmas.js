const turmaJavaScript = [11, 12, 8, 17, 10, 16.5, 14, 10, 7];
const turmaJava = [16, 5, 8, 19, 5, 16];
const turmaBaseDeDados = [17, 3.5, 18, 19.5];

function mediaTurma(notasDaTurma) {
    return notasDaTurma.reduce((acum, atual) => atual + acum, 0) / notasDaTurma.length;
}

console.log(`Média da Turma JavaScript ${mediaTurma(turmaJavaScript)}`);
console.log(`Média da Turma Java ${mediaTurma(turmaJava)}`);
console.log(`Média da Turma Base de dados ${mediaTurma(turmaBaseDeDados)}`);