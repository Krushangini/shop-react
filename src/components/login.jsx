import { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./login.css";
import img from "./assets/back.jpg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8080/login", data);
      if (response.status === 200) {
          setIsLoading(true);
          console.log("login successfull");
          navigate("/Home", { state: { email } });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      console.log("failed");
      setErrorMessage("Incorrect email or password.");
    }
  };

  return (
    <div>
      <h1>Login to the future</h1>
      <img src={img} alt="login"></img>
      <form onSubmit={handleLogin}>
        <label htmlFor="fname" className="lab">
          User Name :
        </label>
        <input
          type="text"
          id="fname"
          className="id"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="lname" className="lab">
          Password :
        </label>
        <input
          type="text"
          id="lname"
          className="id"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit" className="sub">
          {isLoading ? "Loading..." : "Submit"}
        </button>
      {errorMessage && <div className="err">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
