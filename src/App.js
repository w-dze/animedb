import React , {useState} from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected:{}
  });

  const apiURL = process.env.REACT_APP_API_URL
  
  const search = (e) =>{
    if (e.key === "Enter"){
      const url = `${apiURL}&s=${state.s}`;
      axios.get(url).then((response)=>{
        let results = response.data.Search;

        setState(prevState => {
          return {...prevState, results: results}
        })
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
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App;
