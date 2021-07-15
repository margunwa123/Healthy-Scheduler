import React, { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-red-light min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
