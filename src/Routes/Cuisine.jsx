import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

import { getCuisine } from "../Components/Api";

import "./Cuisine.css";
import Footer from "../Components/Footer/Footer";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type).then((result) => {
      setCuisine(result);
    });
  }, [params.type]);

  const CuisineCategory = () => {
    return cuisine.map((recipes) => {
      return (
        <div className="cuisine-wrapper">
          <Link to={"/recipes/" + recipes.id}>
            <div className="cuisine-card">
              <img className="c-img" src={recipes.image} alt="" />
              <span className="c-title">{recipes.title}</span>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <>
      <Nav />
      <div className="menu-title">
        <h1>Top {params.type} recomended Food </h1>
      </div>

      <div className="cuisine">
        <CuisineCategory />
      </div>
      <Footer />
    </>
  );
};

export default Cuisine;
