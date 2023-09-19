import React, { useState, useEffect, useRef } from "react";
import "./Search.css";
import { BsSearchHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const [input, setInput] = useState("");

  const submitSearch = (e) => {
    if (input.trim() === "") {
      return;
    } else {
      e.preventDefault();
      navigate("/search/" + input);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="Hero">
      <div className="hero-sec">
        <div className="h-title">
          <h1>Recipes.COM FREE RECIPES</h1>
          <h3>
            Welcome to Recipes.com, your ultimate culinary inspiration hub!
            We're delighted to share a diverse range of delicious food recipes
            with you, absolutely free. Start your culinary journey with us now
            and discover easy, mouthwatering recipes that are sure to tantalize
            your taste buds. Try them out and savor the deliciousness in every
            dish you create!
          </h3>
        </div>
      </div>

      <div className="search-wrapper">
        <div className="search-container">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              className="search-field"
              type="text"
              value={input}
              placeholder="Search Food Recipes"
            />
            <button className="btn-p" onClick={submitSearch}>
              search
              <BsSearchHeart className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
