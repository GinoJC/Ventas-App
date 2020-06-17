import React from 'react';
import TopBar from '../TopBar';
import Footer from '../Footer';

/*
export default function MainLayout() {
  return ( 
    <>
      <TopBar />
      <ContentCenter cards={cards} />
      <Footer/>
    </>            
  );
}*/
const MainLayout = ({ children }) => (
  <div className="App">
    <TopBar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;