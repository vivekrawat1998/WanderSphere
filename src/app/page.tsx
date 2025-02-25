import React from "react";

import type { NextPage } from "next";
import HeroMain from "@/components/heroSection/HeroMain";
import FeaturesMain from "@/components/featuresSection/FeaturesMain";
import ShortCutsMain from "@/components/shortCutsSection/ShortCutsMain";
import TopToursMain from "@/components/topToursSection/TopToursMain";
import TopAttractionsMain from "@/components/topAttractionsSection/TopAttractionsMain";
import PartnersSectionMain from "@/components/partnersSection/PartnersSectionMain";
import AboutAgencyMain from "@/components/InfoSections/AboutAgencyMain";
import AboutOmanMain from "@/components/InfoSections/AboutOmanMain";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <HeroMain />
      <FeaturesMain />
      <TopAttractionsMain />
      <AboutOmanMain />
      <ShortCutsMain />
      <TopToursMain />
      <AboutAgencyMain />
      <PartnersSectionMain />
      {/* <div className="h-[200vh]"></div> */}
    </div>
  );
};

export default Home;
