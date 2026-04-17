import { motion } from "framer-motion";

// This is your custom jet engine style loader
export default function Loader() {
  return (
    <div style={styles.container}>
      
      {/* Outer ring */}
      <motion.div
        style={styles.outer}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />

      {/* Inner core (faster spin like turbine spool) */}
      <motion.div
        style={styles.inner}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <p style={styles.text}>Initializing Propulsion System...</p>
    </div>
  );
}

// Styles (clean + light theme)
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff"
  },
  outer: {
    width: "120px",
    height: "120px",
    border: "6px solid #d0d0d0",
    borderTop: "6px solid #0077ff",
    borderRadius: "50%",
    marginBottom: "20px"
  },
  inner: {
    position: "absolute",
    width: "60px",
    height: "60px",
    border: "4px solid #ccc",
    borderTop: "4px solid #00aaff",
    borderRadius: "50%"
  },
  text: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555"
  }
};
