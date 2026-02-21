import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = {
    "👨‍💻Backend Languages": [
      "Java",
      "SQL",
      "C",
      "PYTHON",
      "PHP"
    ],
    "🎨Frontend": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "🏗️Frameworks & Libraries": [
      "Spring Boot,",
      "Spring MVC",
      "Spring Security",
      "Hibernate/JPA",
      "React JS,",
      "JDBC",
      "JSP",
      "Servlets",
      "Tailwind CSS",
      "Bootstrap"
    ],
    "🗺️API & Architecture": [
      "RESTful APIs,",
      "CRUD Operations",
      "JSON",
      "HTTP Methods",
      "Exception Handling,",
      "MVC Architecture",
      "Layered Architecture",
      "Dependency Injection",
      "RESTful Architecture"
    ],
    
    "🗄️Database": [
      "MySQL",
      "Oracle"
    ],
    "🧩Core Concepts": [
      "Core Java",
      "OOPs",
      "DSA",
      "C"
    ],
    "🔧Tools & Platforms": [
      "Maven",
      "Postman",
      "Apache Tomcat",
      "Eclipse",
      "STS",
      "VS Code",
      "Git",
      "GitHub",
      "Swagger UI",
      "SLF4J/Logback"
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