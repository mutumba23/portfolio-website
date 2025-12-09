"use client";

import { useState, useRef, useEffect } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { CATEGORY_COLOR_MAP } from "@/config/skillColors";

const Skills = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [filter, setFilter] = useState("All");
    const isFirstRender = useRef(true);

    const categories = [
        {
            title: 'Automation & Scripting',
            colorKey: 'Automation',
            skills: ['Python', 'PowerShell', 'AI Tools'],
            isProfessional: false,
        },
        {
            title: 'Frontend & App Dev',
            colorKey: 'Frontend',
            skills: ['JavaScript', 'HTML', 'CSS', 'VueJS', 'Electron', 'React (Personal Projects)', 'UX/UI Awareness', 'Design Fundamentals'],
            isProfessional: false,
        },
        {
            title: 'Backend & APIs',
            colorKey: 'Backend',
            skills: ['Node.js', 'Express', 'REST APIs', 'Colyseus', 'Python'],
            isProfessional: false,
        },
        {
            title: 'Data & Databases',
            colorKey: 'Data',
            skills: ['SQL', 'Spreadsheets', 'PostgreSQL', 'Firestore'],
            isProfessional: false,
        },
        {
            title: 'Cloud & Infrastructure',
            colorKey: 'Infrastructure',
            skills: ['Azure Fundamentals', 'Firebase (Auth)'],
            isProfessional: false,
        },
        {
            title: 'Technical Operations & Support',
            colorKey: 'Infrastructure',
            skills: ['AD & LDAP', 'VPN (Cisco)', 'SMTP/Email Services', 'Ticketing & Incident Mgmt', 'Global Software Rollouts'],
            isProfessional: false,
        },
        // Professional Skills
        {
            title: 'Operational Excellence & Process',
            colorKey: 'SoftSkills', // Neutral
            skills: ['Incident & Problem Management', 'ITIL Process Awareness', 'Continuous Improvement'],
            isProfessional: true,
        },
        {
            title: 'Teamwork & Collaboration',
            colorKey: 'SoftSkills', // Neutral
            skills: ['Cross-Functional Collaboration', 'Training & Knowledge Sharing'],
            isProfessional: true,
        },
        {
            title: 'Problem Solving & Analysis',
            colorKey: 'SoftSkills', // Neutral
            skills: ['Problem Solving', 'Root Cause Analysis', 'Analytical Thinking', 'Data-Driven Decision Making'],
            isProfessional: true,
        },
        {
            title: 'Service & Stakeholder Focus',
            colorKey: 'SoftSkills', // Neutral
            skills: ['Customer Focus', 'Stakeholder Management'],
            isProfessional: true,
        }
    ];

    const [visibleCategories, setVisibleCategories] = useState(categories);

    const handleFilterChange = (newFilter: string) => {
        if (newFilter === filter) return;

        const ctx = gsap.context(() => {
            gsap.to(".skill-card", {
                opacity: 0,
                y: 20,
                duration: 0.3,
                stagger: 0.05,
                onComplete: () => {
                    setFilter(newFilter);
                    const nextCategories = newFilter === "All"
                        ? categories
                        : newFilter === "Technical Skills"
                            ? categories.filter(c => !c.isProfessional)
                            : categories.filter(c => c.isProfessional);
                    setVisibleCategories(nextCategories);
                }
            });
        }, containerRef);
    };

    useGSAP(() => {
        if (isFirstRender.current) {
            // Initial load animation (ScrollTrigger)
            const cards = gsap.utils.toArray(".skill-card");
            gsap.fromTo(cards,
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse"
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => { isFirstRender.current = false; }
                }
            );
        } else {
            // Filter change animation
            gsap.fromTo(".skill-card",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.4,
                    ease: "power2.out"
                }
            );
        }
    }, { scope: containerRef, dependencies: [visibleCategories] });

    return (
        <section ref={containerRef} id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Skills
                </h2>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    {["All", "Technical Skills", "Professional Skills"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleFilterChange(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                ? "bg-accent/20 text-accent border-accent shadow-lg scale-105"
                                : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
                    {visibleCategories.map((category) => {
                        const colorConfig = CATEGORY_COLOR_MAP[category.colorKey as keyof typeof CATEGORY_COLOR_MAP] || CATEGORY_COLOR_MAP["All"];

                        // Override for professional skills
                        const finalBorder = colorConfig.border;
                        const finalAccent = colorConfig.accent;
                        const finalBullet = colorConfig.accent.replace('text-', 'bg-');

                        return (
                            <div
                                key={category.title}
                                className={`skill-card rounded-lg border ${finalBorder} bg-slate-900/50 p-6 shadow-sm transition-transform hover:scale-105`}
                            >
                                <h3 className={`mb-4 text-xl font-semibold ${finalAccent}`}>
                                    {category.title}
                                </h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="skill-item flex items-center text-slate-400">
                                            <span className={`mr-2 h-1.5 w-1.5 rounded-full ${finalBullet}`} />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
