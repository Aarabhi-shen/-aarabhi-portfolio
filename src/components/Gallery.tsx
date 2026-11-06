import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { artImages, ecoClubImages, kairaImages } from '../data/galleryData';

type Props = {
  type: 'art' | 'eco' | 'kaira';
};

const Gallery: React.FC<Props> = ({ type }) => {
  const images = type === 'art' ? artImages : type === 'eco' ? ecoClubImages : kairaImages;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div>
      <div className="gallery-grid">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt="" // decorative; alt not needed
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={index}
        on={{
          view: (idx) => setIndex(idx),
        }}
      />
    </div>
  );
};

export default Gallery;

