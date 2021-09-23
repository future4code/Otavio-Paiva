import React from "react";
import { Container, Header } from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <h1>Labefy</h1>
          <nav>
            <a href="/">Playlists</a>
            <a href="/">Podecasts</a>
            <a href="/">Criar playlist</a>
          </nav>
          <input></input>
        </Header>
      </Container>
    );
  }
}
