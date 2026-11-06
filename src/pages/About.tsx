import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-page">
      {/* ── ABOUT ME ── */}
      <h2 className="section-title">About Me</h2>
      <p className="about-intro">
        I am an Artist, Designer, Creative Thinker, and Computer Science
        Engineering student who enjoys transforming ideas into creative and
        meaningful visual experiences. My approach to design combines artistic
        expression, visual communication, and technical thinking.
      </p>

      {/* ── WHAT I DO ── */}
      <h2 className="section-title">What I Do</h2>
      <div className="what-i-do-grid">
        <div className="wid-card">
          <div className="wid-icon">🎨</div>
          <h4>Graphic Design &amp; Visual Communication</h4>
          <p>
            Creating visually engaging posters, promotional materials, and social
            media creatives that communicate ideas effectively.
          </p>
        </div>
        <div className="wid-card">
          <div className="wid-icon">✏️</div>
          <h4>Digital Art &amp; Illustration</h4>
          <p>
            Exploring creativity through hand‑drawn illustrations, digital
            artwork, sketches, and unique artistic concepts.
          </p>
        </div>
        <div className="wid-card">
          <div className="wid-icon">📱</div>
          <h4>UI/UX Design</h4>
          <p>
            Designing intuitive and visually appealing user interfaces for
            websites and mobile applications, focusing on user experience and
            functionality.
          </p>
        </div>
        <div className="wid-card">
          <div className="wid-icon">🧊</div>
          <h4>3D Modelling &amp; Visualisation</h4>
          <p>
            Bringing creative concepts to life through 3D modelling and product
            visualisation.
          </p>
        </div>
        <div className="wid-card">
          <div className="wid-icon">📣</div>
          <h4>Social Media Management</h4>
          <p>
            Managing social media content and contributing to the online presence
            of my college Eco Club through creative posts, engaging visuals, and
            consistent content planning.
          </p>
        </div>
      </div>

      {/* ── MY CREATIVE APPROACH ── */}
      <h2 className="section-title">My Creative Approach</h2>
      <div className="approach-grid">
        <div className="approach-item">
          <h4>Colour &amp; Typography</h4>
          <p>
            Exploring colour theory, font combinations, and visual hierarchy to
            create balanced designs.
          </p>
        </div>
        <div className="approach-item">
          <h4>Creative Thinking</h4>
          <p>
            Turning simple ideas into interesting and meaningful visual concepts.
          </p>
        </div>
        <div className="approach-item">
          <h4>Attention to Detail</h4>
          <p>
            Focusing on composition, alignment, spacing, and consistency.
          </p>
        </div>
        <div className="approach-item">
          <h4>Continuous Learning</h4>
          <p>
            Experimenting with new tools, techniques, and creative trends.
          </p>
        </div>
      </div>

      {/* ── TOOLS & TECHNOLOGIES ── */}
      <h2 className="section-title">Tools &amp; Technologies</h2>
      <div className="tools-tags">
        {['Figma', 'Canva', 'Blender', 'ibisPaint X'].map(
          (tool) => (
            <span className="tool-tag" key={tool}>
              {tool}
            </span>
          )
        )}
      </div>

      {/* ── EXPLORE MY CREATIVE WORLD ── */}
      <h2 className="section-title">Explore My Creative World</h2>
      <div className="instagram-grid">
        <a
          className="insta-card"
          href="https://www.instagram.com/aara_sketches/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="insta-icon">📸</span>
          <h4>My Art &amp; Illustrations</h4>
          <span className="insta-handle">@aara_sketches</span>
          <p>
            Explore my sketches, illustrations, paintings, and personal creative
            experiments.
          </p>
        </a>
        <a
          className="insta-card"
          href="https://www.instagram.com/eco_club_of_.nec/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="insta-icon">🌿</span>
          <h4>Eco Club – NEC</h4>
          <span className="insta-handle">@eco_club_of_.nec</span>
          <p>
            Explore creative posters, social media designs, and activities from
            my college Eco Club.
          </p>
        </a>
      </div>

    </section>
  );
};

export default About;
