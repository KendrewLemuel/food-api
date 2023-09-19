import axios from "axios";

export const resepList = async () => {
  const resep = await axios.get(
    `${process.env.REACT_APP_BASE}/recipes/random/?page=1&apiKey=${process.env.REACT_APP_API}&number=10`
  );

  return resep.data.recipes;
};

export const veganList = async () => {
  const resep = await axios.get(
    `${process.env.REACT_APP_BASE}/recipes/random/?page=1&apiKey=${process.env.REACT_APP_API}&number=10&tags=vegetarian`
  );

  return resep.data.recipes;
};
export const getCuisine = async (name) => {
  const data = await fetch(
    `${process.env.REACT_APP_BASE}/recipes/complexSearch/?page=1&apiKey=${process.env.REACT_APP_API}&cuisine=${name}&number=12`
  );
  const resep = await data.json();
  return resep.results;
};
