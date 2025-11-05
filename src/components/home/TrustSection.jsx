import React from "react";
import trustDiagram from "../../assets/trustSection/trustDiagram.svg";
import walletsStat from "../../assets/trustSection/walletsStat.svg";
import multiChainStat from "../../assets/trustSection/multiChainStat.svg";
import integrationStat from "../../assets/trustSection/integrationStat.svg";

const TrustSection = () => {
  return (
    <section className="relative w-full py-24 bg-black flex flex-col items-center text-center overflow-hidden">
      {/* Section Heading */}
      <div className="w-[676px] h-[107px]">
        <h2 className="text-[36px] md:text-[40px] md:leading-[120%] font-medium text-white z-10">
          Trustworthiness That Travels
        </h2>

        <p className="text-[#e0e1dd]/80 max-w-2xl text-[16px] mt-[40px] leading-relaxed z-10">
          Converts multi-chain activity into a portable, privacy-first
          trustscore. Share a proof of your history to qualify for better terms
          across DeFi applications and Loyalty Rewards.
        </p>
      </div>

      {/* Central Trust Diagram */}
      <div className="flex justify-center mt-[80px] z-10">
        <img
          src={trustDiagram}
          alt="Trust Diagram"
          className="max-w-[1024px] w-[1074px] h-[400px] opacity-100 brightness-100 object-contain"
        />
      </div>

      {/* Stats Section */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center w-full max-w-[1440px] mx-auto mt-[80px] gap-[24px] z-10">
          <img
            src={walletsStat}
            alt="Unique Wallets Active Globally"
            className="w-[397px] h-[107px] hover:scale-105 transition-transform duration-500 object-contain"
          />
          <img
            src={multiChainStat}
            alt="Multi Chain Coverage"
            className="w-[397px] h-[107px] hover:scale-105 transition-transform duration-500 object-contain"
          />
          <img
            src={integrationStat}
            alt="Integration Easy"
            className="w-[397px] h-[107px] hover:scale-105 transition-transform duration-500 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
