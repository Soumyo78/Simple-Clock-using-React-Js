import './App.css';
import Clock from './Clock';

// const titleArray = ["Digital Clock", "Stopwatch", "Timer"];
// let tempTitle = titleArray[0];
function App(props) {
  return (
    <div>
        <nav className="navbar">
        <ul className="u-list">
          <li id="clock-page"><a href="#clock">Clock</a></li>
          <li id="stopwatch-page"><a href="#stopwatch">Stopwatch</a></li>
          <li id="timer-page"><a href="#timer">Timer</a></li>
          <li id="about-page"><a href="#about">About</a></li>
        </ul>
      </nav>
      <h1 id="title">{props.tempTitle}</h1>
      <Clock/>
    </div>
  );
}

export default App;
