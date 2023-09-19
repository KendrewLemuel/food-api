import React, { useEffect, useState } from "react";
import "./Popular.css";
import { resepList } from "../Api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularResep, setPopular] = useState([]);

  useEffect(() => {
    resepList().then((result) => {
      setPopular(result);
    });
  }, []);

  const ResepPopular = () => {
    return popularResep.map((recipes) => {
      return (
        <SplideSlide key={recipes.id}>
          <div className="p-card ">
            <Link to={"/recipes/" + recipes.id}>
              <img className="p-img " src={recipes.image} alt="" />
              <span className="p-title gradient">{recipes.title}</span>
            </Link>
          </div>
        </SplideSlide>
      );
    });
  };

  return (
    <div className="p-wrapper">
      <div className="p-head">
        <h1 className="p-judul">Popular Food Recipes</h1>
        <button className="btn-p">see all</button>
      </div>

      <Splide
        options={{
          perPage: 3,
          arrows: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        <ResepPopular />
      </Splide>
    </div>
  );
};

export default Popular;
