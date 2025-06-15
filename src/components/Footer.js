// For icons
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Vivek Kumar Soni</h3>
            <p>Full-Stack Web Developer</p>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/codewithvivek98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-kumar-soni-81177824a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:vivek.soni9891@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <span className="heart">❤️</span> by Vivek Kumar Soni
          </p>
          <p className="copyright">© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
