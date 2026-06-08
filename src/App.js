import React , {useState} from "react";
import Search from "./components/Search";
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "",
    result: [],
    selected:{}
  });

  const apiURL = process.env.REACT_APP_API_URL

  const search = (e) =>{
    if (e.key === "Enter"){
      const url = `${apiURL}&s=${state.s}`;
      console.log("URL:", url);

      axios.get(url).then((response)=>{
        console.log(response.data);
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState =>{
      return {...prevState, s:s}
    });

    console.log(state.s)
  }
  return (
    <div className="App">
      <header>
        <h1>Anime Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search = {search}/>
      </main>
    </div>
  );
}

export default App;
