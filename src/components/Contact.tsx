"use client";

import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { gsap, useGSAP } from "@/lib/gsap";

const FORMSPREE_FORM_ID = "mdkqljdp";

const Contact = () => {
    const containerRef = useRef<HTMLElement>(null);

    const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

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

    // Handle the success state
    if (state.succeeded) {
        return (
            <section id="contact" className="py-20">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Thank You!
                    </h2>
                    <p className="mb-12 text-center text-lg text-green-500">
                        Your message has been successfully sent. I will get back to you as soon as possible.
                    </p>
                </div>
            </section>
        );
    }

    // Handle the form rendering
    return (
        <section ref={containerRef} id="contact" className="py-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Get In Touch
                </h2>
                <p className="mb-12 text-center text-lg text-slate-400">
                    Interested in working together or have a question? Feel free to reach out using the form below.
                </p>

                {/* ⬅️ UPDATE: Use onSubmit={handleSubmit} and method="POST" */}
                <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name" // ⬅️ IMPORTANT: Add the name attribute!
                                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-foreground placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                placeholder="Your Name"
                            />
                            {/* Display Formspree errors for this field */}
                            <ValidationError prefix="Name" field="name" errors={state.errors} /> 
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email" // ⬅️ IMPORTANT: Add the name attribute!
                                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-foreground placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                placeholder="your@email.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message" // ⬅️ IMPORTANT: Add the name attribute!
                            rows={5}
                            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-foreground placeholder-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                            placeholder="Your message..."
                        />
                         <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    
                    {/* Display general form errors */}
                    <ValidationError errors={state.errors} /> 

                    <button
                        type="submit"
                        className="submit-button w-full rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90 sm:w-auto"
                        disabled={state.submitting} // ⬅️ Disable button while submitting
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;