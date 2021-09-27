import React from "react";
import styled from "styled-components";
import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background: #002939;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;

  h1 {
    color: #e4cfa9;
    text-transform: uppercase;
  }
`;

const ContentMain = styled.div`
  background: #e4cfa9;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const Board = styled.div`
  background: #f4e6c1;
  width: 800px;
  padding: 20px;
  border-radius: 10px;
`;

const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  input {
    width: 100%;
    margin-right: 40px;
    height: 28px;
    border-radius: 4px;
    border: none;
  }

  button {
    background-color: #002939;
    border: 1px solid #e4cfa9;
    color: #e4cfa9;
    font-weight: bold;
    cursor: pointer;
    width: 180px;
    border-radius: 4px;
  }
`;

const InputsFiltro = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  select {
    height: 28px;
    border-radius: 4px;
    width: 140px;
  }
`;

const TarefaList = styled.ul`
  padding: 0;
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tarefa = styled.li`
  text-align: left;
  color: ${({ completa }) => (completa ? "black" : "red")};

  h1 {
    font-size: 20px;
  }
`;

const BotaoRemove = styled.div``;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
    inputEditar: "",
  };

  componentDidUpdate() {
    const tarefa = this.state.tarefas;
    window.localStorage.setItem("tarefas", JSON.stringify(tarefa));
  }

  componentDidMount() {
    const tarefasString = window.localStorage.getItem("tarefas");

    if (tarefasString) {
      const tarefa = JSON.parse(tarefasString);

      this.setState({
        tarefas: tarefa,
      });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novasTarefas = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novaListaDeTarefas = [...this.state.tarefas, novasTarefas];

    this.setState({ tarefas: novaListaDeTarefas });

    window.localStorage.setItem("tarefas", JSON.stringify(novaListaDeTarefas));
    console.log(novaListaDeTarefas);
  };

  selectTarefa = (id) => {
    const novaListaDeTarefasPorId = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const atualizandoTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return atualizandoTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaListaDeTarefasPorId });
  };

  removeTarefa = (id) => {
    const novaListaDeTarefasRemovendoTarefa = this.state.tarefas.filter(
      (tarefa) => {
        return id !== tarefa.id;
      }
    );

    this.setState({ tarefas: novaListaDeTarefasRemovendoTarefa });
  };

  editarTarefa = (id) => {
    const editandoTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefaEditada = {
          ...tarefa,
          editar: !tarefa.editar,
        };
        return tarefaEditada;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: editandoTarefa });
  };

  onChangeEditar = (event) => {
    this.setState({ inputEditar: event.target.value });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <Container>
        <Header>
          <h1>Lista de tarefas</h1>
        </Header>
        <ContentMain>
          <Board>
            <InputsContainer>
              <input
                value={this.state.inputValue}
                onChange={this.onChangeInput}
                placeholder="Digite aqui a tarefa"
              />
              <button onClick={this.criaTarefa}>Adicionar</button>
            </InputsContainer>

            <InputsFiltro>
              <select value={this.state.filter} onChange={this.onChangeFilter}>
                <option value="">Filtro</option>
                <option value="pendentes">Pendentes</option>
                <option value="completas">Completas</option>
              </select>
            </InputsFiltro>

            <TarefaList>
              {listaFiltrada.map((tarefa) => {
                return (
                  <Content key={tarefa?.id}>
                    <Tarefa
                      onClick={() => this.selectTarefa(tarefa.id)}
                      completa={tarefa.completa}
                    >
                      <h1>{tarefa.texto}</h1>
                    </Tarefa>
                    <BotaoRemove onClick={() => this.removeTarefa(tarefa.id)}>
                      Remover
                    </BotaoRemove>
                    {/* <BotaoEditar onClick={() => this.editarTarefa(tarefa.id)}>
                      Editar
                    </BotaoEditar>
                    <input
                      value={this.state.inputEditar}
                      onChange={() => this.onChangeEditar(tarefa.texto)}
                    /> */}
                  </Content>
                );
              })}
            </TarefaList>
          </Board>
        </ContentMain>
      </Container>
    );
  }
}

export default App;
