export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-sub">A short introduction about who I am and what I do.</p>

        <div className="grid">
          <div className="about-card">
            <h3>Hello! I’m Anderson</h3>
            <p>
              I design and build clean, responsive websites with a focus on performance,
              accessibility, and delightful user experiences. I enjoy turning complex
              problems into simple, beautiful interfaces.
            </p>
            <div className="stats">
              <div className="stat"><div className="num">3+</div>Years Experience</div>
              <div className="stat"><div className="num">24</div>Projects</div>
              <div className="stat"><div className="num">10</div>Happy Clients</div>
            </div>
          </div>

          <div className="about-card">
            <h3>Skills</h3>
            <p>HTML, CSS, JavaScript, React, Vite, Git, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
