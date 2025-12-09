    'use client'; // Ensure this is present for hooks

    import Link from 'next/link';
    import { Menu, X } from 'lucide-react'; // Import X for the close icon
    import { useState } from 'react'; // ⬅️ NEW: Import useState

    const Header = () => {
        // ⬅️ NEW: State to manage the mobile menu's open/closed status
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const navItems = [
            { name: 'Home', href: '#home' },
            { name: 'About', href: '#about' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
        ];

        // Helper function to close the menu after clicking a link
        const handleLinkClick = () => {
            setIsMenuOpen(false);
        };

        return (
            <header 
                    className={`sticky top-0 z-50 w-full border-b border-slate-800 ${
                        isMenuOpen 
                            ? 'bg-slate-900' // Use solid when menu is open
                            : 'bg-background/80 backdrop-blur-sm' // Use translucent/blur when menu is closed
                    }`}
                >
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="text-xl font-bold tracking-tight text-foreground">
                        <Link href="/">Portfolio</Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-400 transition-colors hover:text-accent"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
                        >
                            Resume
                        </a>
                    </nav>

                    {/* Mobile Menu Button (Toggle) */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // ⬅️ ADDED: Click handler to toggle state
                        className="md:hidden text-slate-400 hover:text-foreground z-50" // High Z-index
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" /> // Show X icon when open
                        ) : (
                            <Menu className="h-6 w-6" /> // Show Menu icon when closed
                        )}
                    </button>
                </div>

                {/* Mobile Navigation (Conditional Display) */}
                <div 
                    className={`fixed inset-0 bg-slate-900 transition-transform duration-300 ease-in-out ${ // ⬅️ ADDED: opacity-100 and z-[9999]
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full' 
                    } md:hidden`}
                >
                    <nav className="flex flex-col items-center justify-center space-y-8 py-10 h-full">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={handleLinkClick} // ⬅️ ADDED: Close menu on link click
                                className="text-2xl font-semibold text-foreground transition-colors hover:text-accent"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            onClick={handleLinkClick}
                            className="rounded-md bg-accent px-6 py-3 text-lg font-medium text-accent-foreground hover:bg-accent/90 mt-8"
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            </header>
        );
    };

    export default Header;