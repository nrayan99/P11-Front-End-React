import { useEffect, useState } from "react";
import "./Home.scss";
import { formatLogementForHome } from "../../formatter/Logement";
import logementJson from "../../data/logements.json";
import type { logement, logementHomeFormatted } from "../../types/logement";
import Thumb from "../../components/Thumb/Thumb";
import bannerImg from "../../assets/images/home-banner.png";

function Home() {
  const [logements, setLogements] = useState([] as logementHomeFormatted[]);

  useEffect(() => {
    async function apiCall(): Promise<logement[]> {
      return logementJson;
    }
    async function getLogements() {
      const logements = await apiCall();
      setLogements(
        logements.map((logement: logement) => formatLogementForHome(logement))
      );
    }
    getLogements();
  }, []);

  return (
    <div className="Home">
      <div className="Home-Banner-Container">
        <img src={bannerImg} alt="banner" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="logement-container">
        {logements.map((logement, index) => {
          return <Thumb cover={logement.cover} title={logement.title} />;
        })}
      </div>
    </div>
  );
}

export default Home;
