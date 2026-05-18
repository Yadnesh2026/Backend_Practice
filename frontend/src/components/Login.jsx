import { useState } from "react";
import Register from "./Register";



//Login Values
function Login({setShowLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetch("http://localhost:7111/api/login", {
      method: "POST",

      body: JSON.stringify({
        email,
        password,
      }),

      headers: {
        "Content-type": "application/json",
      }
    });


  };

  return (
    <>
    <h1>The Login Page </h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p onClick={()=>setShowLogin(false)}>Dont have account??</p>
      
    </>
  );
}
export default Login;
