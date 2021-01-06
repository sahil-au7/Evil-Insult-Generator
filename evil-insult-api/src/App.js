import './App.css';
import React,{useEffect,useState} from "react";
import axios from "axios";
function App() {

  const [result,setResult] = useState("")

   useEffect(() => {
  const fetchItems = async () => {
      const headers = {
      "Content-Type": "application/json",
      };
    const response = await axios(`https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json`, { headers });

      console.log(response.data,);
      setResult(response.data);
    }
      fetchItems();
  },[])

  return (
    <div className="App">
      <h1>Result:{result.insult}</h1>
    </div>
  );
}

export default App;
