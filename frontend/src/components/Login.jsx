import { useState } from "react";
import Register from "./Register";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; //Taken from react dom useNaviagte

//Login Values
function Login({ setShowLogin, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();//navigate to that specfic functions

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
      },
    });

    //Checks if the user and is correct to login then redirect to dashboard which measn setislogin is true
    if (data.ok) {
      setIsLoggedIn(true);

      navigate("/dashboard")
    }

    
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

      {/* <p onClick={()=>setShowLogin(false)}>Dont have account??</p> */}
      <Link to="/register">Don't have an account</Link>
    </>
  );
}
export default Login;
