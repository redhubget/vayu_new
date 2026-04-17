import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.container}>

      {/* BACKGROUND EFFECT */}
      <div style={styles.bgGlow}></div>

      {/* LEFT CONTENT */}
      <div style={styles.left}>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          Indigenous{" "}
          <span style={styles.highlight}>Jet Engine</span> Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={styles.subtitle}
        >
          TRISHUL Mk1 is a compact 3–4 kN class turbojet designed and developed 
          in India, engineered for high-performance UAV and defence applications.
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
            Contact Us
          </a>
        </motion.div>

      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={styles.right}
      >
        <img
          src="/products/trishul/engine.jpeg"
          alt="TRISHUL Engine"
          style={styles.image}
        />
      </motion.div>

    </section>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 80px",
    minHeight: "90vh",
    background: "#ffffff",
    overflow: "hidden"
  },

  // Soft background glow
  bgGlow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(0,119,255,0.15), transparent)",
    top: "-100px",
    left: "-100px",
    zIndex: 0
  },

  left: {
    maxWidth: "50%",
    zIndex: 1
  },

  title: {
    fontSize: "52px",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "20px",
    color: "#111"
  },

  highlight: {
    color: "#0077ff"
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6"
  },

  buttons: {
    display: "flex",
    gap: "20px"
  },

  primaryBtn: {
    padding: "14px 28px",
    background: "#0077ff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "500",
    transition: "0.3s"
  },

  secondaryBtn: {
    padding: "14px 28px",
    border: "2px solid #0077ff",
    color: "#0077ff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "500"
  },

  right: {
    width: "45%",
    display: "flex",
    justifyContent: "center",
    zIndex: 1
  },

  image: {
    width: "100%",
    maxWidth: "520px",
    borderRadius: "12px",
    objectFit: "contain"
  }
};
