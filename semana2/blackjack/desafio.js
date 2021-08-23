const blackJack = () =>{
   console.log("Boas vindas ao jogo de BlackJack!")   
   
   function startGame(){
      const start = confirm("Quer iniciar uma nova rodada?")
      if(start){           
         const user = () =>{
            const carta1 = comprarCarta()
            const carta2 = comprarCarta()           
            const somaCartas1 = (carta1.valor + carta2.valor)
            
            if(carta1.texto.substring(0,1) === "A"  && carta2.texto.substring(0,1) === "A"){
               return user()
            }
            
            console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - ${somaCartas1}`)
            return somaCartas1
         } 
        const valorUser = user()
      
         const computer = () =>{
            const carta3 = comprarCarta()
            const revelarCarta = confirm("Deseja comprar mais uma carta?")

            if(revelarCarta){
               console.log("Vamos revelar")
            } else {
               return
            }

            const carta4 = comprarCarta()   
            const somaCartas2 = (carta3.valor + carta4.valor)

            if(carta3.texto.substring(0,1) === "A"  && carta4.texto.substring(0,1) === "A"){
               return computer()
            }

            console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - ${somaCartas2}`)
            return somaCartas2
         }
         const valorComputer = computer()      

         const winner = (user, computer) => {
            if(user > computer){
               console.log(`O usuario ganhou!`)
            } else if (user < computer){
               console.log(`O computador ganhou!`)
            } else {
               console.log(`Deu empate!`)
            }
         }
         winner(valorUser, valorComputer)    


      } else {
         console.log("O jogo acabou")         
      }
      
   }
   startGame()   
}

blackJack()

