import React from 'react';
import Gallery from '../components/Gallery';

const KairaPosters: React.FC = () => {
  return (
    <section className="section">
      <h2>Kaira Posters</h2>
      <Gallery type="kaira" />
    </section>
  );
};

export default KairaPosters;

