import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  // here we set data in our global state variables

  const handleSubmit = (e) => {
    e.preventDefault(), setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
