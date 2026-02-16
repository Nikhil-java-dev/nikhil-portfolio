import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      desc: "Spring Boot + React scalable e-commerce system.",
      live: "#",
      github: "#",
    },
    {
      title: "CRUD Web Applications",
      desc: "Servlet & JDBC MVC applications deployed on Tomcat.",
      live: "#",
      github: "https://github.com/Nikhil-java-dev/jdbc-servlet-crud-project",
    },
  ];

  return (
    <SectionWrapper>
      <section id="projects" className="section">
        <h2>Technical Projects</h2>

        <motion.div
          className="project-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="card glass spotlight-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="project-buttons">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn small"
                >
                  🚀 Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn small outline dark-outline"
                >
                  💻 GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </SectionWrapper>
  );
};

export default Projects;
