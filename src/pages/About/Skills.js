import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "MERN Stack",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
      color: "#61DBFB" // React Blue
    },
    {
      category: "Digital Design",
      skills: ["RTL Design", "Verilog/VHDL", "FPGA", "SystemVerilog"],
      color: "#FFD700" // Your Portfolio Yellow
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.grid}>
        {skillCategories.map((item, index) => (
          <div key={index} style={styles.skillGroup}>
            <h3 style={{ ...styles.categoryTitle, color: item.color }}>
              {item.category}
            </h3>
            <div style={styles.tagContainer}>
              {item.skills.map((skill, i) => (
                <span key={i} style={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  skillGroup: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 215, 0, 0.1)',
  },
  categoryTitle: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '0.9rem',
    color: '#eee',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  }
};

export default Skills;