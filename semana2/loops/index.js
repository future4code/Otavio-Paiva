// Interpretação
// 1) 
// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)

// Ele esta somando os elementos menores que 5, 0 + 1 + 2 + 3 + 4 = 10

// 2) 
// a) O que vai ser impresso no console?
// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a)19, 21, 23, 25, 27, 30 / b)Não

// 3) 
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Seria impresso até do primeiro * com numero 1 até o quarto **** com o numero 4


// Escrita  
// 1)
// let quantidadePet = Number(prompt("Quantos pets você tem?"))

// if(quantidadePet === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else {    
//     const nomes = []
//     for(let i = 0; i < quantidadePet; i++){
//         nomes.push(prompt("Digite o nome de cada pet, um por vez"))
//     }
//     console.log(`Os nomes são: ${nomes}`)
// }

// 2)
// a)
// const arrayOriginal = [2,5,7,11,15,20,27,29,30,50,66,98];

// for(let i = 0; i < arrayOriginal.length; i++){    
//     console.log(arrayOriginal[i])
// }

// b)
// const arrayOriginal = [2,5,7,11,15,20,27,29,30,50,66,98];

// for(let i = 0; i < arrayOriginal.length; i++){    
//     console.log(arrayOriginal[i]/10)
// }

// c)
// const arrayOriginal = [2,5,7,11,15,20,27,29,30,50,66,98];
// const par = []

// for(let i = 0; i < arrayOriginal.length; i++){    
//     if(arrayOriginal[i] % 2 === 0){
//         par.push(arrayOriginal[i])
//     }
// }
// console.log(par)

// d)
// const arrayOriginal = [2,5,7,11,15,20,27,29,30,50,66,98];
// const arrayNovo = []

// for(let i = 0; i < arrayOriginal.length; i++){
//     arrayNovo.push(`O elemento do index ${i} é ${arrayOriginal[i]}`)
// }

// console.log(arrayNovo)

// e)
// const arrayOriginal = [2,5,7,11,15,20,27,29,30,50,66,98];

// function devolveMaior(arr){
//     let maior = 0

//     for(let i = 0; i < arr.length;i++){
//         if(arr[i]>maior){
//             maior = arr[i]
//         }
//     }
//     return `O maior número é: ${maior}`
// }

// const MaiorNumero = devolveMaior(arrayOriginal)
// console.log(MaiorNumero)

// function devolveMenor(arrayMenor){
//     let menor = arrayOriginal.length -1

//     for(let i = 0; i < arrayMenor.length;i++){
//         if(arrayMenor[i]<menor){
//             menor = arrayMenor[i]
//         }
//     }
//     return `O menor número é: ${menor}`
// }

// const MenorNumero = devolveMenor(arrayOriginal)
// console.log(MenorNumero)


// Desafio

// 1)
// const numeroPensado = Number(prompt("Pense em um numero e digite aqui."))
// console.log("Vamos jogar!")
// let numeroChutado = Number(prompt("Digite um numero"))

// while(numeroChutado !== numeroPensado){
//     if(numeroChutado > numeroPensado) {
//         console.log(`O numero chutado foi: ${numeroChutado}`)
//         console.log(`Errrrrrrou, é menor`)
//     } else {
//         console.log(`O numero chutado foi: ${numeroChutado}`)
//         console.log(`Errrrrrrou, é maior`)
//     }
//     numeroChutado = Number(prompt("Digite outro número"))
// }

// if(numeroChutado === numeroPensado){
//     console.log(`O numero chutado foi: ${numeroChutado}`)
//     console.log(`Acertou!`)
// }

// 2)
// let numeroPensado = 0
// function getRandom(max){
//     numeroPensado = Math.floor((Math.random()* max)+1)
//     return numeroPensado
// }
// getRandom(100)

// console.log("Vamos jogar!")
// let numeroChutado = Number(prompt("Digite um numero"))

// while(true){
//     if(numeroChutado === getRandom) {
//         console.log(`O numero chutado foi: ${numeroChutado}`)
//         console.log(`Acertou!`)
//     } else if (numeroChutado > getRandom){
//         console.log(`O numero chutado foi: ${numeroChutado}`)
//         console.log(`Errrrrrrou, é menor`)
//     } else if (numeroChutado < getRandom){
//         console.log(`O numero chutado foi: ${numeroChutado}`)
//         console.log(`Errrrrrrou, é maior`)
//     }
//     numeroChutado = Number(prompt("Digite outro número"))
// }

// if(numeroChutado === numeroPensado){
//     console.log(`O numero chutado foi: ${numeroChutado}`)
//     console.log(`Acertou!`)
// }
