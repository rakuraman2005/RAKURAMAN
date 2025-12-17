import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
      degree: "Bachelor of Engineering in Electronics and Communication",
      year: "2022 - 2026",
      grade: "7.97 CGPA",
    },
    {
      institution: "Sri Ragavendra Matricultion Higher Secondary School, Salem",
      degree: "Class XII (TN State Board)",
      year: "2021 - 2022",
      grade: "95.5%",
    },
    {
        institution: "Sri Ragavendra Matricultion Higher Secondary School, Salem",
        degree: "Class X (TN State Board)",
        year: "2019 - 2020",
        grade: "75%",
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.list}>
        {educationData.map((edu, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.institution}>{edu.institution}</h3>
            <p style={styles.degree}>{edu.degree}</p>
            <div style={styles.footer}>
              <span style={styles.year}>{edu.year}</span>
              <span style={styles.grade}>Grade: {edu.grade}</span>
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
    color: '#fff',
    maxWidth: '100%',
  },
  card: {
    borderLeft: '4px solid #FFD700', // Yellow accent to match your "A"
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '1.5rem',
    marginBottom: '20px',
    borderRadius: '0 8px 8px 0',
  },
  institution: {
    margin: '0 0 5px 0',
    fontSize: '1.4rem',
    color: '#FFD700',
  },
  degree: {
    margin: '0 0 15px 0',
    fontStyle: 'italic',
    color: '#ccc',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  year: {
    color: '#888',
  },
  grade: {
    color: '#fff',
  }
};

export default Education;