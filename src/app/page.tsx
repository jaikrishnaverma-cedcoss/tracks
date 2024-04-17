import React from 'react';

// import Footer from './Footer';
import Header from '@/components/Header';
import Content from '@/components/Content';
import Footer from '@/components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <div style={{background:'#89CFF0'}}>
      <Header  />
      <Content />
      </div>
     
      <Footer />
    </div>
  );
}

export default LandingPage;
