import React, { useEffect, useState } from "react";
import "./Random.css";
import { resepList } from "../Api";
import Nav from "../Navbar/Nav";
import Search from "../Searchbar/Search";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Random = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    resepList().then((result) => {
      setRandom(result);
    });
  }, []);

  const RandomRecipes = () => {
    return random.map((recipes) => {
      return (
        <div className="random">
          <div className="r-wrapper">
            <Link to={"/recipes/" + recipes.id}>
              <div className="r-card">
                <img src={recipes.image} alt="" className="r-img" />
                <span className="r-title">{recipes.title}</span>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Nav />
      <Search />
      <div className="menu-title">
        <h1>Random recomended Food </h1>
      </div>
      <div className="r-wrapper">
        <RandomRecipes />
      </div>
      <Footer />
    </div>
  );
};

export default Random;
