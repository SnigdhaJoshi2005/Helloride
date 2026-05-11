import { useEffect, useState } from "react";

const stages = [
    { icon: "01", label: "Same-Day Delivery", sub: "Express delivery within the city" },
    { icon: "02", label: "Secure Handling", sub: "Your parcels are in safe hands" },
    { icon: "03", label: "Door-to-Door", sub: "Pickup and delivery at your location" },
];

const stepDuration = 1500;

function ParcelAnimation() {
    const [activeStage, setActiveStage] = useState(0);
    const isFinished = activeStage === stages.length;
    const progress = Math.min(activeStage, stages.length - 1) / (stages.length - 1);

    useEffect(() => {
        if (activeStage === stages.length) return undefined;

        const timer = window.setTimeout(() => {
            setActiveStage((current) => current + 1);
        }, stepDuration);

        return () => window.clearTimeout(timer);
    }, [activeStage]);

    return (
        <div className="service-custom-visual bike-ride-animation">
            <div
                className="pj-shell"
                aria-label="Bike ride features"
                style={{
                    "--pj-progress": progress,
                    "--pj-step-count": stages.length,
                    "--pj-step-duration": `${stepDuration}ms`,
                }}
            >
                <div className="pj-topic">
                    <strong style={{ fontSize: "40px" }}>Parcel Delivery</strong>
                    <p>Send packages safely and quickly anywhere in Nepal with our reliable parcel delivery service.</p>
                </div>

                <div className="pj-track-area">
                    <span className="pj-progress-rail" aria-hidden="true" />
                    <span className="pj-progress-fill" aria-hidden="true" />

                    <div className="pj-track">
                        {stages.map((stage, i) => {
                            const isActive = i === activeStage && !isFinished;
                            const isComplete = i < activeStage;

                            return (
                                <div
                                    key={stage.label}
                                    className={`pj-stage ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}`}
                                    style={{ "--pj-delay": `${i * 0.2}s` }}
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
            </div>
        </div>
    );
}

export default ParcelAnimation;
