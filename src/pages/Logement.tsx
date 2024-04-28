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
    
// On déclare un état pour stocker les données du logement qu'on initialise sur "null"
  const [dataLogement, setDataLogement] = useState<DataAPI | null>(null);

  //  useEffect pour effectuer une action lorsque l'ID de l'URL ou la fonction de navigate
  useEffect(() => {
    // on vérifie si l'id de l'URL fait partie des ID de data
    const selectedLogement = data.find(logement => logement.id === id);
    if (!selectedLogement) {
       //Si l'ID ne se retrouve pas dans "data" alors on est redirigé vers la page error avec remplacement de l'historique avec "replace:true"
      navigate("/error",{ replace: true });
    } else {
        setDataLogement(selectedLogement);
    }
  }, [id, navigate, data]);

//   Si dataLogement est falsy alors on retourne le composant Error
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
