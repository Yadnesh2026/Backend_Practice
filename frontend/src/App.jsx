import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App(){

  const[showLogin,setShowLogin] =useState(true)
  return(
    <>
    {
      showLogin ?
      <Login setShowLogin={setShowLogin}/>:
      <Register setShowLogin={setShowLogin}/>
    }


    </>
  )
}

export default App;