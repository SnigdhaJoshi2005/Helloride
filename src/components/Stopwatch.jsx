import { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = () => {
    const m = Math.floor(time / 60000);
    const s = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);

    return `${String(m).padStart(2, "0")}:${String(s).padStart(
      2,
      "0"
    )}:${String(ms).padStart(2, "0")}`;
  };

  return (
    <div className={`stopwatch ${running ? "running" : ""}`}>
      <div className="stopwatch-ring"></div>

      <div className="stopwatch-body">
        <div className="stopwatch-screen">{formatTime()}</div>

        <div className="stopwatch-buttons">
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;