import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'otavio'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQHmsp9hsvya0Q/profile-displayphoto-shrink_200_200/0/1622239792809?e=1636588800&v=beta&t=6kNV80WwkQXma1PGG00yHZApYu_8Q8E7ORVT77oOOfU'}
          fotoPost={'https://media-exp1.licdn.com/dms/image/C560BAQEELHQ29c0kUg/company-logo_200_200/0/1576513832337?e=1639008000&v=beta&t=npi2dCvQXhicBSIBAG7HEN98ht8wfxGs5sC-XYOckx8'}
        />
        <Post
          nomeUsuario={'augusto'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQHmoJPE73k9EQ/profile-displayphoto-shrink_200_200/0/1568647718004?e=1636588800&v=beta&t=b4WVk2C_wDAdfK2maV659SrUIPk41QRf04NFvL3GXvk'}
          fotoPost={'https://www.navitrine.app/_next/image?url=%2FNaVitrineTitulo.png&w=96&q=75'}
        />
      </MainContainer>
    );
  }
}

export default App;
