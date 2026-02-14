import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = [
    "Java ",
    "OOPs ",
    "DSA " ,
    "Servlet ",
    "JSP ",
    "Spring ",
    "Spring Boot ",
    "Spring Security ",
    "Hibernate/JPA ",
    "React JS ",
    "MySQL ",
    "Oracle ",
    "JS ",
    "HTML ", 
    "Bootstrap ",
    "CSS ", 
    "REST APIs ",
    "maven ", 
    "Postman ", 
    "Apache Tomcat ",
    "Eclipse ",
    "STS ",
    "VS Code ", 
    "Git & GitHub ",
  ];

  return (
    <SectionWrapper>
      <section id="skills" className="section">
        <h2>Technical Skills & Tools</h2>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <span key={i} className="skill-badge">{s}</span>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Skills;
