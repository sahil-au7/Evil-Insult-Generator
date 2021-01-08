import './App.css';
import React,{useEffect,useState} from "react";
import axios from "axios";
import Insult from './components/insult';
import Header from "./components/header"
function App() {

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [generate,setGenerate] = useState(1)

   useEffect(() => {
  const fetchItems = async () => {
      const headers = {
      "Content-Type": "application/json",
      };
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json`, { headers });
    
    setResult(response.data);
    setGenerate("")
    setIsLoading(false);
    }
      fetchItems();
  },[generate])

  return (
    <div className="app">
        <Header />
      <div className="app__body">
        <Insult insult={result.insult} setGenerate={q=>setGenerate(q)} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
