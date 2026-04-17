import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div style={styles.container}>
      
      {/* Outer casing */}
      <div style={styles.casing}>

        {/* Turbine blades */}
        <motion.div
          style={styles.blades}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Inner core */}
        <motion.div
          style={styles.core}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

      </div>

      <p style={styles.text}>Spooling Engine...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff"
  },

  casing: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "6px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },

  // Blade pattern using conic gradient
  blades: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: `
      conic-gradient(
        #999 0deg,
        #ccc 20deg,
        #999 40deg,
        #ccc 60deg,
        #999 80deg,
        #ccc 100deg,
        #999 120deg,
        #ccc 140deg,
        #999 160deg,
        #ccc 180deg,
        #999 200deg,
        #ccc 220deg,
        #999 240deg,
        #ccc 260deg,
        #999 280deg,
        #ccc 300deg,
        #999 320deg,
        #ccc 340deg,
        #999 360deg
      )
    `,
    position: "absolute"
  },

  core: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #bbb, #eee)",
    position: "absolute"
  },

  text: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555"
  }
};
