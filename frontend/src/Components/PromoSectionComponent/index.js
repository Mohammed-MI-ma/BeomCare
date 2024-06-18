import React from "react";
import FullScreenVideo from "../FullScreenVideo";
import CenteredFlexComponent from "../Utilities/CenteredFlexComponent";
import { Button } from "antd";
import useFontFamily from "../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import style from "./promoSectionComponent.module.css";

const PromoSectionComponent = () => {
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");

  return (
    <section
      className="bg-cover relative mb-5 flex items-center justify-center flex-col-reverse lg:flex-row items-center w-full"
      style={{
        width: "99vw",
        margin: "0px",
        background: "black",
        color: "white",
        height: "300px",
        position: "relative",
      }}
    >
      <FullScreenVideo />
      <div
        id="searchEngine"
        className="shadow-netflix p-4 rounded-lg text-center absolute"
        style={{
          boxShadow:
            "0 3px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
        }}
      >
        <h1> {t("Simple • Immédiat • 24h/24")}</h1>
      </div>

      <div
        className={`grid grid-cols-1 shadow-lg md:grid-cols-3 bg-white gap-5 p-5 shadow-netflix p-4 rounded-lg text-center absolute ${style.searchEngine}`}
      >
        <CenteredFlexComponent
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>
            Que cherchez-vous ?
          </p>
          <p> Nom du salon, prestations</p>
        </CenteredFlexComponent>
        <CenteredFlexComponent
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>Où</p>
          <p>Adresse, ville...</p>
        </CenteredFlexComponent>
        <Button
          size="large"
          style={{
            background: "var(--color-primary)",
            fontFamily: fontFamilyLight,
            fontSize: "13px",
            height: "100%",
          }}
        >
          Rechercher
        </Button>
      </div>
    </section>
  );
};

export default PromoSectionComponent;
