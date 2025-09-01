import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        <img src="/Desk 2.jpg" alt="Project 1" />
        <img src="/Desk 3.jpg" alt="Project 2" />
        <img src="/Coding-Desk.jpg" alt="Project 3" />
      </div>
    </section>
  );
}

export default Portfolio;
