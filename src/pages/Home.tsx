import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="section home">
      {/* HERO */}
      <div className="home-hero container">
        <div className="text">
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            AARABHI SHEN S A.
          </h1>
          <p className="hero-tagline" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
            An artist at heart and a designer by passion. I find inspiration in colours, shapes, and little details, transforming imagination into visuals that tell stories and leave an impression.
          </p>
          <Link to="/kaira-posters" className="btn btn-primary">View My Work</Link>
        </div>
        <div className="photo-wrapper">
          <div className="photo-frame">
            <img src="/home-photo.jpg" alt="Aarabhi Shen" />
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="home-cards container">
        {/* Education Card */}
        <div className="home-card education-card">
          <h3>Education</h3>
          <ul className="education-list">
            <li>
              <span className="institution">AVK International Residential Sr. Sec. School</span>
              <span className="details">(2019–2021) – 62%</span>
            </li>
            <li>
              <span className="institution">Sri Mahalakshmi Matriculation Higher Secondary School</span>
              <span className="details">(2021–2023) – 63.8%</span>
            </li>
            <li>
              <span className="institution">National Engineering College – B.E. Computer Science</span>
              <span className="details">(2023–2027) – CGPA 6.49</span>
            </li>
          </ul>
        </div>
        {/* Skills Card */}
        <div className="home-card skills-card">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>C</li>
            <li>C++</li>
            <li>UI/UX Design</li>
            <li>AR/VR</li>
            <li>Unity (C#)</li>
            <li>3D Modelling</li>
          </ul>
        </div>
        {/* Contact Card */}
        <div className="home-card contact-card">
          <h3>Contact</h3>
          <p><span className="icon">📞</span> <a href="tel:+919791527918">+91 9791527918</a></p>
          <p><span className="icon">✉️</span> <a href="mailto:aarabhishen7@gmail.com">aarabhishen7@gmail.com</a></p>
          <p><span className="icon">🏫</span> <a href="mailto:2312001@nec.edu.in">2312001@nec.edu.in</a></p>
        </div>
      </div>
    </section>
  );
};

export default Home;
