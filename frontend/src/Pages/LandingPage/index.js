import React from "react";

import PartnersComponent from "../../Components/PartnersComponent";
import PromoSectionComponent from "../../Components/PromoSectionComponent";
import CategoriesComponent from "../../Components/CategoriesComponent";
import PartnershipComponent from "../../Components/PartnershipComponent";

const LandingPage = () => {
  return (
    <section style={{ flex: "1" }}>
      <section id="main-content" className="flex items-center flex-col">
        <PromoSectionComponent />
        <CategoriesComponent />
        <PartnersComponent />
        <PartnershipComponent />
      </section>
    </section>
  );
};

export default LandingPage;
