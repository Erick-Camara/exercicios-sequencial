//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas 
//trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês

const prompt = require("prompt-sync")();

const ganhohora = parseFloat(prompt(`Digite quanto vc ganho por hora: `));

const horames = parseFloat(prompt(`Digite quantas horas vc trabalhouu no mês: `));

const salario = ganhohora * horames

console.log(`O salário do referido mês é R$ ${salario} Reais`)
