export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <p className="section-sub">Roles and responsibilities over the years.</p>

        <div className="timeline">
          <div className="item">
            <div className="company">Frontend Intern • 2023</div>
            <div className="period">6 months</div>
            <div>Built UI components, fixed bugs, and learned React fundamentals.</div>
          </div>
          <div className="item">
            <div className="company">Junior Web Dev • 2024</div>
            <div className="period">1 year</div>
            <div>Implemented responsive layouts, improved Lighthouse scores.</div>
          </div>
          <div className="item">
            <div className="company">Freelance</div>
            <div className="period">Ongoing</div>
            <div>Landing pages, small apps, and design-to-code projects.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
