import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Patners from "../Patners/Patners";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <Services></Services>
      <Patners></Patners>
    </div>
  );
};

export default Home;
