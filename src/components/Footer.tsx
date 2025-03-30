import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-primary/80 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80">
            © 2025 TIPS Project
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="https://solana.com" 
              target="_blank" 
              className="text-white/80 hover:text-accent transition-colors"
            >
              Powered by Solana
            </Link>
            <Link 
              href="#" 
              className="text-white/80 hover:text-accent transition-colors"
            >
              View Liquidity Lock
            </Link>
          </div>
          <div className="flex gap-4">
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="text-white/80 hover:text-accent transition-colors"
            >
              Twitter
            </Link>
            <Link 
              href="https://discord.com" 
              target="_blank"
              className="text-white/80 hover:text-accent transition-colors"
            >
              Discord
            </Link>
            <Link 
              href="https://t.me" 
              target="_blank"
              className="text-white/80 hover:text-accent transition-colors"
            >
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 