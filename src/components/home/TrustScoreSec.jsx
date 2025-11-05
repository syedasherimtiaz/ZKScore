import React from 'react';
import WalletAge from "../../assets/trustScore/WalletAge.svg";
import DEX from "../../assets/trustScore/DEX.svg";
import Liquidity from "../../assets/trustScore/Liquidity.svg";
import Lending from "../../assets/trustScore/Lending.svg";
import NFT from "../../assets/trustScore/NFT.svg";
import Bridge from "../../assets/trustScore/Bridge.svg";
import Governance from "../../assets/trustScore/Governance.svg";
import Staking from "../../assets/trustScore/Staking.svg";
import VerticalLine from "../../assets/trustScore/Vertical-Line.svg";

const TrustScoreSec = () => {
  const rowOne = [
    {
      icon: WalletAge,
      title: "Wallet Age",
      desc: "Older wallets demonstrate long-term commitment to DeFi.",
      tag: "100 per year (max 1000)",
    },
    {
      icon: DEX,
      title: "DEX Trading",
      desc: "Trade on decentralized exchanges to build trading reputation.",
      tag: "1.0 score per swap",
    },
    {
      icon: Liquidity,
      title: "Liquidity",
      desc: "Provide liquidity to earn fees and build reputation.",
      tag: "4.0 score per LP",
    },
    {
      icon: Lending,
      title: "Lending",
      desc: "Supply liquidity and borrow assets responsibly.",
      tag: "2.0 score per action",
    },
  ];

  const rowTwo = [
    {
      icon: NFT,
      title: "NFT Trading",
      desc: "Trade NFTs and participate in digital asset markets.",
      tag: "1.0 score per trade",
    },
    {
      icon: Bridge,
      title: "Bridge",
      desc: "Move assets across different blockchain networks.",
      tag: "1.5 score per bridge",
    },
    {
      icon: Governance,
      title: "Governance",
      desc: "Participate in protocol governance and voting.",
      tag: "5.0 score per vote",
    },
    {
      icon: Staking,
      title: "Staking",
      desc: "Stake tokens and participate in network security.",
      tag: "2.5 score per stake",
    },
  ];

  const CardRow = ({ cards }) => (
    <div className="flex flex-col lg:flex-row">
      {cards.map((card, i) => (
        <React.Fragment key={i}>
          <div className="flex-1 p-8 lg:p-8">
            {/* Icon Container */}
            <img 
                src={card.icon} 
                alt={card.title}
                className="w-11 h-11 mb-[32px] object-contain"
              />

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white">
              {card.title}
            </h3>
            <p className="text-gray-400 text-[16px] leading-[160%] mb-8">
              {card.desc}
            </p>

            {/* Score Badge */}
            <span className="inline-block bg-[#0D1410] px-4 py-2 text-sm text-gray-300 border border-[#1A2920] rounded-lg">
              {card.tag}
            </span>
          </div>

          {/* Vertical Divider Line - Hidden on mobile, shown on desktop between cards */}
          {i < cards.length - 1 && (
            <div className="hidden lg:flex items-stretch">
              <img 
                src={VerticalLine} 
                alt="" 
                className="h-full w-auto object-fill"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] sm:text-[40px] font-medium mb-[32px] tracking-[0%] leading-[120%]">
            Trustscore Through On-Chain Behaviour
          </h2>
          <p className="text-gray-400 text-[16px] sm:text-[16px] font-normal mx-auto max-w-[980px] mb-[80px] leading-[160%]">
            A trustscore that grows directly from on-chain behaviour. Every wallet has the ability to earn credibility through activity and time, with scores awarded for transactions and wallet age. The result is a score that is fair, transparent, and truly decentralized.
          </p>
        </div>

        {/* Main Container with top and bottom borders only */}
        <div className="border-t border-b border-l-0 border-r-0 border-[#1A2920]">
          {/* First Row of 4 Cards */}
          <CardRow cards={rowOne} />

          {/* Horizontal Divider between rows */}
          <div className="border-t border-[#1A2920]"></div>

          {/* Second Row of 4 Cards */}
          <CardRow cards={rowTwo} />
        </div>
      </div>
    </section>
  );
};

export default TrustScoreSec;