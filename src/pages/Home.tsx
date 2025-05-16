import React, { useEffect } from 'react';
import Hero from '../components/sections/home/Hero';
import Benefits from '../components/sections/home/Benefits';
import Highlights from '../components/sections/home/Highlights';
import Testimonials from '../components/sections/home/Testimonials';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Achados Express - Pague na Entrega!';
  }, []);

  return (
    <div>
      <Hero />
      <Benefits />
      <Highlights />
      <Testimonials />
    </div>
  );
};

export default Home;