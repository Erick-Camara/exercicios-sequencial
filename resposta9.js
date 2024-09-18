//Faça um algoritmo que peça a temperatura em graus Fahrenheit, transforme e mostre a 
//temperatura em graus Celsius. (C = 5 * ((F-32) / 9)).

const prompt = require("prompt-sync")();

const fahrenheit = parseFloat(prompt(`Digite a temperatura em Fahrenheit: `));

const celsius = (fahrenheit - 32) * 5 / 9

console.log(`O valor da temperatura em Celsius é ${celsius}ºC`);