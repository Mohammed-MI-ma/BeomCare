import React from "react";
import FullScreenVideo from "../FullScreenVideo";
import CenteredFlexComponent from "../Utilities/CenteredFlexComponent";
import { Button } from "antd";
import useFontFamily from "../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
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
        height: "500px",
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
        style={{ transform: "translateY(100%)", color: "black" }}
        className="grid grid-cols-2 md:grid-cols-3 bg-white gap-5 p-5 shadow-netflix p-4 rounded-lg text-center absolute "
      >
        <CenteredFlexComponent
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <p>Que cherchez-vous ?</p>
          <p> Nom du salon, prestations</p>
        </CenteredFlexComponent>
        <CenteredFlexComponent
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <p>Où</p>
          <p>Adresse, ville...</p>
        </CenteredFlexComponent>
        <Button
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
