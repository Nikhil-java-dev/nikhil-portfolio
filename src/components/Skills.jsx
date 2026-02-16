import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = {
    "Backend": [
      "Java",
      "JDBC",
      "Servlet",
      "JSP",
      "Spring",
      "Spring Boot",
      "Spring Security",
      "Hibernate/JPA",
      "REST APIs"

    ],
    "Frontend": [
      "React JS",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript"
    ],
    "Database": [
      "MySQL",
      "Oracle"
    ],
    "Core Concepts": [
      "Core Java",
      "OOPs",
      "DSA"
    ],
    "Tools": [
      "Maven",
      "Postman",
      "Apache Tomcat",
      "Eclipse",
      "STS",
      "VS Code",
      "Git & GitHub"
    ]
  };

  return (
    <SectionWrapper>
      <section id="skills" className="section">
        <h2>Technical Skills & Tools</h2>

        {Object.entries(skills).map(([category, items]) => (
  <div key={category} className="skill-category">
    <h3>{category}</h3>

    <div className="skills-grid">
      {items.map((skill, index) => (
        <span key={index} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </div>
))}
      </section>
    </SectionWrapper>
  );
};

export default Skills;