import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <main className="flex-grow pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout; 