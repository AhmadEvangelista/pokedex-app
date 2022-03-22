import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { pokeList } from "../api/services";
import Header from "../components/Header";
import PokemonContainer from "../components/PokemonContainer";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    pokeList()
      .then((data) => {
        return setPokemonList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.container}>
      <Header />
      <PokemonContainer pokemonList={pokemonList} />
    </div>
  );
};

export default Homepage;
