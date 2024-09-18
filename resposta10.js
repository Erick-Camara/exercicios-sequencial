//Faça um algoritmo que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.

const prompt = require("prompt-sync")();

const celsius = parseFloat(prompt(`Digite a temperatura em Celsius: `));

const fahrenheit = (celsius * 1.8) + 32

console.log(`O valor da temperatura em Fahrenheit é ${fahrenheit}ºF`);