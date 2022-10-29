import { useEffect, useState } from "react";
import "./App.css";
import { formatLogementForHome } from "./formatter/Logement";
import logementJson from "./data/logements.json";
import type { logement } from "./types/logement";
import type { logementHomeFormatted } from "./types/logementHomeFormatted";

function App() {
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
