import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const testimonials = [
        {
            quote:
                "Their AI solutions transformed our business operations. ROI increased by 300% within 6 months.",
            name: "Sarah Johnson",
            title: "CTO, TechCorp",
        },
        {
            quote:
                "Exceptional data science expertise. They delivered insights we never thought possible.",
            name: "Michael Chen",
            title: "Data Director, Analytics Pro",
        },
        {
            quote:
                "Professional web development team. Our new platform exceeded all expectations.",
            name: "Emily Rodriguez",
            title: "CEO, StartupX",
        },
    ];

    return (
        <section ref={sectionRef} className="testimonials-section">
            <div className="testimonials-inner">
                <h2 className="testimonials-title">Client Success Stories</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className={`testimonial-card ${visible ? "visible" : ""}`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="stars">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} />
                                ))}
                            </div>
                            <p className="quote">“{t.quote}”</p>
                            <div className="author">
                                <div className="name">{t.name}</div>
                                <div className="role">{t.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;


