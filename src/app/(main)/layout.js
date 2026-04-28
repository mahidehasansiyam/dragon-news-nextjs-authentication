import Header from '@/components/Header';
import Marque from '@/components/Marque';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
  return (
    <div>
      <Header></Header>
      <Marque></Marque>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;