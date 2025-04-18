"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Community = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const [isDragging, setIsDragging] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 7 },
  };

  const items = Array.from({ length: 7 }, (_, i) => (
    <motion.img
      key={i}
      loading="lazy"
      src={`assets/images/logo${i + 1}.webp`}
      alt={`Logo ${i + 1}`}
      className="w-20 sm:w-24 md:w-20 h-20 sm:h-24 md:h-20 object-contain mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  ));

  return (
    <div className="container py-24" id="community" ref={sectionRef}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.h3
            className="text-white text-size40 font-extrabold leading-[125%]"
            initial={{ opacity: 0, y: -50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Community
          </motion.h3>
          <motion.p
            className="text-size14 md:text-size18  text-white  mt-4 font-medium
 leading-[150%] md:w-[70%]"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We bridge the gap between academia and industry through strategic
            collaborations with top universities and research institutions. Our
            commitment to innovation drives partnerships that advance financial
            technology and quantitative research.
          </motion.p>
        </div>
        <motion.div
          className="flex w-full flex-col "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="md"
            color="primary"
            classNames={{
              cursor: "w-full bg-primary text-white bg-[#F780AC]",
              base: "text-white",
              tabList: "flex justify-between w-full ",
              tab: "h-[50px]  data-[hover=true]:bg-[#493D99] data-[hover=true]:opacity-100 data-[hover=true]:rounded-sm transition-colors duration-200",
              tabContent: "text-white lg:text-size18 text-size14",
              panel: "w-full ",
            }}
          >
            {["Academic", "Government"].map((tab, index) => (
              <Tab key={tab} title={tab}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-gradient text-white">
                    <CardBody className="text-white opacity-[.75] p-8">
                      {tab === "Academic" && (
                        <p className="text-size18 font-normal">
                          Since 2018, our partnership with Tsinghua University,
                          University of Montpellier, École des Mines d'Alès, and
                          ESLIV has united researchers from diverse fields
                          through PhD students and CIFRE contracts. This
                          collaboration fosters a cross-disciplinary research.
                        </p>
                      )}
                      {tab === "Government" && (
                        <p className="text-size18 font-normal">
                          Since 2016, Dimtech has been recognized as a "Jeune
                          Entreprise Innovante" (Innovative Company).
                          Additionally, through partnerships with the ANRT,
                          Dimtech collaborates with several research
                          institutions, benefiting from European funding and
                          French state research grants.
                        </p>
                      )}
                    </CardBody>
                  </Card>
                </motion.div>
              </Tab>
            ))}
          </Tabs>
        </motion.div>
      </div>
      <motion.div
        className="card-gradient mt-20 p-4 rounded-md"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {hasAnimated && (
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="responsive"
            infinite
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={0}
            animationDuration={2000}
            animationEasingFunction="linear"
            onSlideChanged={() => setIsDragging(false)}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Community;
