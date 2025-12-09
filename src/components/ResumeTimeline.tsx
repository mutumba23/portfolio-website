"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const ResumeTimeline = () => {
    const containerRef = useRef<HTMLElement>(null);

    const timelineData = [
        {
            year: "2024 – Present",
            title: "Technical Process Specialist",
            company: "Infosys",
            description: "Transitioned to Infosys, focusing on technical process optimization and specialized infrastructure support.",
            isGroup: false
        },
        {
            year: "2007 – 2024",
            company: "IKEA IT AB",
            isGroup: true,
            roles: [
                {
                    year: "2021 – 2024",
                    title: "Support Specialist",
                    company: "IKEA IT AB",
                    description: "Developed full-stack automation tools using Vue.js and Electron, saving over 2,000+ work hours. Contributed significantly to data analysis initiatives to drive team efficiency."
                },
                {
                    year: "2007 – 2021",
                    title: "Support Analyst",
                    company: "IKEA IT AB",
                    description: "Served as a Technical SME across specialized infrastructure. Selected for an International Training Assignment in the USA (2009) to train global teams."
                }
            ]
        },
        {
            year: "2006 – 2007",
            title: "Customer Support",
            company: "Transcom",
            description: "Provided tier-1 customer support, honing multitasking skills and a customer-centric problem-solving approach.",
            isGroup: false
        }
    ];

    useGSAP(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse'
            }
        });

        // Animate the vertical line
        tl.fromTo('.timeline-line',
            { scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, duration: 1.5, ease: "power2.inOut" }
        );

        // Animate nodes staggered
        tl.fromTo('.timeline-node',
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, stagger: 0.3, duration: 0.5, ease: "power2.out" },
            "-=1.0" // Start slightly before line finishes
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="resume-timeline" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative">
                <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Career Journey
                </h2>

                {/* Vertical Line */}
                <div className="timeline-line absolute left-4 md:left-1/2 top-24 bottom-10 w-0.5 bg-accent/30 md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {timelineData.map((item, index) => (
                        <div key={index} className="timeline-node relative flex flex-col md:flex-row gap-8 md:gap-0 group">
                            {/* Left Side (Date/Right Aligned on Desktop) */}
                            <div className={`pl-12 md:pl-12 md:w-1/2 md:px-12 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                                <span className="inline-block text-accent font-mono text-sm tracking-wider mb-2">
                                    {item.year}
                                </span>

                                {item.isGroup ? (
                                    <div className={`flex flex-col gap-8 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                        {/* Main Company Label */}
                                        <div className="text-xl font-bold text-foreground mb-4">{item.company}</div>

                                        {/* Nested Roles */}
                                        {item.roles?.map((role, roleIndex) => (
                                            <div key={roleIndex} className={`relative flex flex-col ${index % 2 === 0 ? 'md:items-end md:border-r-2 md:border-slate-800 md:pr-6 border-l-2 border-slate-800 pl-6 md:border-l-0 md:pl-0' : 'items-start border-l-2 border-slate-800 pl-6'} transition-colors hover:border-accent/50`}>
                                                <span className="text-xs text-slate-500 font-mono mb-1">{role.year}</span>
                                                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                                    {role.title}
                                                </h3>
                                                <div className="text-slate-400 text-sm font-medium mb-2">{role.company}</div>
                                                <p className="text-slate-500 text-sm leading-relaxed block">
                                                    {role.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h3>
                                        <div className="text-slate-400 font-medium mb-2">{item.company}</div>
                                        <p className="text-slate-500 text-sm leading-relaxed block">
                                            {item.description}
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-[9px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_0_4px_rgba(255,255,255,0.05)]"></div>

                            {/* Right Side (Empty Desktop / Hidden on Mobile now that content is in first col) */}
                            <div className={`hidden md:block md:w-1/2 md:px-12 ${index % 2 === 0 ? 'md:order-last' : 'md:text-right'}`}>
                                {/* Content handled in first column for better mobile stacking */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResumeTimeline;
