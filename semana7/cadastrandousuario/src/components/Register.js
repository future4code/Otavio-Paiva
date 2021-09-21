import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 320px;

    input {
      margin-bottom: 16px;
      height: 24px;
    }

    button {
      margin-top: 16px;
      height: 32px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      background-color: #cbd5e0;
      transition: all 0.2s;

      :hover {
        background-color: #718096;
        color: #fff;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  button {
    height: 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const headers = {
  headers: {
    Authorization: "otavio-augusto-maryam",
  },
};

export class Register extends React.Component {
  state = {
    userName: "",
    userEmail: "",
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.userName,
      email: this.state.userEmail,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ userName: "" });
        this.setState({ userEmail: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  handleCreateUser = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleCreateEmail = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  render() {
    return (
      <Container>
        <Header>
          <button onClick={this.props.changeStep}>
            <FiArrowLeft />
          </button>
          <h1>Cadastro de usuários</h1>
        </Header>
        <form>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            value={this.state.userName}
            onChange={this.handleCreateUser}
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            name="email"
            value={this.state.userEmail}
            onChange={this.handleCreateEmail}
          />
          <button onClick={this.createUser}>Cadastrar</button>
        </form>
      </Container>
    );
  }
}
