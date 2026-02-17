import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import MagneticButton from "./MagneticButton";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.img
        src={profile}
        alt="Nikhil Srivastava"
        loading="lazy"
        className="profile-pic"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1>Hi, I'm Nikhil Srivastava 👋</h1>

      <h3 className="typing">
        <Typewriter
          words={[
            "Java Full-Stack Developer",
            "Spring Boot Developer",
            "React Developer",
          ]}
          loop={0}
          cursor={true}
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h3>

      <div className="hero-buttons">
        <a href="https://github.com/Nikhil-java-dev"
          target="_blank"
          rel="noopener noreferrer">
          <MagneticButton>View Work</MagneticButton>
        </a>

        <a href="/resume.pdf" className="btn outline" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
