import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import "./SearchPage.css";

import "./Cuisine.css";

const SearchPage = () => {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  const SearchPage = async (name) => {
    const data = await fetch(
      `${process.env.REACT_APP_BASE}/recipes/complexSearch/?page=1&apiKey=${process.env.REACT_APP_API}&query=${name}&number=12`
    );
    const resep = await data.json();
    setSearchRecipes(resep.results);
    console.log({ data: resep });
  };

  useEffect(() => {
    SearchPage(params.search);
  }, [params.search]);

  const SearchResult = () => {
    return searchRecipes.map((recipes) => {
      return (
        <div className="search-wrapper">
          <div className="search-card">
            <img className="s-img" src={recipes.image} alt="" />
            <span className="s-title">{recipes.title}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Nav />
      <div className="menu-title">
        <h1>Your search result for " {params.search} "</h1>
      </div>

      <div className="search">
        <SearchResult />
      </div>
    </>
  );
};

export default SearchPage;
