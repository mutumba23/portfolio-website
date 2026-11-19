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
                        My career spans <b className="highlight">19+ years</b> in global IT operations, endpoint migrations, and process management. I am a structured problem-solver with deep institutional knowledge of the technical and procedural challenges within large-scale enterprises.
                    </p>
                    <p className="about-text">
                        Driven by a focus on efficiency, I <b className="highlight">taught myself full-stack development and workflow automation</b> (Python, PowerShell, Vue.js, Next.js, Electron, and n8n) to directly eliminate operational bottlenecks. My work includes <b className="highlight">developing and deploying internal automation tools</b> that streamlined critical admin tasks, resulting in documented <b className="highlight">savings of over 2,000 hours annually</b>.
                    </p>
                    <p className="about-text">
                        Today, I combine enterprise infrastructure execution—such as large-scale Windows 11/Intune rollouts and specialized Test Lab migrations—with <b className="highlight">data analysis, AI orchestration, and maintainable software</b>. I am seeking roles where I can bridge operational reality with modern automation and full-stack development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;