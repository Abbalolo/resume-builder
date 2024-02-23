import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedAuth = JSON.parse(localStorage.getItem("auth"));

    if (
      storedAuth &&
      userName === storedAuth.username &&
      password === storedAuth.password
    ) {
      // Login successful
      setError("");
      console.log("Login successful");
      navigate("/myresume");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="m-10 flex items-center justify-center">
      <div className="flex flex-col gap-3 p-10 bg-slate-100 md:w-[60vw] w-full h-full">
        <h1 className="text-center font-semibold text-[30px]">Welcome back</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent border focus-within:border-gray-500 outline-none p-2"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border focus-within:border-gray-500 outline-none p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="text-end hover:text-blue-500" to="/register">
            Register here
          </Link>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-black p-2 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
