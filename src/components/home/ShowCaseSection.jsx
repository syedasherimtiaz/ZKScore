import React from "react";
import CompanyLogos from "./CompanyLogos";
import TrustSection from "./TrustSection";
import ellipseTrustSec from "../../assets/trustSection/ellipseTrustSec.svg";

const ShowcaseSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-radial from-[#0A0F0D] via-[#070A08] to-[#050807]">
      {/* Ellipse that covers both sections */}
      <img
        src={ellipseTrustSec}
        alt="Background Glow Ellipse"
        className="absolute -top-60 -left-40 w-[900px] h-[2100px] opacity-[40%] blur-3xl pointer-events-none select-none"
      />

      {/* Company Logos */}
      <div className="relative z-10">
        <CompanyLogos />
      </div>

      {/* Trust Section */}
      <div className="relative z-10">
        <TrustSection />
      </div>
    </section>
  );
};

export default ShowcaseSection;
