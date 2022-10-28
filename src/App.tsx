import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import { formatLogementForHome } from "./formatter/Logement";
import logementJson from "./data/logements.json";
import type { logement, logementHomeFormatted } from "./formatter/Logement";

function App() {
  const [logements, setLogements] = useState([] as logementHomeFormatted[]);

  useEffect(() => {
    async function getLogements() {
      const logements = await Promise.all(
        logementJson.map(async (logement: logement) =>
          formatLogementForHome(logement)
        )
      );
      console.log(logements);
      setLogements(logements);
    }
    getLogements();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {logements.map((logement, index) => {
          return <p> {logement.title}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
