// INTERPRETAÇÃO
// 1)false, false, true, boolean
// 2) O prompt retorna string, então ele vai receber os numeros como string e não número para somar. O resultado sera a soma de duas strings
//3) let primeiroNumero = Number(prompt("Digite um numero!")) / let segundoNumero = Number(prompt("Digite outro numero!")) / const soma = primeiroNumero + segundoNumero / console.log(soma)

// ESCRITA
// 1)
const idade = Number(prompt("Qual sua idade?"))
const idadeAmigo = Number(prompt("Qual idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)

const diferencaIdade = idade - idadeAmigo
console.log("A diferença de idade entre nós é de:", diferencaIdade, "anos.")

// 2)
const par = Number(prompt("Digite um número par"))

console.log("O resto da divisão de", par, "por 2 é:", par%2)

// Todo número par dividido por 2 é igual a 0

// O resultado será diferente de 0, nesse caso será igual a 1

// 3)
const idade = Number(prompt("Qual sua idade?"))

console.log("Você tem", idade*12, "meses de idade.")
console.log("Você tem", idade*365, "dias de idade.")
console.log("Você tem", idade*24*365, "meses de idade.")

// 4)
const primeiroNumero = Number(prompt("Escreva um número"))
const segundoNumero = Number(prompt("Escreva outro número"))

let resultado

resultado = primeiroNumero > segundoNumero
console.log(resultado)

resultado = primeiroNumero === segundoNumero
console.log(resultado)

resultado = (primeiroNumero % segundoNumero) === 0
console.log(resultado)

resultado = (segundoNumero%primeiroNumero) === 0
console.log(resultado)
