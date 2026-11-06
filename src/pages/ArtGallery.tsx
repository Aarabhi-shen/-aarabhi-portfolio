import React from 'react';
import Gallery from '../components/Gallery';

const ArtGallery: React.FC = () => {
  return (
    <section className="section">
      <h2>My Art Gallery</h2>
      <Gallery type="art" />
    </section>
  );
};

export default ArtGallery;

