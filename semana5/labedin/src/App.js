import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHmsp9hsvya0Q/profile-displayphoto-shrink_200_200/0/1622239792809?e=1636588800&v=beta&t=6kNV80WwkQXma1PGG00yHZApYu_8Q8E7ORVT77oOOfU" 
          nome="Otávio Augusto" 
          descricao="Oi, eu sou o Otávio Augusto. Sou aluno da Labenu. Sou desenvolvedor front-end."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/1782/1782765.png" 
          titulo="Email"
          texto="otaviochispim@gmail.com"
        />
        <CardPequeno 
          imagem="https://img-premium.flaticon.com/png/512/1009/premium/1009850.png?token=exp=1631114580~hmac=0af59a98a0a51c4a0c5d5ac27419edf6" 
          titulo="Endereço"
          texto="otaviochispim@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQEELHQ29c0kUg/company-logo_200_200/0/1576513832337?e=1639008000&v=beta&t=npi2dCvQXhicBSIBAG7HEN98ht8wfxGs5sC-XYOckx8" 
          nome="Pally" 
          descricao="Responsável por desenvolver as páginas e estilizações utilizando ReactJS e SASS." 
        />
        
        <CardGrande 
          imagem="https://www.navitrine.app/_next/image?url=%2FNaVitrineTitulo.png&w=96&q=75" 
          nome="Navitrine" 
          descricao="Responsável por desenvolver as páginas e estilizações utilizando Next e Styled-Components."  
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
