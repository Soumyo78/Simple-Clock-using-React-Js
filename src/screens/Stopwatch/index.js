import "./style.css";
import { useState, useRef } from "react";

const StopwatchScreen = () => {
  const [count, setCount] = useState(0);
  const [secCount, setSecCount] = useState(0);
  const [minCount, setMinCount] = useState(0);

  let countIntervalId = useRef();
  let secCountIntervalId = useRef();
  let minCountIntervalId = useRef();

  const startCount = () => {
    countIntervalId.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 99) {
          setCount(0);
        }
        return prevCount + 1;
      });
    }, 10);

    secCountIntervalId.current = setInterval(() => {
      setSecCount((prevSecCount) => {
        if (prevSecCount >= 59) {
          setSecCount(0);
        }
        return prevSecCount + 1;
      });
    }, 1000);

    minCountIntervalId.current = setInterval(() => {
      setMinCount((prevMinCount) => {
        return prevMinCount + 1;
      });
    }, 60000);
  };

  const pauseCount = () => {
    clearInterval(countIntervalId.current);
    clearInterval(secCountIntervalId.current);
    clearInterval(minCountIntervalId.current);
  };

  const resetCount = () => {
    clearInterval(countIntervalId.current);
    clearInterval(secCountIntervalId.current);
    clearInterval(minCountIntervalId.current);
    setCount(0);
    setSecCount(0);
    setMinCount(0);
  };

  const takeLap = () => {};

  return (
    <div className="stopwatch-main-container">
      <h1 id="title">Stopwatch</h1>
      <h2 id="countText">
        {`${minCount < 10 ? `0${minCount}` : minCount}:${
          secCount < 10 ? `0${secCount}` : secCount
        }:${count < 10 ? `0${count}` : count}`}
      </h2>
      <span className="stopwatch-btn-container">
        <input
          type="image"
          src="https://img.icons8.com/emoji/48/000000/play-button-emoji.png"
          onClick={startCount}
          alt="start-btn"
        />
        <input
          type="image"
          src="https://img.icons8.com/emoji/48/000000/pause-button-emoji.png"
          onClick={pauseCount}
          alt="pause-btn"
        />
        <input
          type="image"
          src="https://img.icons8.com/emoji/48/000000/stop-button-emoji.png"
          onClick={resetCount}
          alt="reset-btn"
        />
        <input
          type="image"
          src="https://img.icons8.com/emoji/48/000000/record-button-emoji.png"
          onClick={takeLap}
          alt="lap-btn"
        />
      </span>
    </div>
  );
};

export default StopwatchScreen;
