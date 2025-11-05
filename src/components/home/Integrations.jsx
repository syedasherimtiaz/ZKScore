import React, { useState } from "react";
import { Check } from "lucide-react";
import logo from "../../assets/integrations/logo.svg";
import CopyIcon from "../../assets/integrations/copyIcon.svg";

const Integrations = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(""), 2000);
  };

  const installCode = "npm install @zkscore/sdk";
  const userScoreCode = `import { ZKScore } from '@zkscore/sdk';

const zkscore = new ZKScore({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

const userScore = await zkscore.getScore(userAddress);

// Use score for loan decisions
if (userScore.creditRating > 700) {
  enableUndercollateralizedLoan();
}`;

  return (
    <section className="w-full bg-black py-24 px-4 sm:px-10 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center text-left max-w-[600px]">
        <h2 className="text-[36px] md:text-[40px] font-medium text-white mb-[40px] pr-[100px] leading-[120%]">
          Easy Integration With ZKScore SDK
        </h2>
        <p className="text-gray-300 text-[16px] font-normal mb-[60px] pr-[110px] leading-[160%]">
          ZKScore’s SDK makes it seamless to integrate reputation data into your
          dApp or protocol. In just a few lines of code, you can access wallet
          trust scores, request zk-proofs, and tailor experiences for users
          based on verified credibility.
        </p>
        <button className="bg-[#0CFF85] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#0AF572] hover:scale-105 transition-transform duration-300 whitespace-nowrap w-fit">
          Mint a .zks ID
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col gap-6 w-full max-w-[520px]">
        {/* BOX 1 */}
        <div className="relative bg-[#0B0F0C]/80 border border-[#1C1F1D] rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              {/* 🔹 Logo before heading */}
              <img
                src={logo}
                alt="ZKScore Logo"
                className="w-[24px] h-[24px] object-contain"
              />
              <h3 className="text-white font-medium text-[20px] leading-[120%]">
                Install ZKScore SDK
              </h3>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy("install", installCode)}
              className="text-gray-400 hover:opacity-80 transition"
            >
              {copied === "install" ? (
                <Check className="text-[#0CFF85] w-[18px] h-[18px]" />
              ) : (
                <img
                  src={CopyIcon}
                  alt="Copy"
                  className="w-[18px] h-[18px] object-contain"
                />
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#1b263b]" />

          <div className="px-6 py-4">
            <code className="block text-[#0CFF85] font-mono text-sm">
              {installCode}
            </code>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="relative bg-[#0B0F0C]/80 border border-[#1C1F1D] rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              {/* 🔹 Logo before heading */}
              <img
                src={logo}
                alt="ZKScore Logo"
                className="w-[24px] h-[24px] object-contain"
              />
              <h3 className="text-white font-medium text-[20px] leading-[120%]">
                Initialize And Get User Score
              </h3>
            </div>
            <button
              onClick={() => handleCopy("userScore", userScoreCode)}
              className="text-gray-400 hover:opacity-80 transition"
            >
              {copied === "userScore" ? (
                <Check className="text-[#0CFF85] w-[18px] h-[18px]" />
              ) : (
                <img
                  src={CopyIcon}
                  alt="Copy"
                  className="w-[18px] h-[18px] object-contain"
                />
              )}
            </button>
          </div>

          {/* 🔹 Full-width Divider */}
          <div className="w-full h-[1px] bg-[#1b263b]" />

          <div className="px-6 py-4">
            <pre className="text-[#0CFF85] font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {userScoreCode}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
