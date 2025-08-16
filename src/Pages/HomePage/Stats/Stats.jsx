import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

function Stats() {
    const containerRef = useRef(null);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Stagger the appearance of each stat item
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

    const stats = [
        { value: "500+", label: "Projects Completed" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "50+", label: "AI Models Deployed" },
        { value: "24/7", label: "Support Available" },
    ];

    return (
        <section className="stats-section" ref={containerRef}>
            <div className="stats-grid">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`stat-item ${visibleIndexes.includes(idx) ? "visible" : ""}`}
                    >
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;


