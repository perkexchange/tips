import { FC, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Tokenomics', href: '/tokenomics' },
  { label: 'Wallet', href: '/wallet' },
  { label: 'Community', href: '/community' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-primary-light/95 backdrop-blur-sm z-50 border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={32} />
            <span className="text-white text-xl font-bold">TIPS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-accent-yellow transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <button className="bg-accent-purple text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 hidden md:block">
            Download Wallet
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white/80 hover:text-accent-yellow py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-accent-purple text-white px-6 py-2 rounded-full font-semibold w-full mt-4">
              Download Wallet
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 