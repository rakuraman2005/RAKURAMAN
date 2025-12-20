
import Projectcard from "./Projectcard";

const Project = () => {
  const projects = [
    {
      title: "Smart Gas Leakage System",
      description: "IoT based gas leakage detection using Arduino, sensors & web dashboard.",
      image: "/project images/skills.png",
      source: "https://github.com/rakuraman2005"
    },
    {
      title: "Flood Monitoring System",
      description: "ESP8266 based flood monitoring with GPS & mobile alerts.",
      image: "/project images/skills.png",
      source: "#"
    },
    {
      title: "AI Wearable Safety Device",
      description: "Women safety wearable with health monitoring & AI alert system.",
      image: "/project images/skills.png",
      source: "#"
    }
  ];

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>
        <span style={{ color: "#FFD700" }}>P</span>rojects
      </h1>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    padding: "40px 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    justifyContent: "center",
  }
};

export default Project;
