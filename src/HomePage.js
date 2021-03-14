import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
      <h1>
        Cześć Pola! <br />
        Grasz w dodawanie?
      </h1>
      <div>
        <ul>
          <Link to="/2kostki">Dodawanie od 1-12</Link>
          <Link to="/3kostki">Dodawanie od 1-18</Link>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
