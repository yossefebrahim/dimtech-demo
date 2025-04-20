"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const Executive = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
  };

  const teamList = [
    {
      name: "Daniel Melhem Ph.D",
      role: "Founder - CEO",
      img: "/assets/images/teams/daniel.png",
      linkedinLink: "https://www.linkedin.com/in/daniel-melhem-phd-1656034",

      description:
        "With 15+ years in quantitative finance, Daniel is passionate about leveraging innovation,  technology, and creating value for our clients through the fusion of science and business.",
    },
    {
      name: "Geoffrey Ducournau Ph.D",
      role: "Lead of R&D",
      img: "/assets/images/teams/geffory.png",
      linkedinLink: "https://www.linkedin.com/in/geoffreyducournau",

      description:
        "Drives R&D programs from discovery and prototyping through development, integration, and post-launch monitoring, with a focus on quantitative and digitalization solutions in the finance industry.",
    },

    {
      name: "Ramzi Shalak",
      role: "CGDO",
      img: "/assets/images/teams/ramzi.png",
      linkedinLink: "https://www.linkedin.com/in/ramzi-shalak-35b53125",

      description:
        "Leads strategic growth initiatives, forging key partnerships and identifying new market opportunities to drive business expansion.",
    },
    {
      name: "Dominique Larue",
      role: "CIS",
      img: "/assets/images/teams/domonic.png",
      linkedinLink: "https://www.linkedin.com/in/dominique-larue-81b0a434",

      description:
        "With 30+ years in asset management at UBS, Crédit Agricole, and HSBC, Dominique is responsible for designing quantitative trading strategies to capture alpha.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('assets/images/bg-executive.png')" }}
      id="executive"
    >
      <div className="container py-24">
        <motion.h3
          className="text-white text-size42 font-extrabold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Executive
        </motion.h3>
        <motion.p
          className="m-auto text-size16 md:text-size24 text-center  text-white md:w-[80%] mt-4 font-semibold  "
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet the experts behind Dimtech. Our leadership team brings extensive
          experience in quantitative finance, technology, and global strategy,
          ensuring cutting-edge solutions and industry-leading expertise.
        </motion.p>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            {teamList.map((team, index) => (
              <motion.div
                className="card relative group"
                initial={{ opacity: 0, x: -50 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                key={index}
              >
                {/* Card Image */}
                <div className="card-img h-[300px]">
                  <img
                    src={team?.img}
                    alt={team?.name}
                    loading="lazy"
                    width={300}
                    height={300}
                  />
                </div>

                {/* Card Tag */}
                <div className="tag">
                  <h6 className="text-size14 font-bold text-white">
                    {team?.name}
                  </h6>
                  <p className="text-size16 text-[#C8C8C8] font-normal">
                    {team?.role}
                  </p>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0  bg-[#011C61] p-3 flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 border-2 border-white rounded-[1.25rem]">
                  <h4 className="text-white text-size18 font-bold mb-1">
                    {team?.name}
                  </h4>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-size16 font-normal text-[#C8C8C8]">
                      {" "}
                      {team?.role}
                    </p>
                    <Link target="_blank" href={team?.linkedinLink}>
                      <img src="assets/images/linkedin.png" alt="linkedin" />
                    </Link>
                  </div>
                  <p className=" text-size16 font-normal text-[#C8C8C8]">
                    {team?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Executive;
