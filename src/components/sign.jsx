import React, { useState } from 'react';
import "./sign.css";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userrole, setUserrole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!email||!password||!phone||!userrole){
        setErrorMessage("fill all the column");
        return;
    }
    setIsLoading(true);
    const data = {
      email: email,
      password: password,
      phone:phone,
      userrole:userrole,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8080/register", data);
      if (response.status === 200) {
          setIsLoading(true);
          console.log("registered successfull");
          navigate("/Home", { state: { successMessage: "Login successful!" } });
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      console.log("failed");
      setErrorMessage("fill all the column");
    }
  };

  return (
  <>
  <div className='signup-background'></div>
  <header>Sign Up to The Gate of Knowledge</header>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        User Role:
        <input type="text" value={userrole} onChange={(e) => setUserrole(e.target.value)} />
      </label>
      <button type="submit">{isLoading ? "Loading..." : "sign up"}</button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
    </>
  );
}

export default Sign;
