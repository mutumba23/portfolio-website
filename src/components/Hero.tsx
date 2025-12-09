import Image from "next/image";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
            <div className="container px-4 text-center md:text-left">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            Hi, I&apos;m <span className="text-accent">Philip</span>
                            <br />
                            <span className="text-2xl sm:text-3xl font-semibold text-slate-400">
                                IT Support Specialist with a focus on <span className="text-green-400">Automation Development</span>
                            </span>
                        </h1>
                        <p className="max-w-xl text-lg text-slate-400">
                            My 18+ years in IT operations and support have provided the knowledge base for my passion projects. I develop and deploy full-stack and automation tools like, the <span className="font-bold">ITSD Tools</span> project, to drive efficiency and solve recurring business challenges.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-slate-800"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative h-48 w-48 md:h-64 md:w-64">
                            <Image
                                src="/profile.webp"
                                alt="Profile Photo"
                                fill
                                className="rounded-full border-4 border-slate-700 object-cover shadow-2xl"
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
