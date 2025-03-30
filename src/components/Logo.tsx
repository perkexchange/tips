import { FC } from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/images/logo.png"
        alt="TIPS Logo"
        width={size}
        height={size}
        className="w-full h-full"
        priority
      />
    </div>
  );
};

export default Logo; 