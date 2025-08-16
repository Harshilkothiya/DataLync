import React, { useEffect, useRef, useState } from "react";
import "./Home_4.css";

function Home_4() {
    const steps = [
        { num: "01", title: "Discovery", desc: "Understanding your needs and goals" },
        { num: "02", title: "Strategy", desc: "Developing the perfect solution approach" },
        { num: "03", title: "Development", desc: "Building with cutting-edge technology" },
        { num: "04", title: "Deployment", desc: "Launching and optimizing your solution" },
    ];

    const sectionRef = useRef(null);
    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTitleVisible(true);
                        [0, 1, 2, 3].forEach((idx) => {
                            setTimeout(() => {
                                setVisibleIndexes((prev) =>
                                    prev.includes(idx) ? prev : [...prev, idx]
                                );
                            }, idx * 200);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="process-section" ref={sectionRef}>
            <div className="process-inner">
                <h2 className={`process-title ${titleVisible ? "visible" : ""}`}>Our Process</h2>
                <div className="process-grid">
                    {steps.map((step, idx) => (
                        <div className={`process-item ${visibleIndexes.includes(idx) ? "visible" : ""}`} key={idx}>
                            <div className="step-circle">
                            <span>{step.num}</span>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home_4;
