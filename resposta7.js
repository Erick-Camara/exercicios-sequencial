//Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta 
//área para o usuário

const prompt = require("prompt-sync")();

const area = parseFloat(prompt(`Digite o valor da area: `));

const dobro = (area ** 2) * 2

console.log(`O dobro da area do quadrado é: ${dobro}`);