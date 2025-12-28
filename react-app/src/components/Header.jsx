function Header() {
  return (
    <header className="header">
      <div className="container header-flex">
        <div className="logo">Jari Kovalainen</div>
        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#teaching" className="nav-link">
            Teaching
          </a>
          <a href="#thesis" className="nav-link">
            Thesis
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
