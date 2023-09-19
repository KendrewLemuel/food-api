import React, { useEffect, useState } from "react";
import "./Vegan.css";
import { veganList } from "../Api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";

const Vegan = () => {
  const [veganResep, setVegan] = useState([]);

  useEffect(() => {
    veganList().then((result) => {
      setVegan(result);
    });
  }, []);

  const ResepVegan = () => {
    return veganResep.map((vegan) => {
      return (
        <SplideSlide key={vegan.id}>
          <div className="v-card ">
            <Link to={"/recipes/" + vegan.id}>
              <img className="v-img " src={vegan.image} alt="" />
              <span className="v-title gradient">{vegan.title}</span>
            </Link>
          </div>
        </SplideSlide>
      );
    });
  };
  return (
    <div className="v-wrapper">
      <img
        className="veganwp"
        src="https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="v-head">
        <h1 className="v-judul">Popular Vegan Food Recipes</h1>
        <button className="btn-p">see all</button>
      </div>

      <Splide
        options={{
          perPage: 4,
          arrows: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        <ResepVegan />
      </Splide>
    </div>
  );
};

export default Vegan;
