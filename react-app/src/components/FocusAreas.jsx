function FocusAreas() {
  const areas = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Frontend & backend technologies",
      features: [
        "HTML, CSS, JavaScript",
        "React & Next.js",
        "Responsive Design",
      ],
    },
    {
      icon: "🏗️",
      title: "Full-Stack Development",
      description: "Complete application solutions",
      features: ["Node.js, Express", "Databases", "API Design"],
    },
    {
      icon: "📚",
      title: "Tutoring & Theses",
      description: "Academic guidance & supervision",
      features: ["1-on-1 Tutoring", "Thesis Supervision", "Career Mentoring"],
    },
  ];

  return (
    <section className="section focus-section">
      <div className="focus-background"></div>
      <div className="container">
        <h2 className="section-title focus-title">Focus Areas</h2>
        <div className="focus-grid">
          {areas.map((area, index) => (
            <div key={index} className="focus-card">
              <div className="focus-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p className="focus-description">{area.description}</p>
              <ul className="focus-features">
                {area.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;
