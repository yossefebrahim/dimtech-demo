"use client";
import { Card, CardBody, Tab, Tabs } from "@heroui/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
const Contactus = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("paris");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <div className="container py-24" ref={sectionRef} id="contact">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-16">
        <div>
          <motion.h3
            className="text-white text-size40 font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.h3>
          <motion.p
            className="text-size16 md:text-size18 text-white mt-3 font-medium"
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with us. Whether you have inquiries about our services,
            partnerships, or opportunities, our team is ready to assist you.
            Find our office locations, email, and phone details here.
          </motion.p>
          <motion.div
            className="flex w-full flex-col mt-5 "
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
              selectedKey={selectedCountry}
              onSelectionChange={(key) => {
                setSelectedCountry(key as string);
              }}
              classNames={{
                cursor: "w-full bg-primary text-white  bg-[#F780AC]",
                base: "text-white",
                tabList: "flex justify-between w-full ",
                tab: "h-[50px]  data-[hover=true]:bg-[#493D99] data-[hover=true]:opacity-100 data-[hover=true]:rounded-sm transition-colors duration-200",
                tabContent: "text-white lg:text-size18 text-size14",
                panel: "w-full ",
              }}
            >
              <Tab key="paris" title="Paris">
                <Card className="card-gradient text-white">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-md">
                      <li>
                        <a
                          className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="mailto:john@doe.com"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>

                          <span className="flex-1 text-gray-700">
                            john@doe.com
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="tel:0123456789"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>

                          <span className="flex-1 text-gray-700">
                            0123456789
                          </span>
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="tianjin" title="Tianjin">
                <Card className="card-gradient text-white">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-md">
                      <li>
                        <a
                          className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="mailto:john@doe.com"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>

                          <span className="flex-1 text-gray-700">
                            john@doe.com
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="tel:0123456789"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>

                          <span className="flex-1 text-gray-700">
                            0123456789
                          </span>
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="dubai" title="Dubai">
                <Card className="card-gradient text-white">
                  <CardBody className="p-8">
                    <ul className="space-y-4 text-md">
                      <li>
                        <a
                          className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="mailto:john@doe.com"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>

                          <span className="flex-1 text-gray-700">
                            john@doe.com
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="tel:0123456789"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>

                          <span className="flex-1 text-gray-700">
                            0123456789
                          </span>
                        </a>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </motion.div>
        </div>

        <div className="lg:col-span-2">
          <motion.img
            loading="lazy"
            src={`assets/images/${selectedCountry}.png`}
            alt={`world map`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
