import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div style={styles.container}>

      {/* ENGINE CASING */}
      <div style={styles.engine}>

        {/* OUTER COMPRESSOR BLADES */}
        <motion.svg
          width="160"
          height="160"
          viewBox="0 0 200 200"
          style={styles.layer}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          {generateBlades(16, 70, 95)}
        </motion.svg>

        {/* INNER COMPRESSOR BLADES */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          style={styles.layer}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        >
          {generateBlades(12, 50, 70)}
        </motion.svg>

        {/* HUB */}
        <div style={styles.hub} />

      </div>

      <p style={styles.text}>Engine Spooling...</p>
    </div>
  );
}

/* 🔧 Function to generate blade shapes */
function generateBlades(count, innerR, outerR) {
  const blades = [];

  for (let i = 0; i < count; i++) {
    const angle = (i * 360) / count;

    blades.push(
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        <path
          d={`
            M100 ${100 - innerR}
            L110 ${100 - outerR}
            L90 ${100 - outerR}
            Z
          `}
          fill="url(#metal)"
        />
      </g>
    );
  }

  return (
    <>
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#aaa" />
          <stop offset="50%" stopColor="#eee" />
          <stop offset="100%" stopColor="#888" />
        </linearGradient>
      </defs>
      {blades}
    </>
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

  engine: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    border: "6px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)"
  },

  layer: {
    position: "absolute"
  },

  hub: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #bbb, #eee)",
    position: "absolute"
  },

  text: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555"
  }
};
