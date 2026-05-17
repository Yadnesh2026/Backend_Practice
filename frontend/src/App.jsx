import { use, useState } from "react";


//Input Vaue Questions
function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <h1>{name}</h1>
      <input
        placeholder="Enter the name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />

      <button onClick={() => setName(input)}>Submit</button>
    </>
  );
}

export default App;
