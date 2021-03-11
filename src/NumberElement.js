import React from "react";

const NumberElement = (props) => {
  const { number } = props;

  return (
    <div className="element">
     <p>{number}</p>
    </div>
  );
};


export default NumberElement