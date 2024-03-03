import React from "react";
import FilterBox from "../FilterBox/FilterBox";
import AddsOnHome from "./AddsOnHome";
import Cards from "../Services/Cards";
import HomeBanner from "./HomeBanner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import HomeServices from "../Services/HomeServices";

const Home = () => {
  return (
    <div>
      <FilterBox></FilterBox>
      <AddsOnHome></AddsOnHome>
      <div className="lg:flex grid gap-24 mx-24 mt-16">
        <HomeServices></HomeServices>
      </div>
      <HomeBanner></HomeBanner>
      <Contact></Contact>
    </div>
  );
};

export default Home;
