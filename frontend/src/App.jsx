import { useState } from "react";
//Input Vaue Questions
function App() {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()

  }

  return(
    <>
    <form onSubmit={handleSubmit}>

      <input placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

      <button type="submit">Submit</button>


    </form>
    </>
  )
}

export default App;
