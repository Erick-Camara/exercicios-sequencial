// Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área.

const prompt = require("prompt-sync")();

const raio = parseFloat(prompt(`Digite o valor do raio: `));

const area = 3.14 * (raio ** 2)

console.log(`O valor da area é: ${area}`);