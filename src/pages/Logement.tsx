import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import Information from "../components/Information";
import Footer from "../components/Footer";

const Logement = () => {
  // DATA = objet gloable (20)
  //   !FETCH
  let data = require("../data/data.json");

  //   PARAM = id de la âge voulue
  const { id } = useParams();
  console.log(id, "====PARAM");

  //   filteredData = les informations complètes de PARAM
  const filteredData = data.filter((obj:any) => {
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
