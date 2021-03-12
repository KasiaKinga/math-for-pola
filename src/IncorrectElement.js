import React from "react";
import { useSpring, animated } from "react-spring";
import "./IncorrectElement.css";

function IncorrectElement() {
  const props = useSpring({
    from: { marginTop: -750 },
    to: { marginTop: -500 },
  });

  return (
    <div>
      <animated.div style={props}>
        <h1 className="IncorrectBar">
          Jesteś blisko. <br />
          Spróbuj policzyć jeszcze raz
        </h1>
      </animated.div>
    </div>
  );
}

export default IncorrectElement;
