// Exercicios Interpretação
// 1)
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2)
// a)
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// b) Copiar um objeto

// 3)
// a) 
// false
// Undefined

// b) Primeiro ele retornou o boolean da propriedade backender, e depois ele tentou retornar uma propriedade inexistente, ou seja, que não é definida, undefined.

// Exercicios Escrita

// 1)
// a)
const person = {
    name: "Otavio",
    nickname: ["Otavio Augusto", "Tavim", "Pirico"]
}

console.log(`Eu sou ${person.name}, mas pode me chamar de: ${person.nickname[0]}, ${person.nickname[1]} ou ${person.nickname[2]}`)

// b)
const person2 = {
    ...person,
    nickname: ["Pirico", "Tavinho", "Augusto"]
}

console.log(`Eu sou ${person2.name}, mas pode me chamar de: ${person2.nickname[0]}, ${person2.nickname[1]} ou ${person2.nickname[2]}`)

// 2)
// a)
const user = {
    name: "Otavio",
    age: 28,
    profession: "student",    
}


const teacher = {
    name: "Lucas",
    age: 34,
    profession: "teacher"
}

// b)

function whoIs(){
    console.log(`${user.name}, ${user.name.length}, ${user.age}, ${user.profession.length}`)
    console.log(`${teacher.name}, ${teacher.name.length}, ${teacher.age}, ${teacher.profession.length}`)
}
whoIs(user)

// 3)  

const carrinho = [];

const fruit1 = {
    name: "Goiaba",
    isAvailable: true
}
const fruit2 = {
    name: "Banana",
    isAvailable: true
}
const fruit3 = {
    name: "Morango",
    isAvailable: true
}

function receivedFruit(frutas){
    carrinho.push(frutas)
    console.log(carrinho) 
}

receivedFruit([fruit1, fruit2, fruit3])     

// desafio

// 1)

function dataUser(){
    const name = prompt("Qual seu nome?")
    const age = Number(prompt("Qual sua idade?"))
    const profession = prompt("Qual sua profissão?")

    const dataPromp = {
        name,
        age,
        profession
    }
    console.log(dataPromp)
    console.log(typeof dataPromp)
}

dataUser()

// 2)

function receivedMovies(){
    const movie1 = {
        release: 2007,
        name: "Tropa de Elite"
    }

    const movie2 = {
        release: 2007,
        name: "Tropa de Elite2"
    }
    
    const lancadoPrimeiro = movie1.release < movie2.release 
    const lancadoMesmoAno = movie1.release <= movie2.release 
    console.log(`O primeiro filme foi lançado antes do segundo? ${lancadoPrimeiro}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${lancadoMesmoAno}`)
}
receivedMovies()












