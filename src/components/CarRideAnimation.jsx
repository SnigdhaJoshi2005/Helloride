import { useEffect, useState } from "react";
import ServiceIcon from "./ServiceIcon";

const stages = [
    { icon: "bolt", number: "01", label: "Faster Travel", sub: "We fine the best routes to get you here quicker." },
    { icon: "money", number: "02", label: "Affordable Rides", sub: "Enjoy budget-friendly rides starting from NRP 150." },
    { icon: "shield", number: "03", label: "Safe & Verified", sub: "All drivers are background checked for your safety." },
];

const stepDuration = 1500;

function CarRideAnimation() {
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
                    <strong style={{ fontSize: "40px" }}>Car ride</strong>
                    <p>Experience the convenience of car rides with our premium service.</p>
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
                                            <span className="pj-icon">
                                                <span className="pj-step-number">{stage.number}</span>
                                                <ServiceIcon name={stage.icon} />
                                            </span>
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

                <div className="ride-mobile-summary" aria-hidden="true">
                    <div className="ride-mobile-map">
                        <span>You</span>
                        <span>Destination</span>
                    </div>
                    <dl>
                        <div><dt>ETA</dt><dd>6 min</dd></div>
                        <div><dt>Est. Fare</dt><dd>Rs 150</dd></div>
                        <div><dt>Rider Rating</dt><dd>4.8 *</dd></div>
                    </dl>
                </div>
                <button className="ride-mobile-book" type="button">Book Your Ride</button>
            </div>
        </div>
    );
}

export default CarRideAnimation;
