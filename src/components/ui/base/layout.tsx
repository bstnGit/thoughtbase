import React, { ReactNode } from 'react';
import Nav from './nav';
import Footer from './footer';
import { Separator } from "../separator"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="my-2">
      <Nav />
      <Separator className="mt-2 shadow"/>
        <main>{children}</main>
      <Separator className="mb-2"/>
      <Footer/>
    </div>
  );
};

export default Layout;