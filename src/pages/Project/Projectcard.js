
import React, { useState } from "react";

const Projectcard = ({ title, description, image, source }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hover
          ? "0 20px 40px #ffd90025"
          : "0 8px 25px rgba(0, 0, 0, 0.25)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} style={styles.image} />

      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>

      <a
        href={source}
        target="_blank"
        rel="noreferrer"
        style={{
          ...styles.button,
          background: hover ? "#FFD700" : "transparent",
          color: hover ? "#000" : "#FFD700"
        }}
      >
        View Source
      </a>
    </div>
  );
};

const styles = {
  card: {
    
   backdropFilter: "blur(12px)",
    background: "rgba(255, 255, 255, 0.12)",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
    transition: "all 0.4s ease",
    border: "1px solid rgba(255,255,255,0.25)",
    zIndex: "0",
  },
  image: {
    width: "100%",
    height: "180px",
    aspectRatio : "16/9",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "15px",
     background: "transparent",
  },
  title: {
    fontSize: "1.3rem",
    margin: "10px 0",
     background: "transparent",
    
  },
  description: {
    fontSize: "0.95rem",
    opacity: 0.85,
    marginBottom: "20px",
    color: "#ffffff",
    background: "transparent",
  },
  button: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: "20px",
    border: "1px solid #FFD700",
    textDecoration: "none",
    transition: "all 0.3s ease",
    fontWeight: "500"
  }
};

export default Projectcard;
