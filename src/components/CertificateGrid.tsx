"use client";

import { useState, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { CATEGORY_COLOR_MAP } from "@/config/skillColors";
import { PROVIDER_ICON_MAP } from "@/config/issuerIcons";

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    provider: string;
    category: string;
    year: number;
    credentialUrl?: string;
}

const certificates: Certificate[] = [
    // --- AUTOMATION (Previously AI & AUTOMATION) ---
    { id: 1, title: "Managing Security & Enrollment with Intune Certificate", issuer: "Coursera", provider: "Packt", category: "Automation", year: 2025, credentialUrl: "https://coursera.org/share/51ceaf0d945d7a6fa20f915af931f6c0" },
    { id: 2, title: "Generative AI for Automation Certificate", issuer: "Coursera", provider: "Edureka", category: "Automation", year: 2025, credentialUrl: "https://coursera.org/share/45879b498a122185abce5436cd0b66b7" },
    { id: 3, title: "Google IT Automation with Python Professional Certificate", issuer: "Coursera", provider: "Google", category: "Automation", year: 2025, credentialUrl: "https://coursera.org/share/62d8a9ee68781ae1b13be102649dd491" },
    { id: 4, title: "Microsoft Copilot for Productivity Certificate", issuer: "Microsoft/LinkedIn Learning", provider: "Microsoft", category: "Automation", year: 2025, credentialUrl: "https://lnkd.in/dji4PKaC" },
    { id: 5, title: "Generative AI Landscape", issuer: "LEX Certificates", provider: "Infosys", category: "Automation", year: 2025, credentialUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQFeBbWHoNK0ow/profile-treasury-document-images_1280/B4EZT.GP1gHgAY-/1/1739429841015?e=1766016000&v=beta&t=219FLua6kkF1Z37bhdr94UESPolSzc1hEJHzjgXBMrQ" },
    { id: 6, title: "Microsoft Power Automate (PL-100)", issuer: "Pluralsight Courses", provider: "Pluralsight", category: "Automation", year: 2024 },

    // --- DATA (Previously DATA & CLOUD) ---
    { id: 7, title: "Google Advanced Data Analytics Certificate", issuer: "Coursera", provider: "Google", category: "Data", year: 2025, credentialUrl: "https://coursera.org/share/e5c2f66843ce3df7e4da709c00c625dc" },
    { id: 8, title: "Google Data Analytics Professional Certificate", issuer: "Coursera", provider: "Google", category: "Data", year: 2025, credentialUrl: "https://coursera.org/share/8b01b7f5a755534cfd0ec47c409c4c6c" },
    { id: 9, title: "Microsoft Azure AI Essentials Professional Certificate", issuer: "Microsoft/LinkedIn Learning", provider: "Microsoft", category: "Data", year: 2025, credentialUrl: "https://lnkd.in/d_TiQqv6" },
    { id: 10, title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Pluralsight Courses", provider: "Pluralsight", category: "Data", year: 2024 },

    // --- FRONTEND (Previously WEB DEVELOPMENT & UX) ---
    { id: 11, title: "Web Development I - Introduction | 7.5 hp", issuer: "Luleå University", provider: "Luleå University", category: "Frontend", year: 2018 },
    { id: 12, title: "Web Development II - Script languages and databases | 7.5 hp", issuer: "Luleå University", provider: "Luleå University", category: "Frontend", year: 2020 },
    { id: 13, title: "UX Design Tips for Developers", issuer: "LEX Certificates", provider: "Infosys", category: "Frontend", year: 2025, credentialUrl: "https://media.licdn.com/dms/image/v2/D4D2DAQF5_bDiLagxng/profile-treasury-document-images_1280/B4DZWtDGKFHAAc-/1/1742365028187?e=1766016000&v=beta&t=_3zr2i4NtaIO1wkryAKQ6CECk5tJQsdODZBWQkEDrP4" },
    { id: 14, title: "Building Websites with HTML, CSS, and JavaScript", issuer: "Pluralsight Courses", provider: "Pluralsight", category: "Frontend", year: 2022 },
    { id: 15, title: "Electron Fundamentals", issuer: "Pluralsight Courses", provider: "Pluralsight", category: "Frontend", year: 2024 },

    // --- PROFESSIONAL SKILLS (No change in key) ---
    { id: 16, title: "CS200 Customer Service Proficiency", issuer: "LEX Certificates", provider: "Infosys", category: "Professional Skills", year: 2025 },

];

// Reusing the same categories array structure
const categories = ["All", "Automation", "Data", "Frontend", "Professional Skills"];

const CertificateGrid = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [filter, setFilter] = useState("All");
    // Initialize with all certificates
    const [visibleCertificates, setVisibleCertificates] = useState(certificates);
    const isFirstRender = useRef(true);

    const handleFilterChange = (newFilter: string) => {
        if (newFilter === filter) return;

        gsap.context(() => {
            // Animate out
            gsap.to(".certificate-card", {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                stagger: 0.05,
                onComplete: () => {
                    setFilter(newFilter);
                    const nextCerts = newFilter === "All"
                        ? certificates
                        : certificates.filter(c => c.category === newFilter);
                    setVisibleCertificates(nextCerts);
                }
            });
        }, containerRef);
    };

    // Animate in when visibleCertificates changes
    useGSAP(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        gsap.fromTo(".certificate-card",
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.2)" }
        );
    }, { scope: containerRef, dependencies: [visibleCertificates] });

    return (
        <section ref={containerRef} id="certificates" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-4">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Certifications & Key Courses
                </h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => {
                        const styleConfig = CATEGORY_COLOR_MAP[cat as keyof typeof CATEGORY_COLOR_MAP];
                        const isActive = filter === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${isActive
                                    ? `${styleConfig.bg} ${styleConfig.accent} ${styleConfig.border} shadow-lg scale-105 mb-2`
                                    : `bg-slate-900/50 ${styleConfig.accent} border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100`
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleCertificates.map((cert) => {
                        const styleConfig = CATEGORY_COLOR_MAP[cert.category as keyof typeof CATEGORY_COLOR_MAP] || CATEGORY_COLOR_MAP["All"];

                        // Icon Selection Logic
                        // Primary Lookup: Provider (entity delivering training)
                        let iconDefinition = PROVIDER_ICON_MAP['DEFAULT'];

                        if (cert.provider) {
                            iconDefinition = PROVIDER_ICON_MAP[cert.provider] || PROVIDER_ICON_MAP['DEFAULT'];
                        } else {
                            // Fallback to Issuer if Provider is missing (though data structure implies provider usually exists)
                            iconDefinition = PROVIDER_ICON_MAP[cert.issuer] || PROVIDER_ICON_MAP['DEFAULT'];
                        }

                        return (
                            <div
                                key={cert.id}
                                className={`certificate-card group relative overflow-hidden rounded-xl border bg-slate-900/50 p-6 transition-all hover:scale-[1.02] hover:shadow-lg ${styleConfig.border} flex flex-col h-full`}
                            >
                                <div className="flex-1">
                                    <div className="flex items-start mb-4">
                                        <FontAwesomeIcon icon={iconDefinition} className={`w-8 h-8 mr-4 flex-shrink-0 ${styleConfig.accent}`} />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight">
                                                {cert.title}
                                            </h3>

                                            {/* Trainer (Slightly emphasized) */}
                                            {cert.provider && cert.provider !== cert.issuer && (
                                                <p className="text-xs text-slate-400 mb-1">
                                                    Trainer: <span className="text-accent font-medium">{cert.provider}</span>
                                                </p>
                                            )}

                                            {/* Issuer and Year (Clean, combined line) */}
                                            <p className="text-xs text-slate-500 mb-3">
                                                {cert.issuer} {cert.year && ` | ${cert.year}`}
                                            </p>

                                            {/* Category Tag remains at the bottom */}
                                            <div className="flex flex-wrap items-center w-full mt-3">
                                                <span className={`inline-block text-xs px-2 py-1 rounded font-medium ${styleConfig.badge}`}>
                                                    {cert.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Full-Width CTA Link */}
                                {cert.credentialUrl && (
                                    <div className="relative w-full h-12"> {/* New: Container for positioning */}
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // MODIFIED CLASSES:
                                            className={`absolute bottom-0 right-0 text-sm font-semibold transition-colors duration-300 ${styleConfig.accent} hover:text-slate-400`}
                                        >
                                            View Credentials
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 w-3 h-3" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificateGrid;
