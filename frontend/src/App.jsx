import { use, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [name,setName] = useState("")

  return (
    <>
    <h1>{name}</h1>
      <input type="text"
      value={name}
      
      placeholder="Enter your name"/>

      <button onChange={(e)=> setName(e.target.value)}>Increase</button>
    </>
  );
}

export default App;

