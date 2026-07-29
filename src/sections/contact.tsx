import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-label">Contact</h2>
        <div className="contact__grid">
          <form
            ref={formRef}
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="reply_to"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What are you building?"
                required
              />
            </div>

            {status === "success" && (
              <div className="form-feedback form-feedback--success">
                <Send size={14} />
                <span>Message sent — I'll follow up soon.</span>
              </div>
            )}
            {status === "error" && (
              <div className="form-feedback form-feedback--error">
                <Send size={14} />
                <span>Send failed. Try emailing me directly instead.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === "sending"}
            >
              <Send size={14} />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>

          <div className="contact__info">
            <p className="contact__prompt">
              Prefer to reach out directly? Here's where you'll find me:
            </p>
            <div className="contact__links">
              <a
                href="mailto:athekamebash@gmail.com"
                className="contact__link"
              >
                <Mail size={16} />
                athekamebash@gmail.com
              </a>
              <a
                href="https://github.com/Bash2009"
                className="contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bashir-athekame"
                className="contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
