// Interpretação
// 1)
// a) Ele esta realizando um teste para ver se o numero é par ou impar, se ele for par passa no teste.
// b) Numeros par
// c) Numero impar

// 2)
// a) Mostrar o preço da fruta escolhida pelo cliente
// b) O preço da fruta Maça é R$2.25
// c) O preço da fruta Pêra é R$5

// 3)
// a)Pedindo que o usuario digite um numero
// b) Esse numero passou no teste. Erro.
// c) A mensagem esta dentro do escopo da const, logo o console.log deveria estar também para retornar a mensagem, ja que o componente filho não tem acesso ao pai

// Escrita
// 1) 
const podeDirigir = (idade) => {
    if(idade>=18){
        console.log("Pode dirigir")
    } else {
        console.log("Não pode dirigir")
    }
}

const age = Number(prompt("Digite sua idade"))
podeDirigir(age)

// 2)
const turnoAula = (turno) => {
    if(turno==="M"){
        console.log("Bom dia!")
    } else if(turno==="V"){
        console.log("Bom tarde!")
    } else {
        console.log("Boa noite!")
    } 
}

const turnoEstuda = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino e N para noturno.").toUpperCase()
turnoAula(turnoEstuda)

// 3)

// const turnoAula = (turno) => {
//         switch(turno){
//             case 'M':
//                 console.log("Bom dia!")
//             break
//             case 'V':
//                 console.log("Bom tarde!")
//             break
//             case 'N':
//                 console.log("Boa noite!")   
//             break
//             default:
//                 console.log("Escolha uma das opções: M, V ou N")      
//         }
// }

// const turnoEstuda = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino e N para noturno.").toUpperCase()
// turnoAula(turnoEstuda)

// 4)
const movieSession = (gender, price) => {
    if(gender && price <= 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme")
    }
}

const movieGender = prompt("Qual generoso de filme você gosta de assistir?").toLowerCase() === "fantasia"
const moviePrice = Number(prompt("Qual valor você esta disposto a pagar no ingresso?"))

movieSession(movieGender, moviePrice)

// Desafio

// 1)


// const movieSession = (gender, price, lanche) => {
//     const lanchinho = []
//     lanchinho.push([lanche])

//     if(gender && price <= 15){
//         console.log(`Bom filme, aproveita seu ${lanchinho}`)
//     } else {
//         console.log("Escolha outro filme")
//     }
// }

// const movieGender = prompt("Qual generoso de filme você gosta de assistir?").toLowerCase() === "fantasia"
// const moviePrice = Number(prompt("Qual valor você esta disposto a pagar no ingresso?"))
// const movieLanchinho = prompt("O que você vai querer comer?")

// movieSession(movieGender, moviePrice, movieLanchinho)
