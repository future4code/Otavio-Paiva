import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bee3f8;
  min-height: 100vh;

  h2 {
    font-size: 28px;
    color: #111;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #90cdf4;
  align-items: center;
  padding: 20px;

  h1 {
    color: #fff;
    font-size: 40px;
  }

  button {
    height: 28px;
    width: 240px;
    border-radius: 10px;
    border: none;
    color: #fff;
    background-color: #4299e1;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      background-color: #2c5282;
    }
  }
`;

export default class App extends React.Component {
  state = {
    activity: {},
  };

  getActivity = () => {
    const url = "https://www.boredapi.com/api/activity/";

    axios
      .get(url)
      .then((res) => {
        this.setState({ activity: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { activity, type, participants, price } = this.state.activity;

    return (
      <Container>
        <Header>
          <h1>Está entendiado?</h1>
          <button onClick={() => this.getActivity()}>Clique aqui</button>
        </Header>

        <hr />
        <h2>Atividade</h2>
        <p>
          Nome: <b>{activity}</b>{" "}
        </p>
        <p>
          Tipo: <b>{type}</b>
        </p>
        <p>
          Participantes: <b>{participants}</b>
        </p>
        <p>
          Preço: <b>{price}</b>
        </p>
      </Container>
    );
  }
}
