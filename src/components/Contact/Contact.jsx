import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; // npm i @emailjs/browser
import "./Contact.css";

const SUBJECTS = [
  { id: "job", label: "💼 Job / Internship Inquiry" },
  { id: "freelance", label: "📱 Freelance Project" },
  { id: "collab", label: "🧠 Collaboration / Idea" },
  { id: "question", label: "❓ Question" },
  { id: "other", label: "✏️ Other" },
];

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

/* utility: convert File -> base64 string (data URI) */

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0].id);
  const [customSubject, setCustomSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const fileRef = useRef();

  // validation rules
  const isEmailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const MAX_PDF_SIZE = 3 * 1024 * 1024; // 3MB

  const onFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) {
      setFile(null);
      return;
    }
    // Accept only PDF
    if (f.type !== "application/pdf") {
      setStatusMsg({ type: "error", text: "Only PDF files are allowed." });
      fileRef.current.value = "";
      setFile(null);
      return;
    }
    if (f.size > MAX_PDF_SIZE) {
      setStatusMsg({ type: "error", text: "PDF size must be under 3MB." });
      fileRef.current.value = "";
      setFile(null);
      return;
    }
    setStatusMsg(null);
    setFile(f);
  };

  const copyMyEmailToClipboard = async () => {
    // Replace with your personal email
    const myEmail = import.meta.env.VITE_MY_EMAIL || "youremail@example.com";
    try {
      await navigator.clipboard.writeText(myEmail);
      setStatusMsg({
        type: "success",
        text: "Your email copied to clipboard!",
      });
    } catch {
      setStatusMsg({
        type: "error",
        text: "Copy failed — please copy manually.",
      });
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject(SUBJECTS[0].id);
    setCustomSubject("");
    setMessage("");
    setFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg(null);

    // Basic validation
    if (!name.trim()) {
      setStatusMsg({ type: "error", text: "Please enter your name." });
      return;
    }
    if (!isEmailValid(email)) {
      setStatusMsg({ type: "error", text: "Please enter a valid email." });
      return;
    }
    if (!message.trim()) {
      setStatusMsg({ type: "error", text: "Please enter a message." });
      return;
    }

    const finalSubject =
      subject === "other"
        ? customSubject.trim() || "No subject"
        : SUBJECTS.find((s) => s.id === subject)?.label;

    setSending(true);

    try {
      // convert file to base64 if present

      const templateParams = {
        name: name,
        email: email,
        time: "" + new DateTime().toLocaleString(),
        phone: phone || "",
        subject: finalSubject,
        message: message,
      };

      // send using emailjs
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // EmailJS returns status 200-like; success means mail queued
      setStatusMsg({
        type: "success",
        text: "Message sent! I'll reply soon — thank you.",
      });
      resetForm();
    } catch (err) {
      console.error("Email send error:", err);
      setStatusMsg({
        type: "error",
        text: "Sending failed. Try again or email directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-content">
      <div className="contact-card card">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>

          <button
            type="button"
            className="btn small copy-btn"
            onClick={copyMyEmailToClipboard}
          >
            Copy my email
          </button>
        </div>

        <p className="contact-sub">
          Choose a subject, write your message and I’ll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>Name *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="field">
              <label>Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Phone (optional)</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="field">
              <label>Subject</label>
              <div className="subject-select">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  {SUBJECTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {subject === "other" && (
                  <input
                    className="custom-subject"
                    placeholder="Enter custom subject"
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="field">
            <label>Message *</label>
            <textarea
              value={message}
              onChange={(e) => {
                if (e.target.value.length <= 600) {
                  // 600 characters max
                  setMessage(e.target.value);
                }
              }}
              rows={6}
              placeholder="Tell me about your project or question..."
              required
            />
          </div>

          <div className="actions">
            <button className="btn primary" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              className="btn"
              onClick={resetForm}
              disabled={sending}
            >
              Reset
            </button>
          </div>

          {statusMsg && (
            <div className={`status ${statusMsg.type}`}>{statusMsg.text}</div>
          )}
        </form>
      </div>
    </div>
  );
}
