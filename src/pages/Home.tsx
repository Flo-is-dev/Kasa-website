import React from "react";
import Navigation from "../components/Navigation";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import {DataAPI} from "../model";



const Home = () => {
  let data:DataAPI[]= require("../data/data.json");
  console.log(data);

  return (
    <div>
      <Navigation />
      <main>
        <Header children={<h1>Chez vous, partout et ailleurs</h1>} />
        <div className="logementCardContainer">
          <ul>
            {data.map((logement:DataAPI) => {
              return <Card key={logement.id} logement={logement} />;
            })}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
