export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-sub">Let’s talk about your next project.</p>

        <div className="grid">
          <div className="form">
            <div className="row">
              <input className="input" placeholder="First name" />
              <input className="input" placeholder="Last name" />
            </div>
            <div className="mb"><input className="input" placeholder="Email" /></div>
            <div className="mb"><textarea className="textarea" placeholder="Message"></textarea></div>
            <button className="btn">Send Message</button>
          </div>

          <div className="about-card">
            <h3>Get in touch</h3>
            <p>Email: you@example.com</p>
            <p>Location: Lagos, Nigeria</p>
            <p>Available for freelance & internships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
