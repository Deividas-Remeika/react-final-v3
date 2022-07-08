import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";


const Register = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onLogin = () => {
    setLoading(true)
    axios({
      method: "post",
      url: "https://autumn-delicate-wilderness.glitch.me/v1/auth/register",
      data: {
        email: email,
        password: password,
      },
    })
      .then(function (response) {
        console.log(response);

        alert('Sėkmingai prisiregistravote, dabar prisijunkite!')
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false)
  };

  if (loading) {
    return <span>Kraunama...</span>;
  }

  return (
    <div className="form">
      <h2>Registracijos forma</h2>
      <input type="email" placeholder="el.paštas" required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="slaptažodis" required onChange={(e) => setPassword(e.target.value)} />
      <button className="submitButton" onClick={() => onLogin()}>Registruotis</button>
    </div>
  );
};

export default Register;
