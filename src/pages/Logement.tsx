import React from "react";
import { Params, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import Information from "../components/Information";
import Footer from "../components/Footer";
import {DataAPI} from "../model";


const Logement = () => {
  // DATA = objet gloable (20)
  //   !FETCH
  let data :DataAPI[]= require("../data/data.json");

  //   PARAM = id de la âge voulue
  const { id }:Readonly<Params<string>>  = useParams();
  console.log(id, "====PARAM");


  //   filteredData = les informations complètes de PARAM
  const filteredData: DataAPI = data.filter((obj ) => {
    return obj.id === id;
  })[0];

  console.log("===filteredData===", filteredData);

  return (
    <div>
      <Navigation />
      <Carousel filteredData={filteredData} />
      <Information filteredData={filteredData} />
      <Footer />
    </div>
  );
};

export default Logement;
