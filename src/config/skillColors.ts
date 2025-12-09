/* export const CATEGORY_COLOR_MAP = {
    "AI & Automation": { accent: "text-blue-400", bg: "bg-blue-900/40", border: "border-blue-900", badge: "bg-blue-900 text-blue-300" },
    "Data & Cloud": { accent: "text-green-400", bg: "bg-green-900/40", border: "border-green-900", badge: "bg-green-900 text-green-300" },
    "Web Development & UX": { accent: "text-purple-400", bg: "bg-purple-900/40", border: "border-purple-900", badge: "bg-purple-900 text-purple-300" },
    "Soft skills": { accent: "text-yellow-400", bg: "bg-yellow-900/40", border: "border-yellow-900", badge: "bg-yellow-900 text-yellow-300" },
    "Professional Skills": { accent: "text-yellow-400", bg: "bg-yellow-900/40", border: "border-yellow-900", badge: "bg-yellow-900 text-yellow-300" },
    "All": { accent: "text-accent", bg: "bg-accent/20", border: "border-accent/40", badge: "bg-slate-800 text-slate-500" } // Neutral/Default
}; */

export const CATEGORY_COLOR_MAP = {
    // --- CORE TECHNICAL PILLARS (Keep Vibrant) ---
    "Automation": {
        accent: "text-green-400",
        bg: "bg-green-900/40",
        border: "border-green-900",
        badge: "bg-green-900/50 text-green-300"
    },
    "Frontend": {
        accent: "text-blue-400",
        bg: "bg-blue-900/40",
        border: "border-blue-900",
        badge: "bg-blue-900/50 text-blue-300"
    },
    "Backend": {
        accent: "text-indigo-400",
        bg: "bg-indigo-900/40",
        border: "border-indigo-900",
        badge: "bg-indigo-900/50 text-indigo-300"
    },
    "Data": {
        accent: "text-amber-400",
        bg: "bg-amber-900/40",
        border: "border-amber-900",
        badge: "bg-amber-900/50 text-amber-300"
    },

    // --- FOUNDATIONAL TECHNICAL (New Distinct Color: Dark Cyan/Teal) ---
    "Infrastructure": {
        accent: "text-cyan-400",
        bg: "bg-cyan-900/40",
        border: "border-cyan-900",
        badge: "bg-cyan-900/50 text-cyan-300"
    },

    // --- SOFT SKILLS (Current Neutral Color: Slate/Gray) ---
    // Rename Neutral to SoftSkills for clarity
    "SoftSkills": {
        accent: "text-slate-400",
        bg: "bg-slate-800/40",
        border: "border-slate-800",
        badge: "bg-slate-800 text-slate-400"
    },

    // Safety Keys (point to SoftSkills color)
    "Neutral": {
        accent: "text-slate-400",
        bg: "bg-slate-800/40",
        border: "border-slate-800",
        badge: "bg-slate-800 text-slate-400"
    },
    "Professional Skills": {
        accent: "text-slate-400",
        bg: "bg-slate-800/40",
        border: "border-slate-800",
        badge: "bg-slate-800 text-slate-400"
    },
    "All": {
        accent: "text-accent",
        bg: "bg-accent/20",
        border: "border-accent/40",
        badge: "bg-slate-800 text-slate-500"
    }
};