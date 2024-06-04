import React from 'react';

// components
import Header from './Header/Header';
import About from './About/About';
import Advantages from './Advantages/Advantages';
import Steps from './Steps/Steps';
import Areas from './Areas/Areas';
import Formats from './Formats/Formats';
import Help from './Help/Help';
import Footer from './Footer/Footer';

const Landing: React.FC = () => {
  return (
    <section>
      <Header />
      <div style={{height: '103px'}}></div>
      <About />
      <div style={{height: '100px', backgroundColor: '#151A31'}}></div>
      <Advantages />
      <div style={{height: '100px', backgroundColor: '#151A31'}}></div>
      <Steps />
      <div style={{height: '100px', backgroundColor: '#151A31'}}></div>
      <Areas />
      <div style={{height: '100px', backgroundColor: '#151A31'}}></div>
      <Formats />
      <Help />
      <div style={{height: '100px', backgroundColor: '#151A31'}}></div>
      <Footer />
    </section>
  )
}

export default React.memo(Landing);
