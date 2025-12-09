import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header = () => {
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background/80 backdrop-blur-sm">
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

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-slate-400 hover:text-foreground">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
