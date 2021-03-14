import React from "react";
import Confetti from "react-confetti";

export default () => {
  const size = { width: "100vw", height: "100vh" };
  return <Confetti style={size} recycle={false} numberOfPieces={600} />;
};
