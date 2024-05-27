import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  let [showLoginForm, setShowLoginForm] = useState(false);
  let [showSignupForm, setShowSignupForm] = useState(false);

  function handleButtonClick(identifier) {
    if (identifier === "login") {
      setShowLoginForm(true);
      setShowSignupForm(false);
    } else if (identifier === "signup") {
      setShowSignupForm(true);
      setShowLoginForm(false);
    }
  }

  return (
    <>
      <Header />
      <div className="center-buttons">
        <button className="button" onClick={() => handleButtonClick("login")}>
          Login
        </button>
        <button className="button" onClick={() => handleButtonClick("signup")}>
          SignUp
        </button>
      </div>
      <main>
        {showLoginForm && <Login />}
        {showSignupForm && <Signup />}
      </main>
    </>
  );
}

export default App;
