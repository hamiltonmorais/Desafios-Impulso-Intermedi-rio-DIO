let opcaoCorreta = gets();
let chutes = gets().split(' ');

let acertos = 0 ;

let acertosLista = chutes.filter(acertos => acertos.includes(opcaoCorreta));

acertos = acertosLista.length;

console.log(acertos);