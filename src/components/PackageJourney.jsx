import { useEffect, useState } from "react";

const stages = [
  { icon: "01", label: "Order Placed", sub: "We've received your request" },
  { icon: "02", label: "Picked Up", sub: "Parcel collected from sender" },
  { icon: "03", label: "In Transit", sub: "On the way to destination" },
  { icon: "04", label: "Out for Delivery", sub: "Almost there!" },
  { icon: "05", label: "Delivered", sub: "Package received successfully" },
];

const stepDuration = 1500;

function PackageJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const isFinished = activeStage === stages.length - 1;
  const progress = activeStage / (stages.length - 1);

  useEffect(() => {
    if (activeStage === stages.length - 1) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setActiveStage((current) => current + 1);
    }, stepDuration);

    return () => window.clearTimeout(timer);
  }, [activeStage]);

  return (
    <div className="service-custom-visual">
      <div
        className="pj-shell"
        aria-label="Parcel delivery progress"
        style={{ "--pj-progress": progress, "--pj-step-duration": `${stepDuration}ms` }}
      >
        <div className="pj-topic">
          <strong>Live parcel tracker</strong>
        </div>

        <div className="pj-track-area">
          <span className="pj-progress-rail" aria-hidden="true" />
          <span className="pj-progress-fill" aria-hidden="true" />

          <div className="pj-track">
            {stages.map((stage, i) => {
              const isActive = i === activeStage && !isFinished;
              const isComplete = i < activeStage || (isFinished && i === activeStage);

              return (
                <div
                  key={stage.label}
                  className={`pj-stage ${isActive ? "is-active" : ""} ${
                    isComplete ? "is-complete" : ""
                  }`}
                  style={{ "--pj-delay": `${i * 0.55}s` }}
                  aria-current={i === activeStage ? "step" : undefined}
                >
                  <div className="pj-dot-row">
                    <div className="pj-icon-wrap">
                      <span className="pj-ring" />
                      <span className="pj-icon">{stage.icon}</span>
                    </div>
                  </div>

                  <div className="pj-text">
                    <strong className="pj-label">{stage.label}</strong>
                    <span className="pj-sub">{stage.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="pj-status">
          Follow your parcel from pickup to drop-off.
        </p>
      </div>
    </div>
  );
}

export default PackageJourney;
