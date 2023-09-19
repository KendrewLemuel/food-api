import React from "react";
import Popular from "../Components/Popular/Popular";
import Vegan from "../Components/Vegan/Vegan";
import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import Email from "../Components/Email/Email";
import Search from "../Components/Searchbar/Search";

const Home = () => {
  return (
    <div>
      <Nav />
      <Search />
      <Popular />
      <Vegan />
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
