import React, { useEffect } from "react";

import PartnersComponent from "../../Components/PartnersComponent";
import PromoSectionComponent from "../../Components/PromoSectionComponent";
import CategoriesComponent from "../../Components/CategoriesComponent";
import PartnershipComponent from "../../Components/PartnershipComponent";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFontFamily from "../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import { RightOutlined } from "@ant-design/icons";
import { LuPlus } from "react-icons/lu";
import BeomShorts from "../../Components/BeomShorts";

import style from "./landingPage.module.css";
const LandingPage = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const fontFamilyMedium = useFontFamily("Medium");
  const { t } = useTranslation();
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/beom/homepage");
    }
  }, [isUserLoggedIn, navigate]);
  return (
    <section style={{ flex: "1" }}>
      <section id="main-content" className="flex items-center flex-col">
        <PromoSectionComponent />
        <section
          id="partnersSection"
          className={`w-full block ${style.partnersSection}`}
        >
          <header
            className="flex items-center justify-between w-full"
            style={{
              fontSize: "var(--font-small-size)",
              fontFamily: fontFamilyMedium,
            }}
          >
            <h1
              className="p-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {t("Top centres et instituts de beauté")}
            </h1>
            <Link className="p-4 flex " style={{ color: "var(--color-blue)" }}>
              <p>{t("Voir Plus")}</p>
              <RightOutlined style={{ width: 10 }} />
            </Link>
          </header>
          <div className="flex ">
            <div
              className="w-screen min-h-[100px] overflow-x-auto whitespace-nowrap "
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21,
              ].map((id) => (
                <div
                  className="shadow-lg inline-flex justify-center items-center"
                  style={{
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    background: "var(--color-text-secondary)",
                    color: "white",
                  }}
                >
                  <LuPlus />
                </div>
              ))}
            </div>
          </div>
        </section>
        <CategoriesComponent />
        <PartnersComponent />
        <PartnershipComponent /> <BeomShorts />
      </section>
    </section>
  );
};

export default LandingPage;
