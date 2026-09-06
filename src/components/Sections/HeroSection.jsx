// import { TypingAnimation } from "@/components/ui/typing-animation";
// import { useState } from "react";
// import { motion } from "motion/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ImageReveal from "@/components/ui/ImageReveal";

// gsap.registerPlugin(ScrollTrigger);

// export function HeroSection() {
//   const [showSubtitle, setShowSubtitle] = useState(false);
//   const [showParagraph, setShowParagraph] = useState(false);
//   const [showButtons, setShowButtons] = useState(false);
//   const [showImage, setShowImage] = useState(false);

//   return (
//     <section className="w-full min-h-screen flex items-center py-16 md:py-20">

//       <div className="max-w-10/12 mx-auto w-full px-6 lg:px-10">

//         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-8 lg:gap-12">

//           {/* ================= TEXT ================= */}
//           <div className="w-full md:w-3/5 text-center md:text-left">

//             {/* Title */}
//             <TypingAnimation
//               as="h1"
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-cyan-500"
//               onComplete={() => setShowSubtitle(true)}
//             >
//               It's Menna
//             </TypingAnimation>

//             {/* Subtitle */}
//             {showSubtitle && (
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: "easeOut",
//                 }}
//                 onAnimationComplete={() => setShowParagraph(true)}
//                 className="text-xl md:text-2xl font-semibold text-white mb-6"
//               >
//                 Junior Front-End React Developer
//               </motion.h2>
//             )}

//             {/* Paragraph */}
//             {showParagraph && (
//               <motion.p
//                 initial={{ opacity: 0, y: 25 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 onAnimationComplete={() => setShowButtons(true)}
//                 className="text-base md:text-lg leading-7 text-gray-400 text-justify"
//               >
//                 Passionate about crafting modern, responsive, and user-friendly
//                 web experiences. I enjoy turning ideas into clean, interactive
//                 interfaces with a strong focus on performance, attention to detail,
//                 and intuitive user experiences. Always learning, always building.
//               </motion.p>
//             )}

//             {/* Buttons */}
//             {showButtons && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: "easeOut",
//                 }}
//                 onAnimationComplete={() => setShowImage(true)}
//                 className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
//               >
//                 {/* CV */}
//                 <a
//                   href="/cv.pdf"
//                   download="cv.pdf"
//                   className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
//                 >
//                   Download CV
//                 </a>

//                 {/* LinkedIn */}
//                 <a
//                   href="https://www.linkedin.com/in/mennatullah-ahmed-6b798b353/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white transition"
//                 >
//                   LinkedIn
//                 </a>
//               </motion.div>
//             )}
//           </div>

//           {/* ================= IMAGE ================= */}
//           <div className="w-full md:w-2/5 flex justify-center">

//             {showImage && (
//               <ImageReveal
//                 play={showImage}
//                 src="/Snapchat-2056531218.jpg"
//                 alt="Menna"
//                 className="scale-100 md:scale-130"
//               />
//             )}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageReveal from "@/components/ui/ImageReveal";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <section className="w-full min-h-screen flex items-center py-16 md:py-20">

      <div className="max-w-10/12 mx-auto w-full px-6 lg:px-10">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14 md:gap-8 lg:gap-12">

          {/* ================= TEXT ================= */}
          <div className="w-full md:w-3/5 text-center md:text-left">

            {/* Title */}
            <TypingAnimation
              as="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 text-cyan-500"
              onComplete={() => setShowSubtitle(true)}
            >
              It's Menna
            </TypingAnimation>

            {/* Subtitle */}
            {showSubtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setShowParagraph(true)}
                className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-6"
              >
                Junior Front-End React Developer
              </motion.h2>
            )}

            {/* Paragraph */}
            {showParagraph && (
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setShowButtons(true)}
                className="text-lg md:text-xl leading-8 text-gray-400 text-justify"
              >
                Passionate about crafting modern, responsive, and user-friendly
                web experiences. I enjoy turning ideas into clean, interactive
                interfaces with a strong focus on performance, attention to detail,
                and intuitive user experiences. Always learning, always building.
              </motion.p>
            )}

            {/* Buttons */}
            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setShowImage(true)}
                className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
              >
                {/* CV */}
                <a
                  href="/cv.pdf"
                  download="cv.pdf"
                  className="px-6 py-3 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
                >
                  Download CV
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mennatullah-ahmed-6b798b353/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </motion.div>
            )}
          </div>

          {/* ================= IMAGE ================= */}
          <div className="w-full md:w-2/5 flex justify-center">

            {showImage && (
              <ImageReveal
                play={showImage}
                src="/Snapchat-2056531218.jpg"
                alt="Menna"
                className="scale-100 md:scale-130"
              />
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;