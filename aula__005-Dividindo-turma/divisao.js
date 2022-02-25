const alunos = [
    'Arsenio', 'Soto', 'Jose', 'Junior', 'Antonio', 'Alexandre',
    'Ester', 'Crimilde', 'Geremias', 'Olinda', 'Delfina', 'Calo', 'Shelton', 'Clemente',
    'Radjabo', 'Aderito', 'Sergio', 'Eurico', 'Nalbeto', 'Claudia'
];

console.log("Tamanho do Array: " + alunos.length);

//0, 20/2= 10
const turma1 = alunos.slice(0, alunos.length / 2);

const turma2 = alunos.slice(alunos.length / 2);


console.log(`Alunos da turma 1: ${turma1}`);
console.log(`Alunos da turma 2: ${turma2}`);