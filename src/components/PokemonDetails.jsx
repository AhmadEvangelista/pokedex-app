import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "5rem 35rem",
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});

const PokemonDetails = ({ pokemonDetail }) => {
  const classes = useStyles();
  const { name, types, abilities, stats, sprites } = pokemonDetail;

  return (
    <div className={classes.container}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          {sprites && sprites.front_default ? (
            <img
              src={sprites.front_default}
              alt='front_default'
              width='300'
              height='300'
            />
          ) : null}
        </div>
        <div style={{ margin: "3rem 1rem 1rem 10rem" }}>
          <div>
            <h1>Name:</h1> {name}
          </div>
          <div>
            <h3>Type:</h3>
            {types &&
              types.map((type, index) => (
                <ul key={index}> {type.type.name} </ul>
              ))}
          </div>
          <div>
            <h3>Abilities:</h3>
            {abilities &&
              abilities.map((ability, index) => (
                <ul key={index}> {ability.ability.name} </ul>
              ))}
          </div>
        </div>
      </div>
      <div style={{ margin: "1rem 1rem 1rem 5rem" }}>
        <h3> Stats:</h3>
        {stats &&
          stats.map((stat, index) => (
            <div key={index}>
              <ul>
                {stat.stat.name.toUpperCase()}: {stat.base_stat}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
