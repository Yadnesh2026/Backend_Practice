import { useState } from "react";
//Input Vaue Questions
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()

    console.log(email)
    console.log(password)
  }

  return <>
  <h1>{email}</h1>
  <form onSubmit={handleSubmit}>

    <input placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} value={email}/>
    <input placeholder="Enter Password" onChange={(e)=> setPassword(e.target.value)} value={password}/>

    <button type="submit">Submit</button>

  </form>
  </>;
}

export default App;
