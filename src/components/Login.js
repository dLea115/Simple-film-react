import React, { useState } from "react";
import { loginUser } from "../services/fakeApi"; // Fakeapi import
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/Login.css";
var loggedIn = false; // when enter the login page start with unlogged

export function LoginGuard({ chidren }) {
  // checking the user logged ?
  if (loggedIn) {
    return <Navigate to="/movies" />;
  }
  return <Navigate to="/" />;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await loginUser(username, password);
    if (user) {
      navigate("/movies");
      loggedIn = true;
    } else {
      navigate("/");
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p>{errorMessage}</p>}{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
