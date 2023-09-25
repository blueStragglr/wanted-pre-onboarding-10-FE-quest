import React from "react";
import FooterIntro from "./FooterIntro";
import FooterContact from "./FooterContact";
import FooterLink from "./FooterLink";
import FooterSite from "./FooterSite";

const Footer = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-center flex-row items-start relative bottom-0 translate-y-full bg-[#5F5F5F] text-white">
        <FooterIntro />
        <FooterContact />
        <FooterLink />
        <FooterSite />
      </div>
    </div>
  );
};

export default Footer;
