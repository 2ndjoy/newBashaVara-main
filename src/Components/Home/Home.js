import React from "react";
import FilterBox from "../FilterBox/FilterBox";
import AddsOnHome from "./AddsOnHome";
import Cards from "../Services/Cards";
import HomeBanner from "./HomeBanner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <FilterBox></FilterBox>
      <AddsOnHome></AddsOnHome>
      <div className="lg:flex grid mx-8 px-5 gap-2">
        <Services></Services>
      </div>
      <HomeBanner></HomeBanner>
      <Contact></Contact>
    </div>
  );
};

export default Home;
