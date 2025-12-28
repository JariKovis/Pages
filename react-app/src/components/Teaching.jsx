function Teaching() {
  return (
    <section id="teaching" className="section teaching-section">
      <div className="teaching-background"></div>
      <div className="container">
        <h2 className="section-title">Teaching</h2>

        <div className="courses-grid">
          <div className="course">
            <div
              className="course-image"
              style={{
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
              }}
            >
              <div className="course-icon">🌐</div>
            </div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript · Project-based learning</p>
          </div>

          <div className="course">
            <div
              className="course-image"
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
              }}
            >
              <div className="course-icon">⚙️</div>
            </div>
            <h3>Full-Stack Development</h3>
            <p>React, Node.js, Databases · Agile teamwork</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teaching;
