import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="btn btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              Send Message
            </button>
          </div>
          <div className="social-links">
            <a href="mailto:athekamebash@gmail.com" className="social-link">
              <Mail size={20} />
              <span>athekamebash@gmail.com</span>
            </a>
            <a
              href="https://github.com/Bash2009"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/bashir-athekame-355170376"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
