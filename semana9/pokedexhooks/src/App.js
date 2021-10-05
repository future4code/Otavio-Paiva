import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getPokeName = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokeName();
  }, [pokeName]);

  const changePokeName = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <div>
      <select onChange={changePokeName}>
        <option value={""}></option>
        {pokeList.map((pokeName) => {
          return (
            <option key={pokeName.name} value={pokeName.name}>
              {pokeName.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
