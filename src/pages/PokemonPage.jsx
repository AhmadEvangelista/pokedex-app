import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { pokeDetail } from "../api/services";
import Header from "../components/Header";
import { useLocation } from "react-router";
import PokemonDetails from "../components/PokemonDetails";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const PokemonPage = () => {
  const { state } = useLocation();
  const { pokename } = state;
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    pokeDetail(pokename)
      .then((data) => {
        return setPokemonDetail(data);
      })
      .catch((err) => console.log(err));
  }, [pokename]);

  return (
    <div className={classes.container}>
      <Header />
      <PokemonDetails pokemonDetail={pokemonDetail} />
    </div>
  );
};

export default PokemonPage;
