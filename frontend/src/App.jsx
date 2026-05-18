import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";

import { Routes, Route } from "react-router-dom";

function App() {
  const [showLogin, setShowLogin] = useState(true); //for showing login and register page
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For showing dashboard for login page

  return (
    <>
      {/* {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <Register setShowLogin={setShowLogin} />
      )} */}
      {/* {
        isLoggedIn ?(
          <DashBoard/>
        ) :(
          <Login/>
        )
      } */}
      {/* {isLoggedIn ? (
        <DashBoard />
      ) : showLogin ? (
        <Login setShowLogin={setIsLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Register setShowLogin={setIsLoggedIn} />
      )} */}
      //Routeing
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
