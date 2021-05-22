import "./style.css";
import { useEffect } from 'react';

let intervalId;
const startClock = () => {
  intervalId = setInterval(() => {
    const today = new Date();
    document.getElementById("time-string").innerHTML =
      today.toLocaleTimeString("en-US");
  }, 1000);
};

const ClockScreen = () => {

  useEffect(() => {
    startClock();
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="clock-screen-main-container">
      <h1 id="title">Digital Clock</h1>
      <div id="time-string" className="clock-container"></div>
    </div>
  );
};

export default ClockScreen;
