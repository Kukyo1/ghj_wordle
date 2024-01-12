import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [word, setWord] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:3001/words')
    .then(res=>res.json())
    .then(data=>{
      let ranWord = data[Math.floor(Math.random()*data.length)];
      setWord(ranWord.word);
    })
  }, [setWord])
  return (
    <div className="App">
      <h1 className="title">Wordle</h1>
      {word && <Wordle word={word}></Wordle>}
    </div>
  );
}

export default App;
