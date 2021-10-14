import { Container, Content } from "./styles";
import { Header } from "../../components/Header";

import imagemHome from "../../assets/imagem1.jpg";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>
            Live your <br />
            <span>adventure</span>
          </h1>
          <p>
            Não espere até amanhã, descubra sua aventura agora e sinta a
            sensação de sair do seu planeta!
          </p>
        </div>

        <img src={imagemHome} alt="" />
      </Content>
    </Container>
  );
}
