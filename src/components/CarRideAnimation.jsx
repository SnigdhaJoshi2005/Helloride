import { useEffect, useState } from "react";
import RideMobileSummary from "./RideMobileSummary";
import ServiceIcon from "./ServiceIcon";

const stages = [
    {
        icon: "bolt",
        number: "01",
        label: "Faster Travel",
        sub: "We fine the best routes to get you here quicker.",
        mobileLabel: "Comfortable Seating",
        mobileSub: "Room for up to 4 passengers.",
    },
    {
        icon: "money",
        number: "02",
        label: "Affordable Rides",
        sub: "Enjoy budget-friendly rides starting from NRP 150.",
        mobileLabel: "Premium Service",
        mobileSub: "Professional drivers & clean cars.",
    },
    {
        icon: "shield",
        number: "03",
        label: "Safe & Verified",
        sub: "All drivers are background checked for your safety.",
        mobileLabel: "AC Available",
        mobileSub: "Stay cool in every weather.",
    },
];

const stepDuration = 1500;

function CarRideAnimation() {
    const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 700);
    const [activeStage, setActiveStage] = useState(() => isMobile ? stages.length : 0);
    const isFinished = activeStage === stages.length;
    const progress = Math.min(activeStage, stages.length - 1) / (stages.length - 1);

    useEffect(() => {
        if (isMobile || activeStage === stages.length) return undefined;

        const timer = window.setTimeout(() => {
            setActiveStage((current) => current + 1);
        }, stepDuration);

        return () => window.clearTimeout(timer);
    }, [activeStage, isMobile]);

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
                    <p style={{ fontSize: "40px", fontWeight: "30px" }}>Car Rides</p>
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
                                        <strong className="pj-label">
                                            <span className="desktop-ride-text">{stage.label}</span>
                                            <span className="mobile-ride-text">{stage.mobileLabel || stage.label}</span>
                                        </strong>
                                        <span className="pj-sub">
                                            <span className="desktop-ride-text">{stage.sub}</span>
                                            <span className="mobile-ride-text">{stage.mobileSub || stage.sub}</span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <RideMobileSummary />
                <button className="ride-mobile-book" type="button">Book Your Ride</button>
            </div>
        </div>
    );
}

export default CarRideAnimation;
