// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let arrayTamanho = array.length
   return(arrayTamanho)
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido = array.reverse()
  return(arrayInvertido)
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayOrdenado = array.sort((a,b) => a -b)
  return (arrayOrdenado)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = array.filter((valor) =>{
      return valor % 2 === 0
  })
  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = array.filter((valor) =>{
        return (valor % 2 === 0)
    })
    let arrayAoQuadrado = arrayPares.map((valor) =>{
        return valor*valor
    })
    
    return arrayAoQuadrado    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;

    for(let i=0; i<array.length; i++){

        if(array[i]>maiorNumero){
            maiorNumero = array[i];
        }
    }
    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const obj = {}
    let maiorNumero
    let menorNumero
    if(num1 >= num2){
        maiorNumero = num1
        menorNumero = num2
    } else if (num1 < num2){
        maiorNumero = num2
        menorNumero = num1
    } 

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero
    console.log(maiorNumero, menorNumero, diferenca)

    obj.maiorNumero = maiorNumero
    obj.maiorDivisivelPorMenor = maiorDivisivelPorMenor
    obj.diferenca = diferenca
    return obj

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const novoArray = []
    for (let i = 0; novoArray.length < n; i++) {
      if (i % 2 == 0) {
        novoArray.push(i)
      }
    }
    return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {   
    if(ladoA!==ladoB && ladoA!==ladoC && ladoB!==ladoC){
        return "Escaleno"
    } else if (ladoA===ladoB && ladoA===ladoC){
        return "Equilátero"
    } else {
        return "Isósceles"
    }    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let menor = Infinity
    let maior = -Infinity
    let segundoMenor = Infinity
    let segundoMaior = -Infinity
    let novoArray = []
    for (numero of array) {
      if (numero < menor) {
        menor = numero
      }
      if (numero > maior) {
        maior = numero
      }
    }
    for (numero of array) {
      if (numero < segundoMenor && numero !== menor) {
        segundoMenor = numero
      }
      if (numero > segundoMaior && numero !== maior) {
        segundoMaior = numero
      }
    }
    novoArray.push(segundoMaior)
    novoArray.push(segundoMenor)
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let osAtores = filme.atores.toString().replaceAll(",", ", ")

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${osAtores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const info = {
       nome: pessoa.nome,
       idade: pessoa.idade,
       email: pessoa.email,
       endereco: pessoa.endereco,
   }

   const infoSpread = {
       ...info,
       nome: "ANÔNIMO"
   }
   return infoSpread
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoaAutorizada = pessoas.filter((valor) => {
    if(valor.altura >= 1.5 && valor.idade > 14 && valor.idade < 60){
        return true
    }    
    return
   })

   return pessoaAutorizada
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoaNaoAutorizada = pessoas.filter((valor) => { 
    if(valor.altura >= 1.5 && valor.idade > 14 && valor.idade < 60){
        return false
    }    
    return true
   })

   return pessoaNaoAutorizada
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const saltoTotalAtualizado = contas.map((conta) => {
        let comprasTotal = 0
        for(let i=0; i < conta.compras.length; i++)
            comprasTotal += conta.compras[i]
            return {
                ...conta,
                saldoTotal: conta.saldoTotal-comprasTotal,
                compras: []
            }        
    })
    return saltoTotalAtualizado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let arrayOrdenado = consultas.sort(function(a,b){
        if(a.nome > b.nome){
            return 1
        }
        if (a.nome < b.nome){
            return -1
        }
        return 0
    })
    return arrayOrdenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let = consultas
    let arrayOrdenarData = consultas.sort(function (a, b) {
      let arrayDataA = a.dataDaConsulta.split("/")
      let dataA = new Date(arrayDataA[2], arrayDataA[1], arrayDataA[0]).getTime()
      let arrayDataB = b.dataDaConsulta.split("/")
      let dataB = new Date(arrayDataB[2], arrayDataB[1], arrayDataB[0]).getTime()
      if (dataA > dataB) {
        return 1
      }
      if (dataA < dataB) {
        return -1
      }
      return 0
    })
    return arrayOrdenarData
}