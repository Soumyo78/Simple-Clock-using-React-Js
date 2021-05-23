import "./style.css";
import { useEffect, useRef } from "react";

const ClockScreen = () => {
  const clockContainer = useRef();
  const dateContainer = useRef();

  let intervalId;
  const startClockAndDate = () => {
    const currentDate = new Date();
    intervalId = setInterval(() => {
      const today = new Date();
      clockContainer.current.innerHTML = today.toLocaleTimeString("en-US");
    }, 1000);
    dateContainer.current.innerHTML = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
  };

  useEffect(() => {
    startClockAndDate();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-screen-main-container">
      <h1 id="title">Digital Clock</h1>
      <div className="clock-date-container">
        <div ref={clockContainer} id="time-string" className="clock-container">
          Loading ...
        </div>
        <div ref={dateContainer} className="date-container">
          Loading ...
        </div>
      </div>
    </div>
  );
};

export default ClockScreen;
