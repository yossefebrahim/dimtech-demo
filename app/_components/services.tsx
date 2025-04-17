"use client";
import React, { useState, Key, useEffect } from "react";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

interface AnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
  markers: never[];
  props: any;
}

const Services = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<AnimationData | null>(
    null
  );
  const [animations, setAnimations] = useState<{
    Research: AnimationData | null;
    Technology: AnimationData | null;
    Advisory: AnimationData | null;
  }>({
    Research: null,
    Technology: null,
    Advisory: null,
  });

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const [research, technology, advisory] = await Promise.all([
          import("@/public/assets/json/research.json"),
          import("@/public/assets/json/technology.json"),
          import("@/public/assets/json/advisory.json"),
        ]);

        setAnimations({
          Research: research.default as AnimationData,
          Technology: technology.default as AnimationData,
          Advisory: advisory.default as AnimationData,
        });
        setSelectedDiagram(research.default as AnimationData);
      } catch (error) {
        console.error("Error loading animations:", error);
      }
    };

    loadAnimations();
  }, []);

  const handleTabChange = (key: Key) => {
    switch (key.toString()) {
      case "Research":
        setSelectedDiagram(animations.Research);
        break;
      case "Technology":
        setSelectedDiagram(animations.Technology);
        break;
      case "Advisory":
        setSelectedDiagram(animations.Advisory);
        break;
      default:
        setSelectedDiagram(animations.Research);
    }
  };

  if (!selectedDiagram) {
    return null; // or a loading spinner
  }

  return (
    <div className="container py-24 mt-[200px] md:mt-0" id="services">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 min-h-[700px] md:h-[700px]">
        <motion.div
          className="flex w-full flex-col mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-white text-size40 font-extrabold leading-[125%]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Services
          </motion.h3>

          <motion.p
            className="text-size16 md:text-size18 opacity-[.75] text-white md:max-w-[65%] mt-3 font-medium leading-[150%] mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dimtech leverages data-driven insights and advanced computational
            modeling to offer clients intelligent quantitative trading systems
            that autonomously design and execute strategies with minimal human
            intervention. These cutting-edge systems analyze preselected data
            sets and utilize sophisticated "What-If scenario" modeling to
            generate Alpha.
          </motion.p>
          <Tabs
            aria-label="Options"
            variant="underlined"
            size="md"
            color="primary"
            onSelectionChange={handleTabChange}
            classNames={{
              cursor: "w-full bg-primary text-white bg-[#F780AC] ",
              base: "text-white  ",
              tabList: "flex justify-between w-full ",
              tab: "h-[50px] data-[hover=true]:bg-[#493D99] data-[hover=true]:opacity-100 transition-colors duration-200",
              tabContent: "text-white lg:text-size18 text-size14",
              panel: "w-full ",
            }}
          >
            {["Research", "Technology", "Advisory"].map((tab, index) => (
              <Tab key={tab} title={tab}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-gradient text-white">
                    <CardBody className="text-white opacity-[.75]">
                      {tab === "Research" && (
                        <div>
                          <div>
                            <h6 className="text-size18 font-extrabold">
                              AI-Powered Investing :
                            </h6>
                            <p className="text-size14 font-normal text-[#D9D9D9]">
                              Dimtech uses data, machine learning, and
                              scienceguided by PhD researchers and financial
                              engineers to create, improve, and test investment
                              strategies, enhance trading signals, and find new
                              opportunities with AI and analytics.
                            </p>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-size18 font-extrabold ">
                              Seamless Deployment & Scaling :
                            </h6>
                            <p className="text-size14 font-normal text-[#D9D9D9]">
                              Validated strategies undergo backtesting, paper
                              trading, and live trading before being
                              industrialized and integrated into our electronic
                              trading platform for efficient scaling.
                            </p>
                          </div>
                        </div>
                      )}
                      {tab === "Technology" && (
                        <div>
                          <div>
                            <h6 className="text-size18 font-extrabold">
                              DeepFi :
                            </h6>
                            <p className="text-size14 font-normal text-[#D9D9D9]">
                              Developed by Dimtech, DeepFi is a multi-strategy
                              platform featuring automated trading systems,
                              designed to deliver efficient execution across
                              global financial markets
                            </p>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-size18 font-extrabold">
                              Flexible Trading Solutions :
                            </h6>
                            <p className="text-size14 font-normal text-[#D9D9D9]">
                              Supporting both low- and high-frequency trading,
                              DeepFi adapts to a wide range of strategies,
                              including directional trading, arbitrage, and
                              market-making, among others.
                            </p>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-size18 font-extrabold">
                              Robust Monitoring & Risk Management :
                            </h6>
                            <p className="text-size14 font-normal text-[#D9D9D9]">
                              A real-time monitoring and alert system, combined
                              with expert oversight, ensures optimal safety and
                              performance at all times.
                            </p>
                          </div>
                        </div>
                      )}
                      {tab === "Advisory" && (
                        <div>
                          <div>
                            <h6 className="text-size18 font-extrabold">
                              R&D Support for Finance :
                            </h6>
                            <p className="text-size14 font-normal text-[#D9D9D9]">
                              Our R&D teams provide expert solutions, crafting
                              and enhancing custom tools. Leveraging
                              cutting-edge science, we deliver tailored
                              financial technology solutions while keeping costs
                              highly competitive.
                            </p>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-size18 font-extrabold">
                              Our expertise includes, but not limited to:
                            </h6>
                            <ul className="text-size14 font-normal text-[#D9D9D9] list-disc mx-8">
                              <li className="mt-2">
                                Investment strategies & Algo Trading Solutions
                              </li>
                              <li className="mt-2">
                                Electronic Trading System
                              </li>
                              <li className="mt-2">
                                Liquidity & Market- Making Solutions
                              </li>
                              <li className="mt-2">
                                Portfolio, Risks Management & Optimization.
                              </li>
                              <li className="mt-2">
                                Fraud Detection & Security
                              </li>
                              <li className="mt-2">Data- Driven Analytics</li>
                              <li className="mt-2">
                                Ethical, ESG, and Sharia Compliance Solutions
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </motion.div>
              </Tab>
            ))}
          </Tabs>
        </motion.div>
        <div className="diagram h-[85%]">
          <Lottie
            animationData={selectedDiagram}
            loop={true}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
