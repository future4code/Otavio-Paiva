import React from "react";
import { FiArrowLeft, FiX } from "react-icons/fi";
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

    svg {
      width: 20px;
      height: 20px;
      color: red;
    }
  }
`;

const headers = {
  headers: {
    Authorization: "otavio-augusto-maryam",
  },
};

export class UserList extends React.Component {
  state = {
    userList: [],
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ userList: res.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url, headers)
      .then((res) => {
        this.getAllUsers();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const userListComponents = this.state.userList.map((user) => {
      return (
        <Content key={user.id}>
          <h1>{user.name}</h1>
          <button onClick={() => this.deleteUser(user.id)}>
            <FiX />
          </button>
        </Content>
      );
    });

    return (
      <Container>
        <Header>
          <button onClick={this.props.changeStep}>
            <FiArrowLeft />
          </button>
          <h1>Usuários cadastrados:</h1>
        </Header>
        {userListComponents}
      </Container>
    );
  }
}
