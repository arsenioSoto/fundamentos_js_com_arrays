const notas = [20, 9, 12, 5];
notas.pop();
console.log(notas);

let media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(`a media e ${media}`);