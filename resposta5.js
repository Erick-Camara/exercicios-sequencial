//Faça um algoritmo que converta metros para centímetros

const prompt = require("prompt-sync")();

const metro = parseFloat(prompt(`Digite um valor em metros: `));

const cm = metro * 100

console.log(`O valor convertido em centimetros é: ${cm}cm`);