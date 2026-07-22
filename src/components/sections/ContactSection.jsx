import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  viewportConfig,
} from "../../utils/animations";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { personalInfo } from "../../utils/data";
import { FiMail, FiMapPin, FiLinkedin, FiSend } from "react-icons/fi";

const contactItems = [
  {
    icon: FiMail,
    label: "EMAIL",
    value: "muttukarani@gmail.com",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.15)",
  },
  {
    icon: FiMapPin,
    label: "LOCATION",
    value: "Bagalkot, Karnataka, India",
    color: "#06d6a0",
    bg: "rgba(6,214,160,0.15)",
  },
  {
    icon: FiLinkedin,
    label: "LINKEDIN",
    value: personalInfo.linkedin,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.15)",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Get in touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's build something incredible together."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            variants={slideLeft}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-4"
          >
            {contactItems.map(({ icon: Icon, label, value, color, bg }) => (
              <div
                key={label}
                className="glass-card flex items-center gap-4 p-6"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: bg }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="font-mono text-[0.7rem] text-[var(--muted)] tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideRight}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="glass-card p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-syne font-bold text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-[var(--muted)] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {[
                  {
                    id: "name",
                    label: "YOUR NAME",
                    type: "text",
                    placeholder: "Muttu K",
                  },
                  {
                    id: "email",
                    label: "EMAIL ADDRESS",
                    type: "email",
                    placeholder: "muttu@example.com",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      className="section-label !text-[0.7rem] !mb-2"
                      htmlFor={id}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="input-field"
                      value={form[id]}
                      onChange={(e) =>
                        setForm({ ...form, [id]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="section-label !text-[0.7rem] !mb-2"
                    htmlFor="message"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="input-field resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs font-mono">
                    ⚠ Please fill in all fields.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary justify-center mt-1"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="animate-spin">⟳</span>
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
