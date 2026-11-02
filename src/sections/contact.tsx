import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PaperPlaneRight } from "@phosphor-icons/react/dist/icons/PaperPlaneRight";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/icons/EnvelopeSimple";
import { GithubLogo } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/icons/LinkedinLogo";
import { ArrowUpRight } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import useReveal from "../hooks/useReveal";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const DIRECT_LINKS = [
  {
    label: "athekamebash@gmail.com",
    href: "mailto:athekamebash@gmail.com",
    Icon: EnvelopeSimple,
  },
  {
    label: "GitHub",
    href: "https://github.com/Bash2009",
    Icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bashir-athekame",
    Icon: LinkedinLogo,
  },
];

const ContactSection = () => {
  const ref = useReveal<HTMLElement>();
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

  const inputClass =
    "w-full rounded-2xl bg-white/[0.04] px-5 py-4 text-sm text-ink ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] placeholder:text-muted/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent/60";

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal px-4 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow" data-reveal>
          04 — Contact
        </span>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Form — Double-Bezel panel */}
          <div className="bezel md:col-span-7" data-reveal>
            <div className="bezel__core p-7 md:p-10">
              <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">
                Tell me what
                <br />
                you&apos;re building.
              </h2>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                      Email
                    </span>
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="you@company.com"
                      required
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                    Message
                  </span>
                  <textarea
                    name="message"
                    placeholder="What are you building?"
                    required
                    rows={5}
                    className={`${inputClass} resize-y`}
                  />
                </label>

                {status === "success" && (
                  <p className="flex items-center gap-2 px-1 text-sm font-medium text-emerald">
                    <PaperPlaneRight size={14} weight="light" />
                    Message sent — I&apos;ll follow up soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 px-1 text-sm font-medium text-[#f87171]">
                    <PaperPlaneRight size={14} weight="light" />
                    Send failed. Try emailing me directly instead.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary mt-2 self-start"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  <span className="btn__orb">
                    <PaperPlaneRight size={16} weight="light" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Direct links — stacked bezel cards */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="bezel" data-reveal>
              <div className="bezel__core p-7 md:p-9">
                <p className="font-display text-xl font-medium leading-snug text-ink">
                  Prefer to reach out directly?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  My inbox is open — expect a reply within a day.
                </p>

                <div className="mt-7 flex flex-col gap-3">
                  {DIRECT_LINKS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl bg-white/[0.03] px-5 py-4 ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.06] hover:ring-accent/40"
                    >
                      <Icon
                        size={18}
                        weight="light"
                        className="text-muted transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-accent"
                      />
                      <span className="flex-1 truncate text-sm font-medium text-ink">
                        {label}
                      </span>
                      <ArrowUpRight
                        size={14}
                        weight="light"
                        className="text-muted transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:text-accent"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bezel" data-reveal>
              <div className="bezel__core flex items-center gap-4 p-7 md:p-9">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <p className="font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.18em] text-muted">
                  Open to full-time &amp; freelance opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
