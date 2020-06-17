import React from 'react';
import TopBar from '../TopBar';
import Footer from '../Footer';

const MainLayout = ({ children }) => (
  <div className="App">
    <TopBar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;