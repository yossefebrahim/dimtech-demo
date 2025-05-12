"use client";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const Header = dynamic(() => import("./header"));
const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const Intro = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  const list = [
    {
      title: "Research",
      description:
        "Quant Trading Multi-Strategy Approach Focused on Market Microstructure Inefficiencies",
    },
    {
      title: "Technology",
      description:
        "Algorithmic Trading & Automated Trading Systems for CTA Strategies on DeepFi platform",
    },
    {
      title: "Advisory",
      description:
        "Custom Quant Services From R&D Solutions to Technology Deployment",
    },
  ];
  return (
    <div
      className="relative h-screen flex flex-col text-center pb-24"
      ref={sectionRef}
    >
      <Header />
      <ParticleBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]" />
      <div className="mt-[150px] container h-[100vh] text-center py-16 flex flex-col justify-center items-center">
        <motion.h2
          className="text-white text-2xl md:text-6xl font-bold z-40"
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Science-Driven Quantitative Solution
        </motion.h2>
        <motion.p
          className="md:text-4xl text-2xl mt-6 text-white font-medium z-40"
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Deep Finance
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16 md:mt-32 mt-8 pt-8"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {list.map((item, index) => (
            <motion.div
              key={index}
              className={`text-white relative ${
                index !== list.length - 1
                  ? "after:content-[''] after:absolute after:bottom-0 after:right-[-20px] after:w-[1px] after:h-[80%] after:bg-white m-auto after:hidden lg:after:block"
                  : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.6,
              }}
            >
              <h4
                className="text-size28 font-semibold
"
              >
                {item.title}
              </h4>
              <p
                className="text-size19 text-white mt-2 opacity-[.75] font-semibold
"
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
