import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
// import img from "../public/robin.png";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <div>
        <h1>
          Cześć Pola! <br />
          Grasz w dodawanie?
        </h1>
      </div>

      {/* <div> */}
      <div>
        <Link to="/2kostki" className="Link">
          <div className="Back-for-img1">
            <img src={require("./bird.png").default} className="Image"></img>
          </div>
          <p>Liczby od 1-12</p>
        </Link>
      </div>

      <div>
        <Link to="/3kostki" className="Link">
          <div className="Back-for-img2">
            <img
              src={require("./squirrel.png").default}
              className="Image"
              style={{ color: "red" }}
            ></img>
          </div>
          <p>Liczby od 1-18</p>
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
