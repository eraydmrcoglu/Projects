import { useSelector } from "react-redux";
import "./App.css";
import Result from "./components/Result";
import Timer from "./components/Timer";
import UserInput from "./components/UserInput";
import Words from "./components/Words";

function App() {
  const status = useSelector((state) => state.typing.status);
  return (
    <div className="container">
      <div className="word-section">
        <Words />
      </div>
      <div className="timer-section">
        <Timer />
      </div>
      <div className="input-section">
        <UserInput />
      </div>
      {status === "finished" && (
        <div className="result-section">
          {status === "finished" && <Result />}
        </div>
      )}
    </div>
  );
}

export default App;
