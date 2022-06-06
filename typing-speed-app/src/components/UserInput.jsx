import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCountdown,
  setUserInput,
  compareWords,
  setStart,
} from "../redux/wordSlice";

function UserInput() {
  const dispatch = useDispatch();
  const countdown = useSelector((state) => state.typing.countdown);
  const status = useSelector((state) => state.typing.status);
  const userInput = useSelector((state) => state.typing.userInput);
  const [inputIsDisabled, setInputIsDisabled] = useState();
  const [buttonIsDisabled, setButtonIsDisabled] = useState();

  useEffect(() => {
    status === "finished" || status === "firstMounted"
      ? setInputIsDisabled(true)
      : setInputIsDisabled(false);
    status === "running"
      ? setButtonIsDisabled(true)
      : setButtonIsDisabled(false);
  }, [status]);

  const start = () => {
    const interval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(interval);
      } else {
        dispatch(setCountdown());
      }
    }, 1000);
    if (countdown < 0) {
      clearInterval(interval);
    }
    dispatch(setStart());
  };

  const compareWordsHandle = (e) => {
    e.preventDefault();
    if (userInput != "") {
      dispatch(compareWords());
      dispatch(setUserInput(""));
    }
  };

  return (
    <div>
      <form onSubmit={(e) => compareWordsHandle(e)}>
        <input
          disabled={inputIsDisabled}
          value={userInput}
          onChange={(e) => dispatch(setUserInput(e.target.value))}
        />
      </form>
      <button disabled={buttonIsDisabled} onClick={start}>
        Başla
      </button>
    </div>
  );
}

export default UserInput;
