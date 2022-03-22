import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerContainer: {
    backgroundColor: "dimgrey",
    // height: "8%",
  },
  headerTitle: {
    color: "white",
    margin: "0 0 0 2rem",
    lineHeight: "4rem",
    fontSize: "3rem",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.headerTitle}>Pokedex</h1>
    </div>
  );
};

export default Header;
