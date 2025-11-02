"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok || !result.success) throw new Error("Something went wrong");

      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Colors based on theme
  const bgColor = isDark ? "#0B0B0F" : "#F9FAFB";
  const textColor = isDark ? "#E6E6E6" : "#1F2937";
  const subTextColor = isDark ? "#9CA3AF" : "#4B5563";
  const inputBg = isDark ? "#1F1F23" : "#FFFFFF";
  const inputBorder = isDark ? "#333" : "#DDD";
  const buttonBg = "#6C4BD1";
  const buttonText = "#FFFFFF";

  return (
    <section
      id="contact"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "80px 20px",
        width: "100vw",
      }}
    >
      <div style={{ maxWidth: "700px", marginInline: "auto", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: subTextColor, marginBottom: "40px" }}
        >
          Have a project in mind or just want to say hello? Feel free to reach
          out — I’m always open to new opportunities and collaborations.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontSize: "16px",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontSize: "16px",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: inputBg,
              border: `1px solid ${inputBorder}`,
              color: textColor,
              fontSize: "16px",
            }}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: buttonBg,
              color: buttonText,
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <p style={{ marginTop: "30px", color: subTextColor }}>
          Designed & developed by{" "}
          <span style={{ color: "#8A63F7", fontWeight: "500" }}>Silent Architect</span>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
