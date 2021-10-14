import { useHistory } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToListPage = () => {
    history.push("/trips/list");
  };

  return (
    <Container>
      <a href="/">Labe-X</a>
      <nav>
        <button onClick={goToListPage}>Viagens</button>
        <button onClick={goToLoginPage}>Admin</button>
      </nav>
    </Container>
  );
}
