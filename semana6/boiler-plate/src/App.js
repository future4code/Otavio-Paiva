import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const Container = styled.div``;

const BotaoRemove = styled.div``;

const BotaoEditar = styled.div``;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

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
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Container key={tarefa?.id} completa={tarefa.completa}>
                <Tarefa onClick={() => this.selectTarefa(tarefa.id)}>
                  {tarefa.texto}
                </Tarefa>
                <BotaoRemove onClick={() => this.removeTarefa(tarefa.id)}>
                  Remover
                </BotaoRemove>
                <BotaoEditar onClick={() => this.editarTarefa(tarefa.id)}>
                  Editar
                </BotaoEditar>
                <input
                  value={this.state.inputEditar}
                  onChange={() => this.onChangeEditar(tarefa.texto)}
                />
              </Container>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
