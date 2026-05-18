import { useState } from "react";

//Register Values
function Register({setShowLogin}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const data = await fetch("http://localhost:7111/api/register", {
      method: "POST",

      body: JSON.stringify({
        name,
        email,
        password,
      }),

      headers: {
        "Content-type": "application/json",
      },
    });

    const responseData = await data.json();
    console.log(responseData);

    if (data.ok) {
      console.log("Login successfull");
    } else {
      console.log("Error");
    }
  };

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleForm}>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>

    //For already has an account then true ,  LoginPage - True , RegisterPage - False
      <p onClick={()=>setShowLogin(true)}>Already have account??</p>

    </>
  );
}

export default Register;
