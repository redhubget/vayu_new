import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.container}>

      {/* LEFT SIDE */}
      <div style={styles.left}>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          Indigenous Jet Engine Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={styles.subtitle}
        >
          TRISHUL Mk1 — A compact 3–4 kN class turbojet designed and developed in India, built for next-generation UAV and defence applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={styles.buttons}
        >
          <a href="/products/trishul" style={styles.primaryBtn}>
            Explore TRISHUL
          </a>

          <a href="/contact" style={styles.secondaryBtn}>
            Get in Touch
          </a>
        </motion.div>

      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={styles.right}
      >
        {/* Replace with your actual engine image */}
        <img
          src="/products/trishul/engine.png"
          alt="TRISHUL Engine"
          style={styles.image}
        />
      </motion.div>

    </section>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px 60px",
    minHeight: "80vh",
    background: "#ffffff"
  },

  left: {
    maxWidth: "50%"
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111"
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6"
  },

  buttons: {
    display: "flex",
    gap: "15px"
  },

  primaryBtn: {
    padding: "12px 24px",
    background: "#0077ff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px"
  },

  secondaryBtn: {
    padding: "12px 24px",
    border: "1px solid #0077ff",
    color: "#0077ff",
    textDecoration: "none",
    borderRadius: "6px"
  },

  right: {
    width: "45%",
    display: "flex",
    justifyContent: "center"
  },

  image: {
    width: "100%",
    maxWidth: "500px"
  }
};
