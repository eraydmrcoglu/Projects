import { createSlice } from "@reduxjs/toolkit";
import randomWords from "random-words";

export const wordSlice = createSlice({
  name: "typing",
  initialState: {
    words: [],
    countdown: 60,
    userInput: "",
    activeWord: "",
    turn: 0,
    success: 0,
    failed: 0,
    status: "firstMounted",
    playedTimes: 0,
    failedWords: [],
    successfulWords: [],
  },
  reducers: {
    setWords: (state, action) => {
      state.words = randomWords({ exactly: 200 });
      state.activeWord = state.words[0];
    },
    setCountdown: (state, action) => {
      state.countdown = state.countdown - 1;
      if (state.countdown <= 0) {
        state.status = "finished";
      }
    },
    setStart: (state, action) => {
      state.playedTimes = state.playedTimes + 1;
      if (state.playedTimes >= 2) {
        state.words = randomWords(200);
        state.activeWord = state.words[0];
      }
      state.countdown = 60;
      state.turn = 0;
      state.success = 0;
      state.failed = 0;
      state.failedWords = [];
      state.successfulWords = [];
      state.status = "running";
    },
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    compareWords: (state, action) => {
      if (state.userInput === state.activeWord) {
        state.success = state.success + 1;
        state.successfulWords = [...state.successfulWords, state.activeWord];
      } else {
        state.failed = state.failed + 1;
        state.failedWords = [...state.failedWords, state.activeWord];
      }
      state.turn = state.turn + 1;
      state.activeWord = state.words[state.turn];
    },
  },
});

export default wordSlice.reducer;
export const { setWords, setCountdown, setUserInput, compareWords, setStart } =
  wordSlice.actions;
