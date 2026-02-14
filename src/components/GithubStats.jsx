import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const GitHub = () => {
  const base =
    "https://github-readme-stats-peach-xi-80.vercel.app";

  return (
    <SectionWrapper>
      <section id="github" className="section">
        <h2>GitHub Activity</h2>

        <motion.div
          className="github-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Stats */}
          <img
            loading="lazy"
            src={`${base}/api?username=Nikhil-java-dev&show_icons=true&theme=tokyonight&hide_border=true`}
            alt="GitHub stats"
          />

          {/* Streak */}
          <img
            loading="lazy"
            src="https://streak-stats.demolab.com?user=Nikhil-java-dev&theme=tokyonight&hide_border=true"
            alt="GitHub streak"
          />

          {/* Top languages */}
          <img
            loading="lazy"
            src={`${base}/api/top-langs/?username=Nikhil-java-dev&layout=compact&theme=tokyonight&hide_border=true`}
            alt="Top languages"
          />
        </motion.div>
      </section>
    </SectionWrapper>
  );
};

export default GitHub;
