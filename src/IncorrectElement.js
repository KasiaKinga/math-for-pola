import React from 'react';
import { useSpring, animated } from 'react-spring';
import './IncorrectElement.css';

function IncorrectElement() {
  const props = useSpring({
    from: { marginTop: '-20vh' },
    to: { marginTop: '1vh' },
  });

  return (
    <div style={{ background: 'lightskyblue' }}>
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
