import {
	Github,
	Linkedin,
	Mail,
	Send,
	CheckCircle,
	XCircle,
} from "lucide-react";
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
		} catch {
			setStatus("error");
			setTimeout(() => setStatus("idle"), 4000);
		}
	};

	return (
		<section
			id="contact"
			className="section"
			style={{ backgroundColor: "var(--bg-secondary)" }}
		>
			<div className="container">
				<h2 className="section-title">Get In Touch</h2>
				<div className="contact-content">
					<form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							{/* EmailJS template variable: {{name}} */}
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
							{/* EmailJS template variable: {{reply_to}} */}
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
							{/* EmailJS template variable: {{message}} */}
							<textarea
								id="message"
								name="message"
								placeholder="Your message here..."
								required
							></textarea>
						</div>

						{status === "success" && (
							<div className="form-feedback form-feedback--success">
								<CheckCircle size={18} />
								<span>
									Message sent successfully! I'll get back to you soon.
								</span>
							</div>
						)}
						{status === "error" && (
							<div className="form-feedback form-feedback--error">
								<XCircle size={18} />
								<span>
									Something went wrong. Please try again or email me directly.
								</span>
							</div>
						)}

						<button
							type="submit"
							className="btn btn-primary"
							style={{ alignSelf: "flex-start" }}
							disabled={status === "sending"}
						>
							<Send size={16} />
							{status === "sending" ? "Sending…" : "Send Message"}
						</button>
					</form>

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
