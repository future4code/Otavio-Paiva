import React from "react";
import { FiArrowLeft, FiX, FiEdit2 } from "react-icons/fi";
import styled from "styled-components";
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

const Content = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 16px;
  }

  button {
    height: 20px;
    border: none;
    background-color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;

    svg {
      width: 20px;
      height: 20px;
      color: black;
    }
  }
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin: 0px 16px;
  }
`;

export class UserList extends React.Component {
  state = {
    userList: [],
    details: false,
    userDetails: {},
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getUserById = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "otavio-augusto-maryam",
        },
      });
      this.setState({ userDetails: res.data });
    } catch (err) {
      console.log(err.response);
    }
  };

  getAllUsers = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: "otavio-augusto-maryam",
        },
      });
      this.setState({ userList: res.data });
    } catch (err) {
      alert(err.response);
    }
  };

  deleteUser = async (id) => {
    const confirmationDelete = window.confirm(
      "Tem certeza de que deseja deletar?"
    );

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    if (confirmationDelete === true) {
      try {
        const res = await axios.delete(url, {
          headers: {
            Authorization: "otavio-augusto-maryam",
          },
        });

        this.getAllUsers(res);
      } catch (err) {
        alert(err.response);
      }
    } else {
      this.getAllUsers();
    }
  };

  handleChangeDetail = (id) => {
    this.setState({ details: !this.state.details });
    this.getUserById(id);
  };

  render() {
    const userListComponents = this.state.userList.map((user) => {
      return (
        <Content key={user.id}>
          <button onClick={() => this.handleChangeDetail(user.id)}>
            {user.name}
          </button>
          <button onClick={() => this.deleteUser(user.id)}>
            <FiX />
          </button>
          <hr />
        </Content>
      );
    });

    const userDetailsComponents = (
      <Content key={this.state.userDetails.id}>
        <button onClick={() => this.handleChangeDetail()}>
          <FiArrowLeft />
        </button>
        <UserData>
          <p>
            Nome: <b>{this.state.userDetails.name}</b>
          </p>
          <p>
            E-mail: <b>{this.state.userDetails.email}</b>
          </p>
        </UserData>
        <button>
          <FiEdit2 />
        </button>
        <button onClick={() => this.deleteUser(this.state.userDetails.id)}>
          <FiX />
        </button>
      </Content>
    );

    return (
      <Container>
        <Header>
          <button onClick={this.props.changeStep}>
            <FiArrowLeft />
          </button>
          <h1>
            {this.state.details === false
              ? "Usuários cadastrados"
              : "Detalhes do usuário"}
          </h1>
        </Header>
        {this.state.details === false
          ? userListComponents
          : userDetailsComponents}
      </Container>
    );
  }
}
