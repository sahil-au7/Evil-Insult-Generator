import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Insult from "./components/Insult";
import Header from "./components/Header";
function App() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [generate, setGenerate] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      await axios(
        `https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json`,
        { headers }
      ).then((response) => {
        setResult(response.data);
        setIsLoading(false);
      });
      // console.log(generate);
    };
    fetchItems();
  }, [generate]);

  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Insult
          insult={result.insult}
          generate={generate}
          setGenerate={(q) => setGenerate(q)}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
