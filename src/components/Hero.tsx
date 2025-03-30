import { FC } from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero: FC = () => {
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-05-05');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      return `${days} days until launch`;
    };
    
    setTimeLeft(calculateTimeLeft());
  }, []);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center px-4 py-8">
      <div className="container mx-auto">
        <div className="text-center space-y-12 md:space-y-16">
          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight tracking-tight">
              SolTips
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A wallet focused on ease of use. A token backed by KIN.
            </p>
          </div>

          {/* Logos - Smaller on mobile */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="relative w-10 md:w-12">
              <Image
                src="/images/logo.png"
                alt="Perk.exchange Logo"
                width={48}
                height={48}
                priority
                className="w-full h-auto"
              />
            </div>
            <span className="text-lg text-gray-500">×</span>
            <Image
              src="/images/solana.svg"
              alt="Solana Logo"
              width={140}
              height={56}
              priority
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="text-lg text-gray-500">×</span>
            <div className="rounded-full overflow-hidden bg-white/5 p-1 w-14 md:w-16">
              <Image
                src="/images/kin.png"
                alt="KIN Logo"
                width={64}
                height={64}
                priority
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>

          {/* Community Call to Action */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <h2 className="text-lg md:text-xl text-accent-purple font-semibold mb-4">
                Help Launch This Project
              </h2>
              <p className="text-gray-300 mb-6">
                Your support is crucial. Spread the word to make this happen.
              </p>
              
              <div className="flex flex-col items-center gap-3">
                <a 
                  href="https://x.com/perkexchange" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black px-6 md:px-8 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  1. Follow @PerkExchange
                </a>
                <a 
                  href="https://x.com/PerkExchange/status/1905841155893313641" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-base hover:bg-opacity-20 transition-all transform hover:scale-105"
                >
                  2. Repost the announcement
                </a>
                <button 
                  onClick={() => {
                    const text = "Excited about @PerkExchange's new project! KIN community, check out this wallet and token project 👀 #KIN #Solana";
                    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text)}`);
                  }}
                  className="w-full bg-white/10 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-base hover:bg-opacity-20 transition-all transform hover:scale-105"
                >
                  3. Tag your friends
                </button>
              </div>
            </div>
            
            {/* Attribution and Countdown */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm tracking-wide">
                A PROJECT BY PERK.EXCHANGE
              </p>
              <p className="text-gray-500 text-sm font-light">
                {timeLeft} • Community-driven launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 