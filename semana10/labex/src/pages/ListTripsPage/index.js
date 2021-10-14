import { Header } from "../../components/Header";
import { Container, Content, TripContainer, TripBoard } from "./styles";
import { useRequestData } from "../../hooks/useRequestData";

export default function ListTrips() {
  const [trips, isLoadingTrips, errorRequestTrips] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
  );

  return (
    <Container>
      <Header />
      <Content>
        <h1>Lista de viagens</h1>
        <button>Escolher uma viagem</button>
        <TripContainer>
          {isLoadingTrips && <p>Carregando requisição...</p>}
          {!isLoadingTrips && errorRequestTrips && (
            <p>{errorRequestTrips.message}</p>
          )}
          {!isLoadingTrips && trips && trips.length === 0 && (
            <p>Não há viagens cadastradas!</p>
          )}
          {trips &&
            trips.map((trip) => (
              <TripBoard key={trip.id}>
                <h1>{trip.name}</h1>
                <h1>{trip.description}</h1>
                <h1>{trip.planet}</h1>
                <h1>{trip.durationInDays}</h1>
                <h1>{trip.date}</h1>
              </TripBoard>
            ))}
        </TripContainer>
      </Content>
    </Container>
  );
}
