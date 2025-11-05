import WalletIDIcon from "../../assets/coreBenefits/walletId.svg?react";
import ZKPrivacyIcon from "../../assets/coreBenefits/zkPrivacy.svg?react";
import AnalyticsIcon from "../../assets/coreBenefits/analytics.svg?react";
import AchievementsIcon from "../../assets/coreBenefits/achievements.svg?react";

const FEATURES = [
  {
    id: 1,
    icon: <WalletIDIcon className="w-[269px] h-[252.91px]" />,
    title: "Wallet ID",
    description: "Your unique on-chain identity securing reputation without depending on personal information.",
  },
  {
    id: 2,
    icon: <ZKPrivacyIcon className="w-[785px] h-[252.91px]" />,
    title: "ZK Privacy",
    description: "Prove your reputation without revealing sensitive transaction details.",
  },
  {
    id: 3,
    icon: <AnalyticsIcon className="w-[785px] h-[252.91px]" />,
    title: "Real Time Analytics",
    description: "Monitor reputation metrics in real-time with our advanced analytics dashboard.",
  },
  {
    id: 4,
    icon: <AchievementsIcon className="w-[256.87px] h-[252.91px]" />,
    title: "Achievements",
    description: "Gamified reputation building with rewards and special recognition.",
  },
];

const ProductFeatures = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 md:py-28 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-20 gap-6">
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-3xl md:text-[40px] font-medium leading-[120%] mb-6 md:mb-8">
              Unlock Capital, Not Your Data
            </h2>
            <p className="text-[#E0E1DD]/70 text-base leading-relaxed">
              ZKScore turns wallet behavior into a zk-verified trustscore that
              earns better limits in Decentralized Finance and smarter loyalty
              rewards.
            </p>
          </div>

          <button className="bg-[#00FF99] w-[159px] h-[47px] text-black font-medium px-5 py-2 rounded-lg text-base hover:bg-[#0AF572] hover:scale-105 transition-transform duration-300 whitespace-nowrap">
            Mint a.zks ID
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 auto-rows-auto">
          <div className="lg:col-span-2 lg:row-span-1 bg-gradient-to-b from-gray-800 via-black to-black  border border-[#FFFFFF]/10 rounded-[20px] p-8 md:p-10 hover:border-[#00FF99]/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,153,0.05)] hover:shadow-[0_0_25px_rgba(0,255,153,0.15)] flex flex-col min-h-[300px]">
            <div className="mb-6 text-[#00FF99] flex justify-center">
              {FEATURES[0].icon}
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-normal mb-6">
                {FEATURES[0].title}
              </h3>
              <p className="text-[#FFFFFF]/70 leading-[150%] text-sm">
                {FEATURES[0].description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:row-span-1 bg-gradient-to-b from-gray-800 via-black to-black border border-[#FFFFFF]/10 rounded-[20px] p-8 md:p-10 hover:border-[#00FF99]/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,153,0.05)] hover:shadow-[0_0_25px_rgba(0,255,153,0.15)] flex flex-col min-h-[300px]">
            <div className="mb-6 text-[#00FF99] flex justify-center">
              {FEATURES[1].icon}
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-normal mb-6">
                {FEATURES[1].title}
              </h3>
              <p className="text-[#FFFFFF]/70 leading-[150%] text-sm">
                {FEATURES[1].description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:row-span-1 bg-gradient-to-b from-gray-800 via-black to-black border border-[#FFFFFF]/10 rounded-[20px] p-8 md:p-10 hover:border-[#00FF99]/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,153,0.05)] hover:shadow-[0_0_25px_rgba(0,255,153,0.15)] flex flex-col min-h-[300px]">
            <div className="mb-6 text-[#00FF99] flex justify-center">
              {FEATURES[2].icon}
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-normal mb-6">
                {FEATURES[2].title}
              </h3>
              <p className="text-[#FFFFFF]/70 leading-[150%] text-sm">
                {FEATURES[2].description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-1 bg-gradient-to-b from-gray-800 via-black to-black border border-[#FFFFFF]/10 rounded-[20px] p-8 md:p-10 hover:border-[#00FF99]/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,153,0.05)] hover:shadow-[0_0_25px_rgba(0,255,153,0.15)] flex flex-col min-h-[300px]">
            <div className="mb-6 text-[#00FF99] flex justify-center">
              {FEATURES[3].icon}
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-normal mb-6">
                {FEATURES[3].title}
              </h3>
              <p className="text-[#FFFFFF]/70 leading-[150%] text-sm">
                {FEATURES[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;