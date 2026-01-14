"use client";

import { useRef, useState } from "react";
import { Github, ExternalLink } from 'lucide-react';
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { CATEGORY_COLOR_MAP } from "@/config/skillColors";

const TECH_TO_CATEGORY_MAP: Record<string, keyof typeof CATEGORY_COLOR_MAP> = {
    // --- FRONTEND (Blue) ---
    'Vue.js': 'Frontend',
    'React': 'Frontend',
    'Next.js': 'Frontend',
    'JavaScript': 'Frontend',
    'TypeScript': 'Frontend',
    'Electron': 'Frontend', // Desktop app framework
    'Vuetify': 'Frontend',
    'Tailwind': 'Frontend',
    'GSAP': 'Frontend',
    'Vite': 'Frontend',
    'Phaser': 'Frontend',
    'Google Maps API': 'Frontend',
    'Tkinter / ttk': 'Frontend',
    'GUI Development': 'Frontend',

    // --- BACKEND (Purple/Indigo) ---
    'Node.js': 'Backend',
    'Express': 'Backend',
    'Colyseus': 'Backend', // Real-time server framework
    'REST APIs': 'Backend',
    'CMS': 'Backend',
    'Gotenberg': 'Backend',


    // --- DATA (Amber/Gold) ---
    'PostgreSQL': 'Data',
    'SQL': 'Data',
    'Firebase': 'Data', // Used for data storage/sync (Firestore/RTDB)
    'Firestore': 'Data',
    'Supabase': 'Data', // DBaaS
    'Tableau': 'Data',
    'Kaggle': 'Data',
    'R (tidyverse/ggplot2)': 'Data',
    'Google Fit API': 'Data',
    'Quantified Self': 'Data',

    // --- AUTOMATION (Green) ---
    'Python': 'Automation', // Based on your primary usage for scripting/automation
    'PowerShell': 'Automation',
    'Concurrency / Threading': 'Automation',
    'pynput': 'Automation',
    'Automation': 'Automation',
    'Telegram Bot API': 'Automation',
    'n8n': 'Automation',
    'Gemini AI': 'Automation',
    'ChatGPT': 'Automation',
    'AI Agents': 'Automation',
    'AI Orchestration': 'Automation',
    'Prompt Engineering': 'Automation',
    'MS Graph API': 'Automation',
        
    // --- INFRASTRUCTURE / NEUTRAL (Gray) ---
    'Docker': 'Infrastructure',
    'Firebase Auth': 'Infrastructure',
    'Self-Hosting': 'Infrastructure',
};

// Function to parse the description string and replace **text** with <strong>text</strong>
const parseDescription = (description: string) => {
    // Regex to find text between ** and **
    const parts = description.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            // Remove the ** delimiters and wrap in <strong>
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        // Handle newline characters from the template literal for proper display
        if (typeof part === 'string') {
            // Split by newline and map to <br /> elements
            return part.split('\n').map((line, lineIndex) => (
                <span key={`${index}-${lineIndex}`}>
                    {line}
                    {lineIndex < part.split('\n').length - 1 && <br />}
                </span>
            ));
        }
        return part;
    });
};

// Define this component INSIDE or ABOVE the Projects component
const ProjectDescription = ({ description }: { description: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    // Long description check
    const isLongDescription =
        description.split("\n").length > 5 || description.length > 300;

    // GSAP height animation
    const toggleExpand = () => {
        if (!descriptionRef.current) return;

        const el = descriptionRef.current;
        const fullHeight = el.scrollHeight;

        if (!isExpanded) {
            // EXPAND
            gsap.fromTo(
                el,
                { maxHeight: "5rem" },
                {
                    maxHeight: fullHeight,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        // Let the element go natural after animation
                        el.style.maxHeight = "none";
                        ScrollTrigger.refresh();
                    }
                }
            );
        } else {
            // COLLAPSE
            gsap.fromTo(
                el,
                { maxHeight: el.scrollHeight },
                {
                    maxHeight: "5rem",
                    duration: 0.4,
                    ease: "power2.inOut",
                    onComplete: () => ScrollTrigger.refresh()
                }
            );
        }

        setIsExpanded(!isExpanded);
    };



    return (
        <>
            <p
                ref={descriptionRef}
                className="mb-4 text-slate-400 whitespace-pre-line pr-2"
                style={{ overflow: "hidden", maxHeight: isExpanded ? "none" : "5rem" }}
            >
                {parseDescription(description)}
            </p>

            {isLongDescription && (
                <button
                    onClick={toggleExpand}
                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors self-start mb-4"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            )}
        </>
    );
};


const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".project-card");

        gsap.fromTo(cards,
            {
                opacity: 0,
                y: 30
            },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                },
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out"
            }
        );
    }, { scope: containerRef });

    const projects = [
        {
            title: 'AI Metabolic Health & Nutrition Ecosystem',
            description: `
                An end-to-end automation platform designed for clinical-grade health optimization. The system orchestrates multiple AI agents to translate raw biometric data and subjective user feedback into actionable metabolic insights and family nutrition plans.

                The architecture utilizes a "Three-Tier Agent" approach, ensuring a clean separation between data analysis, strategic planning, and operational execution.

                **Key Technical Achievements:**
                * **Multi-Agent Orchestration:** Designed a complex **n8n-based workflow** that coordinates Gemini 2.5 Pro and Gemini 3 Flash to perform longitudinal trend analysis and meal planning.
                * **Predictive Milestone Forecasting:** Developed logic to calculate **metabolic velocity**, allowing the AI to project goal completion dates based on real-time physiological trends.
                * **Recursive Context Management:** Implemented a system where previous AI-generated insights are written back to a database to serve as **"long-term memory"**, preventing context drift across different protocol phases.
                * **Secure Document Pipeline:** Built a private, local document generation engine using **Gotenberg** and Docker to render professional Swedish health reports (PDF) without exposing sensitive telemetry to external servers.
            `,
            tags: ['n8n', 'Gemini AI', 'MS Graph API', 'Google Fit API', 'Quantified Self', 'Docker', 'Gotenberg'],
            github: 'https://github.com/mutumba23/ai-health-ecosystem-docs',
            demo: '#', 
            imagePath: '/ai-healt-ecosystem.png',
            imageAlt: 'Dashboard showing the AI Health Ecosystem workflow and generated reports.',
        },
        {
            title: 'Dynamic Portfolio & Custom CMS (Alice Nilsdotter)',
            description: `
                A full-stack, dynamic personal portfolio featuring a **custom Content Management System (CMS)**, allowing the user to manage content and visual elements via a secure admin interface.

                The site utilizes a responsive and elegant front-end built with Vue.js and Vuetify, designed for high visual impact and user experience.

                **Key Technical Achievements:**
                * **Full-Stack Implementation:** Built a seamless connection between the front-end display and the data storage, demonstrating full-stack capability.
                * **Custom CMS:** Developed a dedicated, secure **admin page** where the client can log in and administrate dynamic content, including **news articles, images, and visual settings (e.g., background color)**.
                * **Dynamic Content Loading:** Leverages **Google Firestore** as a serverless backend to dynamically store, fetch, and update site data, ensuring real-time content synchronization.
            `,
            tags: ['Vue.js', 'Vuetify', 'JavaScript', 'Firestore', 'Firebase Auth', 'Full-Stack', 'CMS'],
            github: '#',
            demo: 'https://alice-nilsdotter.vercel.app',
            imagePath: '/alice.webp',
            imageAlt: 'Screenshot of Alice Nilsdotter\'s portfolio website.',
        },
        {
            title: 'ITSDTools',
            description: 'ITSD Tools is a desktop application built with Electron and Vue.js, designed to streamline daily IT support and administration tasks. The tool provides quick access to actions such as managing users, distribution lists, and mailboxes, especially useful in a multi-tenant Microsoft 365/Exchange environment.',
            tags: ['Electron', 'Vue.js', 'JavaScript', 'PowerShell', 'Vuetify', 'Vite', 'Firebase'],
            github: 'https://github.com/mutumba23/itsdtools',
            demo: '#',
            imagePath: '/itsdtools.webp',
            imageAlt: 'Screenshot of ITSDTools.',
        },
        {
            title: 'AIK Case Study',
            description: 'This project analyzes the team selection patterns of the new AIK football coach to assess their alignment with the club\'s financial strategy.\n\nSince top European leagues rely heavily on selling young talent for high transfer fees, a coaching philosophy that neglects youth development can suppress a key revenue stream.',
            tags: ['Kaggle', 'Python', 'PostgreSQL', 'R (tidyverse/ggplot2)'],
            github: 'https://github.com/mutumba23/AIK_Case_Study',
            demo: '#',
            imagePath: '/aik_age_trend_visualization_thumbnail.webp',
            imageAlt: 'Screenshot of AIK Case Study.',
        },
        {
            title: 'WotMud Graphics (Real-Time Multiplayer RPG)',
            description: `
                An ambitious, personal full-stack project dedicated to modernizing the classic MUD (Multi-User Dungeon) experience with an intuitive graphical interface. This extensive application is built around a real-time, server-authoritative architecture to support persistent, synchronized multiplayer interactions.
                
                The project demonstrates capability in advanced game development concepts, including state synchronization, server-side combat resolution, and secure persistence of player data.
                
                **Key Technical Roles:**
                * **Colyseus:** Handles real-time communication and **server-authoritative game state**. Manages player rooms, low-latency movement, and combat synchronization.
                * **Phaser:** Powers the **client-side engine** responsible for rendering graphics, sprites, and user interfaces.
                * **Supabase:** Serves as the secure **PostgreSQL backend** for persistent data, including player authentication, inventory, character stats, and game world progression.
            `,
            tags: ['JavaScript', 'Phaser', 'Colyseus', 'Supabase', 'Express', 'Node.js', 'Firebase Auth'],
            github: '#',
            demo: '#',
            imagePath: '/wotmud.webp',
            imageAlt: 'Screenshot of WotMud.',
        },
        {
            title: 'Collaborative Travel Planner',
            description: `
                A complete, full-stack application designed to simplify trip organization, budgeting, and real-time collaboration. The project demonstrates strong architectural skills by managing a complex, hierarchical data structure (Trip → Day → Activity) and integrating essential third-party services.

                The application optimizes the client-side user experience using **Vue.js/Vuetify** while relying on Firebase for scalable, serverless backend functions and data synchronization.

                **Key Technical Features:**
                * **Geospatial & Routing:** Integrates the **Google Maps API** to calculate precise travel distances between itinerary points and visually display the optimized routes directly on an embedded map.
                * **Real-Time Collaboration:** Leverages **Google Firestore** for instant synchronization of activities, comments, and edits among shared trip members.
                * **Comprehensive Budgeting:** Implements detailed cost calculation for accommodation, activities, and specific transport types (driving/flying) to provide users with a complete financial overview.
                * **Intuitive Itinerary Builder:** A visually appealing calendar interface built with **Vue.js/Vuetify** facilitates easy planning and grouping of multi-day trips.
                * **Secure User Management:** Handles all user authentication and authorization using **Firebase Auth**.
            `,
            tags: ['Vue.js', 'Vuetify', 'Vite', 'Firestore', 'Firebase Auth', 'Google Maps API', 'JavaScript'],
            github: '#',
            demo: 'https://travel-planner-virid-tau.vercel.app/',
            imagePath: '/travel_planner.webp',
            imageAlt: 'Screenshot of Travel Planner.',
        },
        {
            title: 'Fantasy Football Scoring & Trade Engine (Local League)',
            description: `
                A full-stack application designed to host a local fantasy football league based on real-life player performance metrics (scores, assists, cards, etc.). The project established a robust system to handle complex, turn-based transactions and calculation logic.

                This demonstrates advanced skills in **complex domain logic modeling** and designing a scalable architecture for transaction-heavy, multi-user applications.

                **Key Technical Achievements:**
                * **Complex Scoring Engine:** Designed the logic for aggregating real-life player stats and translating them into dynamic fantasy points (including bonuses and penalties) for round-by-round allocation.
                * **Trade and Squad Logic:** Fully implemented the technical workflows for **squad selection (5 players + substitutes)**, player purchasing/pricing, and the **single-trade-per-round transaction engine**.
                * **Data Ready Architecture:** Utilized **Google Firestore** to structure the entire game state (Leagues, User Teams, Player Prices, and Score Data), ensuring a scalable schema ready for easy integration with future external match data APIs.
                * **Secure User Management:** Implemented robust user authentication and authorization using **Firebase Auth** to ensure league privacy and secure team management.
            `,
            tags: ['Vue.js', 'Firestore', 'Firebase Auth', 'System Design', 'Domain Modeling', 'JavaScript'],
            github: '#',
            demo: '#',
            imagePath: '/fantasy.webp',
            imageAlt: 'Screenshot of the team management interface or a data flow diagram.',
        },
        {
            title: 'Auto Clicker Utility Tool',
            description: `
                A production-ready utility application designed for automating mouse clicks with configurable intervals and precision. The project emphasizes clean **Front-end State Management**, intuitive **UX/UI design**, and **Performance Optimization** to ensure reliable, lag-free operation.

                This tool demonstrates proficiency in creating practical desktop/web utilities and handling user input for core application logic.
            `,
            tags: ['Python', 'Tkinter / ttk', 'Automation', 'Concurrency / Threading', 'pynput', 'GUI Development'],
            github: 'https://github.com/mutumba23/auto_clicker',
            demo: '#', 
            imagePath: '/autoclicker.webp',
            imageAlt: 'Screenshot of the Auto Clicker utility interface showing configuration settings.',
        },
    ];

    return (
        <section ref={containerRef} id="projects" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Featured Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start auto-rows-max">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="project-card flex flex-col h-full overflow-hidden rounded-lg border border-slate-800 bg-background shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
                        >
                            {/* Dynamic Project Image */}
                            <div className="h-48 md:h-64 w-full relative">
                                {project.imagePath ? (
                                    <Image
                                        src={project.imagePath}
                                        alt={project.imageAlt || `Screenshot of the ${project.title} project.`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                ) : (
                                    /* Fallback for projects without imagePath (like WotMud currently) */
                                    <div className="h-full w-full bg-slate-800 flex items-center justify-center text-slate-500">
                                        <span className="text-sm">Project Screenshot Placeholder</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-2 text-xl font-semibold text-foreground">
                                    {project.title}
                                </h3>
                                <ProjectDescription description={project.description} />
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => {
                                        const category = TECH_TO_CATEGORY_MAP[tag] || 'All';
                                        const colorConfig = CATEGORY_COLOR_MAP[category];

                                        return (
                                            <span
                                                key={tag}
                                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorConfig.badge}`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                                <div className="flex gap-4">
                                    {(project.github && project.github !== '#') && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-slate-400 hover:text-accent"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            Github
                                        </a>
                                    )}
                                    {(project.demo && project.demo !== '#') && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-slate-400 hover:text-accent"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
