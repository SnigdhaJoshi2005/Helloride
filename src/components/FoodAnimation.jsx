import { useEffect, useState } from "react";

const stages = [
    { icon: "01", label: "Quick Delivery", sub: "Get your food in 30 minutes or less" },
    { icon: "02", label: "Hot & Fresh", sub: "Temperature-controlled delivery" },
    { icon: "03", label: "Real-time Tracking", sub: "Track your order every step" },
];

const stepDuration = 1500;

function FoodAnimation() {
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
                    <strong style={{ fontSize: "40px" }}>Food</strong>
                    <p>Enjoy delicious meals delivered to your doorstep.</p>
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

export default FoodAnimation;
