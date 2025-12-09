"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const About = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from('h2', {
            opacity: 0,
            y: 50,
            duration: 1
        });

        ScrollTrigger.create({
            trigger: container.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
            animation: gsap.from('.about-text', {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2,
                delay: 0.3
            })
        });
    }, { scope: container });

    return (
        <section ref={container} id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    About Me
                </h2>
                <div className="mx-auto max-w-3xl space-y-6 text-lg text-slate-400">
                    <p className="about-text">
                        My career spans <b className="highlight">18+ years</b> in global IT support and process management. I am a structured problem-solver with deep institutional knowledge of the technical and procedural challenges within large-scale enterprises.
                    </p>
                    <p className="about-text">
                        Driven by a focus on efficiency, I <b className="highlight">taught myself full-stack development</b> (Vue.js, Electron, Python) to directly address operational bottlenecks. My most significant work involves <b className="highlight">developing and deploying an internal automation tool</b> that streamlined critical admin tasks, resulting in documented <b className="highlight">savings of over 2,000+ hours annually</b> for my team.
                    </p>
                    <p className="about-text">
                        I thrive in collaborative, cross-functional environments. I prioritize delivering <b className="highlight">maintainable solutions</b> and leveraging <b className="highlight">data analysis</b> to ensure tangible business outcomes. I am now seeking roles that allow me to fully integrate my proven operational knowledge with my development and automation capabilities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
