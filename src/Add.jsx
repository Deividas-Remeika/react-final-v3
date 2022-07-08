import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

const Add = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const submitForm = () => {
    setLoading(true);
    axios({
      method: "post",
      url: "https://autumn-delicate-wilderness.glitch.me/v1/content/skills",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: title,
        description: description,
      },
    })
      .then(function (response) {
        console.log(response);

        alert("Successfuly added");
      })
      .catch(function (error) {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <>
      {token ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "15px", backgroundColor: '#868e9686', width: '60%', margin: "0 auto" }}>
          <h2>Pridėti naują įrašą</h2>
          <input type="text" placeholder="įrašo pavadinimas" onChange={(e) => setTitle(e.target.value)} />
          <textarea className="textarea" name="" id="" placeholder="įrašo tekstas" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
          <button className="submitButton" type="button" onClick={() => submitForm()}>
            Siųsti įrašą
          </button>
        </div>
      ) : (
        <p>Jūs neturite reikalingų privilegijų šio puslapio peržiūrėjimui</p>
      )}
    </>
  );
};

export default Add;
