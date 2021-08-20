// Interpretação
// 1)a) Vai imprimir o objeto, numero do index e o array do usuarios
// 2)a) Retornar os nomes dos usuarios
// 3)a) Retorna o array com usuarios que não tem a palavra Chijo

// Escrita
// 1)
// a)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const nomeDosPets = pets.map((valor,i,array) =>{
//     return valor.nome
// })  

// console.log(nomeDosPets)


// // b)
// const racaSalsicha = pets.filter((valor,i,array) => {
//     return valor.raca === "Salsicha"
// })

// console.log(racaSalsicha)

// // c)
// const racaPoodle = (valor,i,array) => {
//     return valor.raca === "Poodle"    
// }

// const clientesPoodle = pets
//     .filter(racaPoodle)
//     .map(extrairNome)

// function extrairNome(valor, i, array){
//     return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${valor.nome}!`)
// }

// console.log(clientesPoodle)

// 2)
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// // a)
// const nomeProdutos = produtos.map((valor,i,array) =>{
//     return valor.nome
// })

// console.log(nomeProdutos)

// // b)
// const nomeEPreco = produtos.map((valor, i, array) =>{
//     const nome = valor.nome
//     const preco = (valor.preco - (valor.preco *0.05)).toFixed(2)
//     return {nome, preco}
// })
// console.log(nomeEPreco)

// // c)
// const resultCategoriaBebidas = produtos.filter((valor,i,array) => {
//     return valor.categoria === "Bebidas"
// })

// console.log(resultCategoriaBebidas)

// // d)
// const palavraYpe = produtos.filter((valor, i,array) =>{
//     return valor.nome.includes("Ypê")
// })
// console.log(palavraYpe)

// // e)
// const comprarYpe = produtos
//     .filter((valor, i , index) =>{
//         return valor.nome.includes("Ypê")
//     })
//     .map((valor, i,array) =>{
//         return `Compre ${valor.nome} por ${valor.preco}`
//     })
// console.log(comprarYpe)


// console.log(palavraYpe)
// // Desafio
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

// // a)
// const newArrayPokemons = pokemons.sort(function (a, b) {
//     if (a.nome > b.nome) {
//       return 1;
//     }
//     if (a.nome < b.nome) {
//       return -1;
//     }
//     // se a igual b
//     return 0;
//   });
//   console.log(newArrayPokemons);
  