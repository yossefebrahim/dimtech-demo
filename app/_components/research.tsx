"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const Research = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="container py-24" id="research" ref={sectionRef}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.h3
            className="text-white text-size40 font-extrabold leading-[125%]"
            initial={{ opacity: 0, y: -50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Research Background
          </motion.h3>
          <motion.p
            className="text-size14 md:text-size18  text-white  mt-4 font-medium
 md:w-[90%]"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dimtech Research Foundation’s work on financial market behavior
            draws on Giorgio Parisi’s swarm physics, particularly his spin glass
            theory and complex systems study. Parisi’s methods examine how
            individual market participants interact to create emergent
            behaviors. These insights help model market microstructure, where
            decentralized decisions lead to patterns like price fluctuations and
            volatility clustering. By combining AI with the Swarm approach,
            Dimtech analyzes vast financial data to uncover hidden patterns and
            market inefficiencies, providing a framework for understanding the
            self-organizing behavior of markets.
          </motion.p>
        </div>
        <motion.div
          className="w-full h-[450px] flex justify-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            loading="lazy"
            src={`assets/images/research.png`}
            alt={`world map`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
            className="h-[80%]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Research;
