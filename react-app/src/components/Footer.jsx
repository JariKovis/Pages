function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>© Jari Kovis · 2026</div>
        <div className="social-links" aria-label="Social profiles">
          <a href="https://www.linkedin.com/in/jarikovalainen/" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6c0 1.38 1.12 2.5 2.48 2.5h.02A2.5 2.5 0 1 0 4.98 3.5ZM3 9.75h3.96V21H3zM9.5 9.75H13v1.54c.5-.78 1.4-1.82 3.32-1.82 2.4 0 4.18 1.57 4.18 4.96V21h-3.95v-5.84c0-1.48-.53-2.49-1.86-2.49-1.02 0-1.63.68-1.9 1.33-.1.25-.12.6-.12.95V21H9.5Z" />
            </svg>
          </a>
          <a href="https://twitter.com" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 4h3.4l4.06 5.2L16.25 4H19l-5.05 6.5L19 20h-3.4l-4.25-5.47L7.75 20H5l5-6.5Z" />
            </svg>
          </a>
          <a href="https://github.com/Laurea-ammattikorkeakoulu-Tikkurila" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.17-3.36-1.17-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.9.83.09-.65.35-1.09.63-1.34-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.38-1.96 1.02-2.65-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.92-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.69 1.02 1.57 1.02 2.65 0 3.82-2.34 4.64-4.57 4.88.36.32.68.95.68 1.92v2.84c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
