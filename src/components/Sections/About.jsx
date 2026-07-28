import { motion } from "motion/react";
import CVViewer from "@/components/CVViewer";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-16">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          About{" "}
          <span className="text-cyan-500">
            Me
          </span>
        </motion.h2>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "90px", opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="h-1 rounded-full bg-cyan-500 mt-5"
        />

      </div>

      <div className="flex flex-col lg:flex-row items-center gap-14">

        {/* Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <p className="text-base md:text-lg leading-7 text-gray-400 text-justify">
           I'm I'm a 2026 Computer Science graduate from October 6 University 
           and a Front-End Developer specializing in React. I enjoy building modern,
            responsive, and user-friendly web applications with a strong focus on clean,
             maintainable code and great user experience. Currently, I'm learning the 
             fundamentals of Node.js to expand my full-stack development skills. 
             I'm passionate about continuous learning, solving problems, and improving 
             my skills by working on real-world projects.
          </p>
        </motion.div>

        {/* CV */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <CVViewer />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
