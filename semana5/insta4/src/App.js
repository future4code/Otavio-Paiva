import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "otavio",
        fotoUsuario:
          "https://media-exp1.licdn.com/dms/image/C4D03AQHmsp9hsvya0Q/profile-displayphoto-shrink_200_200/0/1622239792809?e=1636588800&v=beta&t=6kNV80WwkQXma1PGG00yHZApYu_8Q8E7ORVT77oOOfU",
        fotoPost:
          "https://media-exp1.licdn.com/dms/image/C560BAQEELHQ29c0kUg/company-logo_200_200/0/1576513832337?e=1639008000&v=beta&t=npi2dCvQXhicBSIBAG7HEN98ht8wfxGs5sC-XYOckx8",
      },
      {
        nomeUsuario: "augusto",
        fotoUsuario:
          "https://media-exp1.licdn.com/dms/image/C4D03AQHmoJPE73k9EQ/profile-displayphoto-shrink_200_200/0/1568647718004?e=1636588800&v=beta&t=b4WVk2C_wDAdfK2maV659SrUIPk41QRf04NFvL3GXvk",
        fotoPost:
          "https://www.navitrine.app/_next/image?url=%2FNaVitrineTitulo.png&w=96&q=75",
      },
    ],
    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorFotoPost: "",
  };

  adicionarPost = () => {
    const novoPost = [
      ...this.state.posts,
      {
        nomeUsuario: this.state.valorNomeUsuario,
        fotoUsuario: this.state.valorFotoUsuario,
        fotoPost: this.state.valorFotoPost,
      },
    ];
    this.setState({ posts: novoPost });
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ valorFotoUsuario: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ valorFotoPost: event.target.value });
  };

  render() {
    console.log(this.state.posts);
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.nomeUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        {listaDePosts}
        <input
          type="text"
          placeholder="Nome do Usuario"
          value={this.state.valorNomeUsuario}
          onChange={this.onChangeNomeUsuario}
        />
        <input
          type="text"
          placeholder="Foto do usuario"
          value={this.state.valorFotoUsuario}
          onChange={this.onChangeFotoUsuario}
        />
        <input
          type="text"
          placeholder="Foto do post"
          value={this.state.valorFotoPost}
          onChange={this.onChangeFotoPost}
        />
        <button onClick={this.adicionarPost}>Criar</button>
      </MainContainer>
    );
  }
}

export default App;
