import React from 'react';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const MainLayout = ({ children }) => (
  <div className="App">
    <TopBar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;