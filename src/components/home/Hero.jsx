import React from "react";
import Button from "../common/Button";
import dotPattern from "../../assets/dotPattern.svg";
import ellipseHero from "../../assets/ellipseHero.svg";
import cardFrame from "../../assets/cardFrame.svg";
import cardFrame2 from "../../assets/cardFrame2.svg";


const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary-darker overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#0CFF85] to-[#000000]" />

        {/* Dot Pattern SVG Background */}
         <img
          src="/Rectangle.png"
          alt="Dot Pattern Background"
          className="absolute inset-0 w-full h-full object-cover  mix-blend-soft-light pointer-events-none"
        />
        <img
          src={dotPattern}
          alt="Dot Pattern Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-soft-light"
        />

        {/* Top Right Gradient Ellipse */}
        <img
          src={ellipseHero}
          alt=""
          className="absolute -top-40 -right-40 w-[800px] h-[800px] opacity-[2.2] blur-3xl pointer-events-none"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 2xl:px-18 pt-28 pb-20">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{ columnGap: "125.46px" }}
        >
          {/* Left Content */}
          <div className="z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] mt-20 font-medium font-geist text-white leading-40 lg:leading-[60px] max-w-lg">
                Wallet Reputation,
                <br /> Reimagined With ZK
              </h1>
            </div>

            <p className="text-[14px] sm:text-[16px] lg:pr-[122px] mt-[25px] lg:mt-[30px]   text-gray-400 max-w-xl leading-[160%]">
              A zk-verified wallet score that any protocol can price, any chain
              can read, and only you can reveal.
            </p>

            <div className="flex flex-col sm:flex-row mt-[60px] gap-[10px]">
              <Button
                className="w-[159px] h-[47px] font-medium leading-[160%] sm:text-[16px]"
                variant="primary"
                size="lg"
              >
                Create ID
              </Button>
              <Button
                className="w-[159px] h-[47px] bg-[#161616] font-[300] leading-[160%] sm:text-[16px]"
                variant="outlined"
                size="lg"
              >
                Launch App
              </Button>
            </div>
          </div>
         

          {/* Right Content - Card Graphics */}
          <div className="relative bottom-[20px] right-[100px] h-[500px] lg:h-[600px] scale-[1.2] md:scale-[1.3] transition-transform duration-500">
            {/* Main Card */}
            <div className="absolute top-1/2 left-[56%] -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[430.41px] sm:h-[280px]">
              <img
                src={cardFrame}
                alt="Wallet Card"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Secondary Card with 100K */}
            <div className="absolute top-1/2 right-0 -translate-y-1/4 w-[220px] sm:w-[230px]">
              <img
                src={cardFrame2}
                alt="100K Active Wallets"
                className="w-full h-auto relative top-[100px]  transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative Glow Effects */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary-green/10 rounded-full blur-[100px] animate-pulse" /> */}
          </div>
        </div>
      </div>
      

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-darker to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
