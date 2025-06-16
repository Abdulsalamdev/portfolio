"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build complete web applications using modern tools like Next.js, Node.js, Express, and MongoDB. From frontend design to backend APIs — I handle it all.",
    },
    {
      title: "Frontend Development",
      description:
        "Need a beautiful and functional interface? I specialize in creating responsive and interactive UIs with React, Tailwind CSS, and Framer Motion.",
    },
    {
      title: "Backend/API Development",
      description:
        "I create scalable and secure REST APIs using Node.js, Express, and MongoDB — with features like authentication, error handling, and database design.",
    },
    {
      title: "Bug Fixing & Optimization",
      description:
        "Got a broken or sluggish website? I diagnose and fix bugs in your frontend or backend, clean up your code, and optimize performance for speed, SEO, and responsiveness — ensuring your site works flawlessly across all devices.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: "80px 20px",
        backgroundColor: "#0B0B0F",
        color: "#E6E6E6",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Services
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              style={{
                backgroundColor: "#1F1F23",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                transition: "transform 0.3s",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  color: "#F4B400",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#9CA3AF",
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
