import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";

const Apropos = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="collapseBlockContainer">
        <Collapse label="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse label="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement disciminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse label="Service ">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement disciminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse label="Sécurité ">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            séxurité établis par nos services. en laissant ue note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
      <Footer />
    </div>
  );
};

export default Apropos;
