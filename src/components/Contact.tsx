"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const Contact = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Entry animation
        gsap.fromTo(containerRef.current,
            {
                opacity: 0,
                y: 50
            },
            {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                    toggleActions: 'play reverse play reverse'
                },
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out"
            }
        );

        // Hover effect for submit button
        if (!containerRef.current) return;
        const button = containerRef.current.querySelector('.submit-button');
        if (button) {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power1.out" });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, { scale: 1, duration: 0.2, ease: "power1.out" });
            });
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="contact" className="py-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Get In Touch
                </h2>
                <p className="mb-12 text-center text-lg text-slate-400">
                    Interested in working together or have a question? Feel free to reach out using the form below.
                </p>

                <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-foreground placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-foreground placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-foreground placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                            placeholder="Your message..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-button w-full rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 sm:w-auto"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
