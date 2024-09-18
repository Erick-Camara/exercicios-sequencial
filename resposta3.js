// Faça um algoritmo que peça dois números e imprima a soma.

const prompt = require("prompt-sync")();

const num1 = parseInt(prompt(`Digite o primeiro número: `));

const num2 = parseInt(prompt(`Digite o segundo número: `));

let soma = num1 + num2

console.log(`O resultado da soma é ${soma}`)