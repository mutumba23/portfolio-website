const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Philip. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="https://github.com/mutumba23" className="text-sm text-slate-400 hover:text-accent">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/philip-nilsson23/" className="text-sm text-slate-400 hover:text-accent">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
