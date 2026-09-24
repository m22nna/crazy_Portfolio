import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  GraduationCap,  UserRound,  FolderKanban,  Sparkles,} from "lucide-react";

const aboutData = [
  {
    id: "education",
    title: "Education",
    subtitle: "Computer Science & Information",
    icon: GraduationCap,
    content: (
      <>
        I am a fresh graduate from the Faculty of Computers and Information,
        October 6 University, Class of 2026. I graduated with an Excellent
        grade and worked on several academic and practical projects during
        my studies.
      </>
    ),
  },

  {
    id: "specialization",
    title: "Specialization",
    subtitle: "Front-End Development",
    icon: UserRound,
    content: (
      <>
        I specialize in Front-End Development using React. I enjoy building
        responsive, user-friendly interfaces and turning ideas and designs
        into functional web applications.
      </>
    ),
  },

  {
    id: "projects",
    title: "Projects Count",
    subtitle: "Academic & real-world projects",
    icon: FolderKanban,
    content: (
      <>
        I have worked on different projects throughout my learning journey,
        including my graduation project Tareeqy and several Front-End
        projects using React, APIs, responsive design, and modern UI
        libraries.
      </>
    ),
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("education");

  const activeContent = aboutData.find(
    (item) => item.id === activeTab
  );

  return (
    <section id="about" className="max-w-10/12 mx-auto px-6 lg:px-10 py-24 min-h-[75vh]">
      {/* Heading */}
      <div className="flex flex-col mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white courgette-regular">
          About{" "}
          <span className="text-cyan-500">
            Me
          </span>
        </motion.h2>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.35,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="h-1 rounded-full bg-cyan-500 mt-5"
        />
      </div>

      {/* Content */}
      <div className="grid  md:grid-cols-2 md:items-start">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {aboutData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex w-9/10 items-center justify-between rounded-2xl  border border-cyan-500 p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-cyan-500 bg-[#263541] shadow-[0_0_20px_rgba(103,232,249,0.08)]"
                    : "border-cyan-200/50  "}`}
              >

                {/* Left */}
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-300/20 text-cyan-500"
                        : "bg-[#263541] text-cyan-500 group-hover:text-cyan-500"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold ">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>

                </div>

                

              </motion.button>
            );
          })}

        </div>

        {/* RIGHT SIDE */}
        <div className="min-h-[300px] md:pt-2">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeContent.id}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="rounded-2xl   h-full  p-2">

              
              <p className="text-justify leading-8 text-gray-400 aboutParagraph py-7">
                {activeContent.content}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default About;