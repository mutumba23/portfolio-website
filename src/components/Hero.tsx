import Image from "next/image";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="flex min-h-[calc(100vh-4rem)] items-center justify-center pt-8 pb-12 md:py-16">
            <div className="container px-4 text-center md:text-left">
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 md:items-center">
                    <div className="space-y-4 md:space-y-6">
                        {/* Dold på mobil för att spara höjd, visas från sm (640px) och uppåt */}
                        <div className="hidden sm:inline-flex items-center rounded-full border border-slate-700/80 bg-slate-800/50 px-3 py-1 text-sm text-slate-300">
                            <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
                            Älmhult, Sweden • 19+ Years in Enterprise IT
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            Hi, I&apos;m <span className="text-accent">Philip</span>
                            <br />
                            <span className="mt-1.5 md:mt-2 block text-xl sm:text-3xl font-semibold text-slate-300">
                                Technical Process Specialist &amp; <span className="text-green-400">Automation Developer</span>
                            </span>
                        </h1>
                        <p className="mx-auto max-w-xl text-base sm:text-lg text-slate-400 md:mx-0">
                            Combining <span className="font-semibold text-slate-200">19+ years in global IT operations</span> with full-stack and AI workflow development. From leading enterprise Windows 11/Intune migrations to building internal tools like <span className="font-semibold text-slate-200">ITSD Tools</span> (saving <span className="font-semibold text-green-400">2,000+ hours annually</span>), I turn operational bottlenecks into scalable automation.
                        </p>
                        {/* Knapparna bredvid varandra även på mobil sparar ~60px höjd */}
                        <div className="flex flex-row justify-center gap-3 sm:gap-4 md:justify-start">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-transparent px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-foreground transition-colors hover:bg-slate-800"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative h-40 w-40 sm:h-52 sm:w-52 md:h-72 md:w-72">
                            <Image
                                src="/profile.webp"
                                alt="Philip Nilsson"
                                fill
                                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 288px"
                                className="rounded-full border-4 border-slate-700/80 object-cover shadow-2xl ring-2 ring-green-400/20"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;