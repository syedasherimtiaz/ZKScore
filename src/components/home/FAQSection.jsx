import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or your own SVG arrow icon

const faqs = [
  {
    question: "What is ZKScore?",
    answer:
      "ZKScore is a decentralized reputation layer that uses zero-knowledge proofs to verify wallet credibility without exposing personal information. It’s like a “trust passport” for Web3.",
  },
  {
    question: "How Does ZKScore Protect My Privacy?",
    answer:
      "ZKScore leverages zero-knowledge cryptography to validate your on-chain activities without revealing any personal or private data.",
  },
  {
    question: "Why Is Wallet Reputation Important?",
    answer:
      "A strong wallet reputation increases trust across DeFi, enabling safer transactions, better access to platforms, and reduced fraud risk.",
  },
  {
    question: "Can I Use ZKScore Across Multiple Platforms?",
    answer:
      "Yes, ZKScore integrates with multiple dApps and protocols, allowing your wallet’s reputation to travel with you across Web3.",
  },
  {
    question: "What Kinds Of Activities Affect My Score?",
    answer:
      "Activities like trading, lending, staking, and providing liquidity contribute to your score based on transparency and long-term engagement.",
  },
  {
    question: "How Does ZKScore Protect User Privacy?",
    answer:
      "ZKScore uses cryptographic proofs so users can verify actions without revealing private wallet information.",
  },
  {
    question: "Can Projects Integrate ZKScore Into Existing Smart Contracts?",
    answer:
      "Yes. Developers can easily integrate ZKScore APIs into smart contracts to enable reputation-based access or rewards.",
  },
  {
    question: "What Types Of Data Are Used To Build A Reputation Score?",
    answer:
      "ZKScore uses publicly available on-chain data such as wallet activity, transaction history, and liquidity contributions.",
  },
  {
    question: "Is ZKScore Compatible With Multiple Chains?",
    answer:
      "Absolutely. ZKScore supports multi-chain functionality, allowing users to maintain unified reputation across ecosystems.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00FF9440] blur-[180px] opacity-30 pointer-events-none"></div>

      <div className="max-w-[1440px] px-6 sm:px-10 lg:px-14 2xl:px-18 mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-center text-[36px] sm:text-[40px] font-medium mb-[48px] tracking-[0%] leading-[120%]">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-[#0D1410]/60 backdrop-blur-[32px] border border-[#1A2920] rounded-xl p-6 sm:p-7 cursor-pointer transition-all duration-300 hover:border-[#00FF94]/30"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[18px] sm:text-[20px] font-medium">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#00FF94]" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[200px] mt-[24px]" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-[160%]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
