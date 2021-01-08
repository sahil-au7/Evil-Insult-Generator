import './App.css';
import React,{useEffect,useState} from "react";
import axios from "axios";
import Insult from './components/insult';
function App() {

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [generate,setGenerate] = useState("")

   useEffect(() => {
  const fetchItems = async () => {
      const headers = {
      "Content-Type": "application/json",
      };
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json`, { headers });

      console.log(response.data,);
    setResult(response.data);
    setIsLoading(false);
    }
      fetchItems();
  },[generate])

  return (
    <div className="app">
      <div className="app__body">
        <Insult insult={result.insult} setGenerate={setGenerate} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
