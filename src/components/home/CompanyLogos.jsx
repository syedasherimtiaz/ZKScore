import { motion as Motion } from "framer-motion";
import Neteller from "../../assets/companyLogos/Neteller.svg";
import Skrill from "../../assets/companyLogos/Skrill.svg";
import ApplePay from "../../assets/companyLogos/ApplePay.svg";
import AstroPay from "../../assets/companyLogos/AstroPay.svg";
import VisaDebit from "../../assets/companyLogos/VisaDebit.svg";
import PayPal from "../../assets/companyLogos/PayPal.svg";

const logos = [Neteller, Skrill, ApplePay, AstroPay, VisaDebit, PayPal];

const CompanyLogos = () => {
  return (
    <div className="relative top-[-43px] w-full bg-primary-darker py-20 overflow-visible">
      {/* Edge fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-gradient-to-r from-primary-darker to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-gradient-to-l from-primary-darker to-transparent z-10 pointer-events-none" />

      {/* Moving container */}
      <div className="px-6 sm:px-10 lg:px-14 xl:px-18 max-w-[1440px] mx-auto">
        <div className="flex overflow-hidden whitespace-nowrap">
          <Motion.div
            className="flex gap-[60px] items-center"
            animate={{ x: ["0%", "-100%"] }}    
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {/* Original logos */}
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="h-12 w-auto opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-300"
              />
            ))}

            {/* Duplicate set for infinite scroll */}
            {logos.map((logo, index) => (
              <img
                key={`duplicate-${index}`}
                src={logo}
                alt={`logo-duplicate-${index}`}
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;