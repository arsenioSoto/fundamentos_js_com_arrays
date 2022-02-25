const alunos = ['Arsenio', 'junior', 'Soto', 'Jose'];
const mediaAlunos = [10, 17, 12, 9];

let listaDeAlunos = [alunos, mediaAlunos];

const mostrarNotaNome = (nomeEstudante) => {

    if (listaDeAlunos[0].includes(nomeEstudante)) {

        let indice = listaDeAlunos[0].indexOf(nomeEstudante);

        return listaDeAlunos[0][indice] + ' a sua media e ' + listaDeAlunos[1][indice];

    } else {
        return "Registro nao encontrado! ";
    }
}

console.log(mostrarNotaNome("Sword"));