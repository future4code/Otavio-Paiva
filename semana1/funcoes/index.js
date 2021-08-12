Interpretação
1)
a) 10, 50
b) Ele realiza o calculo mas não retorna em nenhum lugar

2) a) a função esta recebendo um texto, colocando todo o texto em letra minuscula e retornando um booleano se tem a palavra cenoura no texto.
b) true, true, false

Escrita
1)a)
function aboutMySelf(){
	const aboutMe = "Eu sou otavio, tenho 28 anos, moro em Volta Redonda e sou estudante"
	console.log(aboutMe)
}
aboutMySelf()

b) 
function aboutMySelf1(name, age, city, profession){
	const aboutMe1 = `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${profession}`
	return aboutMe1
}

const info = aboutMySelf1("Otavio", 28, "Volta Redonda", "estudante")
console.log(info)

2)
a)
function numbers(n1,n2){
	const soma = n1+n2
	console.log(soma)
}

const n1 = Number(prompt("Escreva um numero"))
const n2 = Number(prompt("Escreva outro numero"))

numbers(n1,n2)

b)
function numbers(n1,n2){
	const booleano = n1 >= n2
	console.log(booleano)
}

const n1 = Number(prompt("Escreva um numero"))
const n2 = Number(prompt("Escreva outro numero"))

numbers(n1,n2)

c)
function numbers(n1){
	const par = ((n1 % 2) === 0 ? true : false)
	console.log(par)
}

const n1 = Number(prompt("Escreva um numero"))
numbers(n1)

d)

const userMessage = prompt("Escreva uma mensagem")

const returnMessage = (message) => {
	return console.log(message.length, message)
}

const result = returnMessage(userMessage.toUpperCase())

3)

const firstNumber = Number(prompt("Escreva um numero"))
const secondNumber = Number(prompt("Escreva outro numero"))

function plus(n1,n2){
	const soma = n1+n2
	return console.log(soma)
}

function subtraction(n1,n2){
	const less = n1-n2
	return console.log(less)
}

function multiplication(n1,n2){
	const multi = n1*n2
	return console.log(multi)
}
function division(n1,n2){
	const dividir = n1*n2
	return console.log(dividir)
}

plus(firstNumber, secondNumber)
subtraction(firstNumber, secondNumber)
multiplication(firstNumber, secondNumber)
division(firstNumber, secondNumber)


















