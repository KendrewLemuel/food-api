import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = () => {
    setOpen(false);
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
    <div className="nav">
      <div className="n-wrapper">
        <div className="n-container">
          <a href="/">
            <div className="n-logo">
              <h1>Recipes.COM</h1>
              <hr style={{ color: "#1e293b" }} />
              <small>Free online recipes for all</small>
            </div>
          </a>

          <ul className="n-menu">
            <li>
              <NavLink to={"/"}>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <span onClick={handleOpen}>Categories</span>
              <AiFillCaretDown
                onClick={handleOpen}
                style={{ fontSize: "15px" }}
              />
              {open ? (
                <ul className="menu" ref={dropdownRef}>
                  <li className="menu-item">
                    <NavLink to={"/cuisine/korean"}>
                      <h5 onClick={handleMenu} className="name">
                        Korean Food
                      </h5>
                    </NavLink>
                  </li>

                  <li className="menu-item">
                    <NavLink to={"/cuisine/japanese"}>
                      <h5 onClick={handleMenu} className="name">
                        Japanese Food
                      </h5>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to={"/cuisine/italian"}>
                      <h5 onClick={handleMenu} className="name">
                        Italian Food
                      </h5>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <NavLink to={"/random"}>
                <span>Random selection</span>
              </NavLink>
            </li>
          </ul>
          <button className="n-button">Login/Signup</button>
        </div>
      </div>

      <div className="search-wrapper"></div>
    </div>
  );
};

export default Nav;
