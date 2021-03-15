import React from "react";
import { useSpring, animated } from "react-spring";
import "./CorrectElement.css";

function CorrectElement() {
  const props = useSpring({
    from: { marginTop: "-20vh" },
    to: { marginTop: "1vh" },
  });

  return (
    <div className="CorrectBar">
      <animated.div style={props}>
        <h1>
          Brawo! <br />
          To poprawna odpowiedź!
        </h1>
      </animated.div>
    </div>
  );
}

export default CorrectElement;
