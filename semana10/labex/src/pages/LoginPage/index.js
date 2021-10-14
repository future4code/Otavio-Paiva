import { useHistory } from "react-router-dom";

import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export default function Login() {
  const history = useHistory();

  const goBackToHome = () => {
    history.push("/");
  };

  const goToListPage = () => {
    history.push("/trips/list");
  };
  return (
    <Container>
      <Header />
      <Content>
        <form action="">
          <h1>Login</h1>
          <label htmlFor="email">E-mail</label>
          <input name="email" type="email" />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
          <div>
            <a href="/">
              <button type="button">Voltar</button>
            </a>
            <button>Entrar</button>
          </div>
        </form>
      </Content>
    </Container>
  );
}
