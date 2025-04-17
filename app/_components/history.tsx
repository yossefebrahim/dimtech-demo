"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CardSlider from "./cardSlider";

const History = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    margin: "-120px 0px",
    amount: 0.5, // Trigger when at least 50% of the section is visible
    once: false,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const timelineData = [
    { year: 2016, label: "Dimtech Journey Started" },
    { year: 2018, label: "Algorithmic Services" },
    { year: 2019, label: "Expand Our Footprint" },
    { year: "2020–2022", label: "Electronic Trading Platform" },
    { year: 2023, label: "Share Capital for Growth" },
    { year: 2024, label: "DeepFi Technology" },
  ];

  const percent = ((activeIndex + 1) / timelineData.length) * 100;

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  useEffect(() => {
    // Check if device is desktop
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    if (!isInView) return;
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isInView) return;

    // Prevent body scroll if not at first year
    if (activeIndex > 0) {
      e.preventDefault();
    }
    setTouchEnd(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isInView) return;

    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe up
        if (activeIndex < timelineData.length - 1) {
          setActiveIndex((prev) => prev + 1);
        }
      } else {
        // Swipe down
        if (activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
        }
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!isInView) return;

      // Allow body scroll if at first year and scrolling up, or at last year and scrolling down
      if (
        (activeIndex === 0 && e.deltaY < 0) ||
        (activeIndex === timelineData.length - 1 && e.deltaY > 0)
      ) {
        return;
      }

      // Prevent body scroll if not at first year
      if (activeIndex > 0) {
        e.preventDefault();
      }

      if (e.deltaY > 0) {
        // Scrolling down
        if (activeIndex < timelineData.length - 1) {
          e.preventDefault();
          setActiveIndex((prev) => prev + 1);
        }
      } else {
        // Scrolling up
        if (activeIndex > 0) {
          e.preventDefault();
          setActiveIndex((prev) => prev - 1);
        }
      }
    };

    if (isInView) {
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, isInView, touchStart, touchEnd]);

  // Add touch event handlers to the timeline container
  const handleContainerTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleContainerTouchMove = (e: React.TouchEvent) => {
    // Allow body scroll if at first year and swiping up, or at last year and swiping down
    if (
      (activeIndex === 0 && e.touches[0].clientY > touchStart) ||
      (activeIndex === timelineData.length - 1 &&
        e.touches[0].clientY < touchStart)
    ) {
      return;
    }

    // Prevent body scroll if not at first year
    if (activeIndex > 0) {
      e.preventDefault();
    }
    setTouchEnd(e.touches[0].clientY);
  };

  const handleContainerTouchEnd = () => {
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe up
        if (activeIndex < timelineData.length - 1) {
          setActiveIndex((prev) => prev + 1);
        }
      } else {
        // Swipe down
        if (activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
        }
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="container py-24  flex flex-col justify-center"
      id="history"
      ref={sectionRef}
      onTouchStart={handleContainerTouchStart}
      onTouchMove={handleContainerTouchMove}
      onTouchEnd={handleContainerTouchEnd}
      style={{
        touchAction: activeIndex > 0 ? "none" : "auto",
        minHeight: isDesktop ? "100vh" : "auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-40 items-center">
        <div>
          <motion.h3
            className="text-white text-size40 font-extrabold leading-[125%] text-center lg:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            History
          </motion.h3>
          <motion.p
            className="text-size14 md:text-size18 text-white mt-4 font-medium leading-[150%] text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insight. Data. Clarity. Founded in 2016 in Paris, Dimtech is a
            pioneering French laboratory dedicated to developing quantitative
            and systematic trading strategies, alongside advanced electronic
            trading execution systems. Our foundation rests on state-of-the-art
            technology and a collaborative culture rooted in academic
            excellence, driving continuous innovation and delivering consistent
            success.
          </motion.p>
        </div>
        <CardSlider activeYearIndex={activeIndex} />
      </div>

      <div className="relative w-full px-4 mt-16 md:mt-32">
        {/* line */}
        <div className="relative h-[2px] rounded-full overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-700" />
          <div className="absolute inset-0 bg-white z-10" />
          <div
            className="absolute h-full bg-gradient-to-r from-purple-300 to-purple-600 z-20 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between mb-3 gap-4 sm:gap-0">
          {timelineData.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="cursor-pointer flex-1 mx-1 sm:mx-2 text-center sm:text-left"
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className={`text-size14 sm:text-size16 text-white font-normal transition-all duration-300 ${
                    isActive
                      ? "text-size14 sm:text-size16 text-white font-normal"
                      : "text-size14 sm:text-size16 text-white font-normal opacity-40"
                  }`}
                >
                  {item.year}
                </div>
                <div
                  className={`text-size12 sm:text-size16 text-white font-normal transition-all duration-300 ${
                    isActive
                      ? "text-size12 sm:text-size16 text-white font-normal"
                      : "text-size12 sm:text-size16 text-white font-normal opacity-40"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
