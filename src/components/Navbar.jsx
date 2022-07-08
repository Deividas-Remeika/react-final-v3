import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ token }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: "5px", backgroundColor: "#868e9686", width: "60%", margin: "0 auto", padding: "16px 16px", marginBottom: "32px" }}>
      {token ? (
        <>
          <Link to="/home" className="navButton">Pagrindinis</Link>
          <Link to="/add" className="navButton">Pridėti naują įrašą</Link>
        </>
      ) : (
        <>
          <Link to="/" className="navButton">Prisijungti</Link>
          <Link to="/register" className="navButton">Registruotis</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
