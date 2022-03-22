import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    padding: "9.2rem 10rem",
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "baseline",
    alignContent: "space-around",
    gap: "100px 100px",
  },
});

const PokemonContainer = ({ pokemonList }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = (pokename) => {
    navigate("/Pokemonpage", { state: { pokename } });
  };

  return (
    <div className={classes.container}>
      {pokemonList &&
        pokemonList.map((pokemon, idx) => (
          <div key={idx}>
            <Button
              variant='outlined'
              size='large'
              onClick={() => handleClick(pokemon.name)}
            >
              {pokemon.name}
            </Button>
          </div>
        ))}
    </div>
  );
};

export default PokemonContainer;
