import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import StackSection from "../components/StackSection";
import MoreSection from "../components/MoreSection";
// Animations
import { domAnimation, m, LazyMotion } from "framer-motion";
import { pageAnim } from "../animation";

const AboutUs = () => {
  const technologies = [
    { icon: ["fab", "react"], name: "React" },
    { icon: ["fab", "js"], name: "Javascript" },
    { icon: ["fa", "bolt"], name: "Supabase" },
    { icon: ["fab", "css3"], name: "CSS3" },
    { icon: ["fab", "dropbox"], name: "TailwindCSS" },
    { icon: ["fab", "sass"], name: "Sass" },
    { icon: ["fab", "html5"], name: "HTML5" },
    { icon: ["fab", "git"], name: "Git" },
    { icon: ["fab", "github"], name: "Github" },
    { icon: ["fab", "figma"], name: "Figma" },
  ];

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div variants={pageAnim} initial="hidden" animate="show">
        <AboutSection />
        <StackSection technologies={technologies} />
        <MoreSection />
      </m.div>
    </LazyMotion>
  );
};

export default AboutUs;
