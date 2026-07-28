import { TypingAnimation } from "@/components/ui/typing-animation";
import { useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageReveal from "@/components/ui/ImageReveal"
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {

  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showImage, setShowImage] = useState(false);
  return (
    <section className="w-full h-screen flex items-center   ">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 my-25">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Text */}
          <div className="w-full md:w-3/5 text-center md:text-left">

            <TypingAnimation
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-cyan-500"
              onComplete={() => setShowSubtitle(true)}
            >
              It's Menna
            </TypingAnimation>

            {showSubtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                onAnimationComplete={() => setShowParagraph(true)}
                className="text-xl md:text-2xl font-semibold text-white mb-6"
              >
                Junior Front-End React Developer
              </motion.h2>
            )
            }
            {showParagraph && (
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={showParagraph ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setShowImage(true)}
                className="text-base md:text-lg leading-7 text-gray-400 text-justify"
              >
                Passionate about crafting modern, responsive, and user-friendly
                web experiences. I enjoy turning ideas into clean, interactive
                interfaces with a strong focus on performance, attention to detail,
                and intuitive user experiences. Always learning, always building.
              </motion.p>
            )}

          </div>
          
          {/* Image */}
          <div className="w-full md:w-2/5 flex justify-center">
            {showImage && (
              <ImageReveal
                play={showImage}
                src="/src/assets/Snapchat-2056531218.jpg"
                alt="Menna"
                className="scale-95 md:scale-100"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;