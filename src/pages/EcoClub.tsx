import React from 'react';
import Gallery from '../components/Gallery';

const EcoClub: React.FC = () => {
  return (
    <section className="section">
      <h2>Graphic Design Portfolio – Eco Club</h2>
      <p>
        Posters and social‑media graphics created for my college Eco Club. I coordinated the visual identity, designed the layouts, and contributed to the club’s outreach campaigns.
      </p>
      <Gallery type="eco" />
    </section>
  );
};

export default EcoClub;

