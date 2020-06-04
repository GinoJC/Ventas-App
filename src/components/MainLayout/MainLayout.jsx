import React from 'react';
import TopBar from '../TopBar';
import Footer from '../Footer';
import ContentCenter from '../ContentCenter';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12];

export default function MainLayout() {
  return ( 
    <>
      <TopBar />
      <ContentCenter cards={cards} />
      <Footer/>
    </>            
  );
}