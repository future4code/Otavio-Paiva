// INTERPRETAÇÃO DE CÓDIGO
// 1) a)undefined 
// b)null
// c) 11
// d) 3
// e) [3,19,5,6,7,8,9,10,11,12,13]
// f) 9

// 2)  "SUBI NUM ÔNIBOS EM MIRROCOS", 27

// ESCRITA DE CÓDIGO

// 1) 
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu e-mail?")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vinda(o) ${nome}`)

// 2)
const comidas = ["aroz", "bife", "batata", "salada", "japones"]

console.log(`Essas são minhas comidas preferidas:`)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const comida = prompt("Qual sua comida preferida?")

comidas[1] = comida

console.log(comidas)

// 3)
// a)
const listaDeTarefas = []

// b)
const tarefa0 = prompt("Insira uma do seu dia")
const tarefa1 = prompt("Insira outra do seu dia")
const tarefa2 = prompt("Insira outra do seu dia")

listaDeTarefas.push(tarefa0)
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)

// c)
console.log(listaDeTarefas)

// d)
const numeroTarefa = Number(prompt("Digite um dos números a seguir: 0, 1 ou 2"))

// e)
listaDeTarefas.splice(numeroTarefa, 1)

// f)
console.log(listaDeTarefas)

// DESAFIO


// 1)
const frase = prompt("Escreva uma frase")

const arrayDeStrings = frase.split(' ')

console.log(arrayDeStrings)

// 2)
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas.indexOf("Abacaxi"), frutas.length)




