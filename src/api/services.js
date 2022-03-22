import axios from "axios";

export const pokeDetail = async (pokename) => {
  try {
    const pokeData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokename}`
    );
    return pokeData.data;
  } catch (error) {
    return error;
  }
};

export const pokeList = async () => {
  try {
    const pokeData = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=35"
    );
    return pokeData.data.results;
  } catch (error) {
    return error;
  }
};
