import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const isMobile = window.innerWidth <= 560;

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [isMobile]);

  const m = String(Math.floor(time / 60000)).padStart(2, "0");
  const s = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
  const seconds = (time % 60000) / 1000;
  const sweepDeg = (seconds / 60) * 360;

  return (
    <div className="sw-shell">
      <div className="sw-crown">
        <div className="sw-crown-stem" />
        <div className="sw-crown-button" />
      </div>

      <div className="sw-pusher sw-pusher--left" />
      <div className="sw-pusher sw-pusher--right" />

      <div className="sw-case sw-case--running">
        <div className="sw-bezel">
          <div className="sw-ticks">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className={`sw-tick ${i % 5 === 0 ? "sw-tick--major" : "sw-tick--minor"}`}
                style={{ transform: `rotate(${i * 6}deg)` }}
              />
            ))}
          </div>

          {[0, 10, 20, 30, 40, 50].map((n) => {
            const angle = (n / 60) * 360 - 90;
            const rad = (angle * Math.PI) / 180;
            const r = 108;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <span
                key={n}
                className="sw-dial-number"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {n === 0 ? "60" : n}
              </span>
            );
          })}

          <div className="sw-dial">
            <svg className="sw-svg" viewBox="0 0 200 200">
              <circle
                cx="100" cy="100" r="72"
                fill="none"
                stroke="#ffe100"
                strokeWidth="3"
                strokeDasharray={`${(sweepDeg / 360) * 452} 452`}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                opacity="0.5"
              />
              <circle cx="100" cy="100" r="5" fill="#ffe100" />
              <line
                x1="100" y1="100"
                x2="100" y2="34"
                stroke="#ffe100"
                strokeWidth="2"
                strokeLinecap="round"
                transform={`rotate(${sweepDeg} 100 100)`}
              />
              <line
                x1="100" y1="100"
                x2="100" y2="118"
                stroke="#ffe100"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${sweepDeg} 100 100)`}
              />
            </svg>

            <div className="sw-readout">
              <div className="sw-readout-top">
                <span className="sw-digit-group">
                  <span className="sw-digit">{m}</span>
                  <span className="sw-digit-label">min</span>
                </span>
                <span className="sw-readout-sep">:</span>
                <span className="sw-digit-group">
                  <span className="sw-digit">{s}</span>
                  <span className="sw-digit-label">sec</span>
                </span>
              </div>
              <div className="sw-readout-ms">
                <span className="sw-ms">.{ms}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="sw-lug sw-lug--top" />
      <div className="sw-lug sw-lug--bottom" />
    </div>
  );
}

export default Stopwatch;
