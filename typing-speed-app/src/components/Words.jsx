import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWords } from "../redux/wordSlice";

function Words() {
  const words = useSelector((state) => state.typing.words);
  const activeWord = useSelector((state) => state.typing.activeWord);
  const failedWords = useSelector((state) => state.typing.failedWords);
  const successfulWords = useSelector((state) => state.typing.successfulWords);
  const turn = useSelector((state) => state.typing.turn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWords());
  }, []);

  return (
    <div className="words-section">
      {words.map((item, i) => (
        <p
          key={i}
          className={`word ${
            activeWord == item && turn == i ? "background" : ""
          } ${failedWords.includes(item) && turn > i ? "failed" : ""} ${
            successfulWords.includes(item) && turn > i ? "successful" : ""
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default Words;
