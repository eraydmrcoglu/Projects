import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const correctWords = useSelector((state) => state.typing.successfulWords);
  const failedWords = useSelector((state) => state.typing.failedWords);
  return (
    <div>
      <div>
        <h1>Sonuç</h1>
      </div>
      <div>
        <p>{correctWords.length + failedWords.length} dakika başına kelimeler</p>
        <p>Doğru kelimeler: {correctWords.length}</p>
        <p>Hatalı kelimeler: {failedWords.length}</p>
      </div>
    </div>
  );
}

export default Result;
