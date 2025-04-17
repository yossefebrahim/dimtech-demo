import React from "react";

const BackgroundLayers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="fixed flex flex-col justify-between items-stretch w-full h-screen">
      <div className="bg-[var(--accent-200)] relative flex justify-center items-center h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[var(--accent-100)]">
          {/* Three Layers */}
          <div
            className="absolute inset-0 h-full z-20"
            style={{ filter: "blur(120px)" }}
          >
            <div
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="absolute left-[30vw] w-[50vw] h-screen rounded-[1000px] bg-[#0f62fe] animate-rotate3d"
            ></div>
            <div className="absolute left-[30vw] w-[50vw] h-[40vh] rounded-[1000px] mx-auto bg-[#000410]"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40em] h-[40em] rounded-full bg-[#001141]"></div>
          </div>

          {/* Fourth Layer - Contains Six Sub-layers */}
          <div
            className="absolute inset-0 h-full z-30 mix-blend-overlay"
            style={{ filter: "blur(120px)" }}
          >
            <div className="absolute right-0 w-[40vw] h-screen rounded-[1000px] mx-auto bg-[#001d6c]"></div>
            <div className="absolute w-[30vw] h-screen rounded-[1000px] bg-[#001141]"></div>
            <div className="absolute w-[60vw] h-[40vh] rounded-[1000px] ml-auto bg-[#001141]"></div>
            <div className="absolute left-0 right-0 w-[30vw] h-[30vh] rounded-[1000px] mx-auto bg-[#001141]"></div>
            <div className="absolute inset-0 w-[30vw] h-[30vh] rounded-[1000px] mx-auto bg-[#000410]"></div>
            <div className="absolute right-[-25vw] w-[60vw] h-[50vh] rounded-[1000px] ml-auto bg-[#0f62fe]"></div>
          </div>

          {/* Fifth Layer - Local Background Image with Opacity */}
          <div
            className="absolute inset-0 w-full h-full block opacity-20 z-0"
            style={{
              backgroundImage: "url('/assets/images/transparent.png')",
              mixBlendMode: "overlay",
              backgroundPosition: "0 0",
              backgroundSize: "100px",
            }}
          ></div>

          <div className="relative z-50 h-full overflow-y-auto  text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundLayers;
