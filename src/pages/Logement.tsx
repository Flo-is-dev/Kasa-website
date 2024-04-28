import React, { useEffect, useState } from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import Information from "../components/Information";
import Footer from "../components/Footer";
import {DataAPI} from "../model";
import Error from "./Error";


const Logement = () => {
  let data :DataAPI[]= require("../data/data.json");

  //   PARAM = id de la page voulue
  const { id }:Readonly<Params<string>>  = useParams();
  const navigate = useNavigate()
    
  const [dataLogement, setdataLogement] = useState<DataAPI | null>(null);

  useEffect(() => {
    const selectedLogement = data.find(logement => logement.id === id);
    if (!selectedLogement) {
      // If logement data is not found, navigate to the custom 404 page
      navigate("/error",{ replace: true });
    } else {
        setdataLogement(selectedLogement);
    }
  }, [id, navigate,data]);

  if (!dataLogement) {
    return <Error />;
  }

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
