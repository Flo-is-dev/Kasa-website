import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import {DataAPI} from "../model";



const Home = () => {
//   let data:DataAPI[]= require("../data/data.json");
//   console.log(data);

  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <Navigation />
      <main>
        <Header children={<h1>Chez vous, partout et ailleurs</h1>} />
        <div className="logementCardContainer">
          <ul>
            { data.map((logement:DataAPI) => {
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
