import React from 'react';
import Hero from '../components/home/Hero';
import ShowCaseSection from '../components/home/ShowCaseSection';
import ProductFeatures from '../components/home/ProductFeatures';
import Integrations from '../components/home/Integrations';
import TrustScoreSec from '../components/home/TrustScoreSec';
import FAQSection from '../components/home/FAQSection';

const Home = () => {
  return (
    <div className="bg-primary-darker">
      <Hero />
      <ShowCaseSection />
      <ProductFeatures />
      <Integrations />
      <TrustScoreSec />
      <FAQSection />

    </div>
  );
};

export default Home;