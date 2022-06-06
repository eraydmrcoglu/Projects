import React from "react";
import { useSelector } from "react-redux";

function Timer() {
  const countdown = useSelector((state) => state.typing.countdown);
  return <h1>{countdown < 0 ? 0 : countdown}</h1>;
}

export default Timer;
