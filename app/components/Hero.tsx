"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  const { scrollY } = useScroll(); // Track the scroll position
  const yTransform = useTransform(scrollY, [0, 300], [0, -150]); // Move Hero up by -150px when scrolling down 300px

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200/10 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        style={{ y: yTransform }} // Apply scroll effect to the Hero component
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="my-name text-2xl md:text-5xl sm:text-lg font-bold mb-8 p-2 sm:mx-12 md:mx-0">
          « SOULISACK DUANGVILAY »
        </h1>

        <div className="text-xl typing md:text-2xl h-20 mb-8">
          <TypeAnimation
            sequence={[
              "こんにちは、私の名前はアレックスです。よろしくね！",
              3000,
              "Hi, I'm alex. Nice to meet you!",
              1000,
              "I'm backend developer.",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Ssoulisack"
            className="my-icon transition-colors"
          >
            <GithubIcon size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/sackdvl/"
            className="my-icon transition-colors"
          >
            <LinkedinIcon size={30} />
          </a>
          <a
            href="soulisack2498@gmail.com"
            className="my-icon transition-colors"
          >
            <MailIcon size={30} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
