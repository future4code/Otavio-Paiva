import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #ECC94B;
  --green: #008037;
  --red: #E52E4D;
  --blue: #5429cc;
  --shape: #fff;
  --black: #111111;
}

   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     background-color: var(--background)
     
   }

   html{
     @media(max-width:1080px){
       font-size: 93.85%; //15px
     } 

     @media(max-width:720px){
       font-size: 87.5%; //14px
     } 
   }

   //REM = 1rem = 16px

   body{
     background: var(--background);
     -webkit-font-smoothing: antialiased;
   }

   body, input, textarea, button{
     font-family: 'Poppins', sans-serif;
     font-weight: 400;
   }

   h1, h2, h3, h4, h5, h6, strong{
     font-weight: 400;
   }

   button{
     cursor: pointer;
   }

   [disabled] {
     opacity: 0.6;
     cursor: not-allowed;
   }

  
`;
