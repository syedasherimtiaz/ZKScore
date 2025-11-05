import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Developers from './pages/Developers';
import Documentations from './pages/Documentations';
import Explorer from './pages/Explorer';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-primary-darker">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/documentations" element={<Documentations />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
