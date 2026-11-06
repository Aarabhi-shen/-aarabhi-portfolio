import React from 'react';

const Hero: React.FC = () => (
  <section className="hero section-light fade-in">
    <div className="hero-content">
      {/* Text side */}
      <div className="hero-text slide-up">
        <h1 className="hero-title">AARABHI SHEN S A.</h1>
        <p className="hero-tagline">Turning Ideas Into Visual Stories.</p>
        <p className="hero-description">
          I blend graphic design, illustration and digital creativity to craft compelling visual narratives that engage and inspire.
        </p>
        <div className="hero-buttons">
          <a href="/art" className="btn btn-primary">Explore My Work</a>
          <a href="/contact" className="btn btn-secondary">Get In Touch</a>
        </div>
        {/* floating decorative shapes keep the visual interest */}
        <div className="float-shape shape-1" />
        <div className="float-shape shape-2" />
      </div>
    </div>
  </section>
);

export default Hero;
