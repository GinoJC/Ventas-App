import React from 'react';
import TopBar from '../TopBar';
import Footer from '../Footer';

<<<<<<< HEAD
=======
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
>>>>>>> dd2ea8461fec355180d9976fc0709e8a30617e8b
const MainLayout = ({ children }) => (
  <div className="App">
    <TopBar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;