import React, { ReactNode } from 'react';
import Nav from './nav';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mt-2">
      <Nav />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;