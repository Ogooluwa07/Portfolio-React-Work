import React from "react";
import "./Hero.css";  // import the CSS file for styling

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Anderson </h1>
        <p>Welcome to my portfolio website!</p>
        <img src="/SUITT.png" alt="Profile" className="profile-img" />
      </div>
    </section>
  );
}

export default Hero;
