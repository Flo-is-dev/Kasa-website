import React from "react";
import Collapse from "../components/Collapse";
import StarScale from "./StarScale";
import Tag from "./Tag";

const Information = ({ filteredData }:any) => {
  return (
    <div className="informationContainer">
      <div className="informationTxtContainer">
        <div className="informationTxtLeft">
          <h1>{filteredData.title}</h1>
          <h3>{filteredData.location}</h3>
          <Tag tags={filteredData.tags} />
        </div>
        <div className="informationTxtRight">
          <div className="informationLocation">
            <p>{filteredData.host.name}</p>
            <img src={filteredData.host.picture} alt="" />
          </div>

          <StarScale rating={filteredData.rating} />
        </div>
      </div>
      <div className="collapseContainer">
        <Collapse label="Description">
          <p>{filteredData?.description || "Pas de description disponible"}</p>
        </Collapse>
        <Collapse label="Équipements">
          <ul>
            {filteredData?.equipments.map((equipment:any, index:any) => (
              <li key={index}>{equipment}</li>
            )) || "Pas d'informations sur les équipement disponible"}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Information;
