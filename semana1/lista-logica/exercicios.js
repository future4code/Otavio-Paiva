// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura do retangulo!'))
  const largura = Number(prompt('Digite a largura do retangulo!'))

  const area = altura*largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Escreva o ano atual!'))
  const anoNascimento = Number(prompt('Escreva seu ano de nascimento!'))
  const idade = anoAtual-anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {  
  const IMC = peso/(altura*altura)
  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome!')
  const idade = Number(prompt('Digite sua idade!'))
  const email = prompt('Digite seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Escreva sua cor favorita')
  const cor2 = prompt('Escreva outra cor favorita')
  const cor3 = prompt('Escreva outra cor favorita')

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const palavraMaiscula = string.toUpperCase()
  
  return palavraMaiscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const vendaIngressos = custo/valorIngresso
  
  return vendaIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const igualdade = string1.length === string2.length

  return igualdade
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const retornaPrimeiro = array[0]
  return retornaPrimeiro
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const retornaUltimo = array[array.length-1]
  return retornaUltimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length-1]]=[array[array.length-1], array[0]];

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const palavraIguais = string1.toLowerCase() === string2.toLowerCase()

  return palavraIguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Digite o ano atual!'))
  const anoNascimento = Number(prompt('Digite seu ano de nascimento!'))
  const emissaoRG = Number(prompt('Digite ano de emissão da RG'))

  const idade = anoAtual - anoNascimento
  const difRG = anoAtual - emissaoRG

  const check = 
  (idade <= 20 && difRG >= 5)   || 
  (idade > 20 && idade <= 50 && difRG >=10)   || 
  (idade > 50 && difRG >= 15)

  console.log(check) 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano % 4 === 0) && (ano % 100 != 0 || (ano % 400 == 0)) 
  return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt('Você tem mais de 18 anos? Responsa com sim ou não.')
  const ensino = prompt('Você tem ensino médio completo? Responsa com sim ou não.')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Responsa com sim ou não.')

  const inscricao = (maiorDeIdade === 'sim' && ensino === 'sim' && disponibilidade === 'sim')
  console.log(inscricao) 
}