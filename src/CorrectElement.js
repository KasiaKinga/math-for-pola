import React from "react";
import { useSpring, animated } from "react-spring";
import "./CorrectElement.css";

function CorrectElement() {
  const props = useSpring({
    from: { marginTop: -750 },
    to: { marginTop: -500 },
  });

  return (
    <div>
      <animated.div style={props}>
        <h1 className="CorrectBar">
          Brawo! <br />
          Grasz dalej?
        </h1>
      </animated.div>
    </div>
  );
}

export default CorrectElement;
