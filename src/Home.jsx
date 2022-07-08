import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();

  //   const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    console.log(token);
    axios({
      method: "get",
      url: "https://autumn-delicate-wilderness.glitch.me/v1/content/skills",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setLoading(false);
  }, []);

  if (loading) {
    return <span>Kraunama...</span>;
  }

  return (
    <>
      {token ?
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "15px" }}>
          <h2>Pagrindinis puslapis</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "15px" }}>

            {items && items.length > 0 ? items.map((item, index) => {
              return <div style={{ backgroundColor: '#868e9686', width: '60%', margin: '0 auto', borderRadius: '8px' }} key={index}>
                <h2>{item.title}</h2>
                {item.description}
              </div>;
            })
              : 'nėra įrašų'
            }
          </div>
        </div>
        :
        <p>Jūs neturite reikalingų privilegijų šio puslapio peržiūrėjimui</p>

      }
    </>
  );
};

export default Home;
