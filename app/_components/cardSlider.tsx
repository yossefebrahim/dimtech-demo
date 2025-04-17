"use client";

import React, { useEffect, useRef, useState } from "react";

const CardSlider = ({ activeYearIndex }: any) => {
  const cardsBoxRef = useRef<HTMLDivElement>(null);
  const [arrIndexes, setArrIndexes] = useState<number[]>([]);
  const didMount = useRef(false);

  useEffect(() => {
    const el = cardsBoxRef.current;
    if (!el) return;

    const imageNodes = el.querySelectorAll(".card:not(.hide)");
    const initialIndexes = Array.from(imageNodes).map((_, i) => i);
    setArrIndexes(initialIndexes);
  }, []);

  useEffect(() => {
    const el = cardsBoxRef.current;
    if (!el) return;

    const imageNodes = el.querySelectorAll(".card:not(.hide)");
    arrIndexes.forEach((index, i) => {
      if (imageNodes[i]) {
        imageNodes[i].setAttribute("data-slide", String(index));
      }
    });
  }, [arrIndexes]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    handleNext();
  }, [activeYearIndex]);

  const handleNext = () => {
    setArrIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes.unshift(newIndexes.pop()!);
      return newIndexes;
    });
  };

  const cards = [
    {
      year: "2016",
      title: "Expand Our Footprint in Asia",
      description:
        "Dimtech expanded to Tianjin, China, to strengthen its presence in the Chinese market and provide specialized R&D advisory services in quantitative trading strategies, with a focus on China’s futures commodity market. The firm partners with leading universities, such as Tsinghua University, to advance academic research and foster innovation.",
    },
    {
      year: "2018",
      title: "Algorithmic Trading Services",
      description:
        "Dimtech is broadening its services by offering algorithmic trading solutions for CTAs, utilizing advanced quantitative methods and technology. To drive innovation, the firm has expanded its R&D team by integrating PhD candidates and strengthening collaborations with top universities.",
    },
    {
      year: "2019",
      title: "Expand Our Footprint in Asia",
      description:
        "Dimtech expanded to Tianjin, China, to strengthen its presence in the Chinese market and provide specialized R&D advisory services in quantitative trading strategies, with a focus on China’s futures commodity market. The firm partners with leading universities, such as Tsinghua University, to advance academic research and foster innovation.",
    },
    {
      year: "2020 - 2022",
      title: "Dimtech Electronic Trading Platform",
      description:
        "Dimtech developed an Electronic Trading Platform to integrate and automate trading multi-strategies, optimizing order execution and minimizing slippage risk. Initially designed for internal use, it enhances precision and efficiency in high-frequency and algorithmic trading.",
    },
    {
      year: "2023",
      title: "Expand Our Footprint in Asia",
      description:
        "Dimtech expanded to Tianjin, China, to strengthen its presence in the Chinese market and provide specialized R&D advisory services in quantitative trading strategies, with a focus on China’s futures commodity market. The firm partners with leading universities, such as Tsinghua University, to advance academic research and foster innovation.",
    },
    {
      year: "2024",
      title: "DeepFi Technology",
      description:
        "Dimtech leverages AI-driven automation for trading signals, portfolio management, equity research, and financial analysis. It seeks to revolutionize and democratize traditional investment practices spanning corporate finance to financial engineering while making them accessible to all investors. With the deployment of its DeepFi technology in the DIFC, Dubai, Dimtech solidifies",
    },
  ];

  return (
    <div>
      <div className="cards-box" ref={cardsBoxRef}>
        {Array.from({ length: 6 }, (_, i) => ({
          title: cards[activeYearIndex]?.title,
          description: cards[activeYearIndex]?.description,
        })).map((card, i) => (
          <div className={`card ${i === 0 ? "hide" : ""}`} key={i}>
            <div className="content-placeholder card-gradient">
              <div className="text-white text-size20 font-bold mb-3">
                {card.title}
              </div>
              <div className="text-size16 md:text-size20 font-medium text-white opacity-80">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
