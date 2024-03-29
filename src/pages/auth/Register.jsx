import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length <= 4) {
      setError("Passwords must be greater than 4 characters");
    } else if (password !== cpassword) {
      setError("Passwords do not match");
    } else {
      localStorage.setItem(
        "auth",
        JSON.stringify({ username: userName, password: password })
      );
      console.log({ username: userName, password: password });
      navigate("/");
    }
  };

  

  return (
    <div className="m-10 flex items-center justify-center">
      <div className="flex flex-col gap-3 p-10 bg-slate-100 md:w-[60vw] w-full h-full">
        <h1 className="text-center font-semibold text-[30px]">
          Build your own resume for free
        </h1>
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border focus-within:border-gray-500 outline-none p-2"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <Link className="text-end hover:text-blue-500" to="/">
            Login here
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

export default Register;
