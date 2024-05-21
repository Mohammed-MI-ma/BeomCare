import React, { useEffect } from "react";

import PartnersComponent from "../../Components/PartnersComponent";
import PromoSectionComponent from "../../Components/PromoSectionComponent";
import CategoriesComponent from "../../Components/CategoriesComponent";
import PartnershipComponent from "../../Components/PartnershipComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/beom/homepage");
    }
  }, [isUserLoggedIn, navigate]);
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
