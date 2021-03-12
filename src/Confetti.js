import React from "react";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default () => {
  // const { width, height } = useWindowSize()
  const size = { width: "100vw", height: "100vh" };
  return <Confetti style={size} />;
};
