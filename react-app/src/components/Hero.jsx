function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-background"></div>
      <div className="container hero">
        <div className="hero-photo">
          <img src="/images/IMG_4012.jpeg" alt="Jari Kovalainen" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Jari Kovalainen</h1>
          <h2 className="hero-subtitle">
            Senior Lecturer, Laurea University of Applied Sciences
          </h2>
          <p className="hero-description">
            Teaching web development, full-stack systems, and supervising
            theses.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              <span className="btn-icon">🎓</span>
              <span className="btn-text">Teaching</span>
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">📖</span>
              <span className="btn-text">Thesis Supervision</span>
            </button>
            <button className="btn btn-secondary">
              <span className="btn-icon">💬</span>
              <span className="btn-text">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
