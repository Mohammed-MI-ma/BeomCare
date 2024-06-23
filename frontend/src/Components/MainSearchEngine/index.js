import React from "react";
import CenteredFlexComponent from "../Utilities/CenteredFlexComponent";
import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import useFontFamily from "../../Utilities/useFontFamily";
import style from "./MainSearchEngine.module.css";

const MainSearchEngine = () => {
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");
  return (
    <>
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
          <Input
            placeholder="Nom du salon, prestations"
            style={{ fontFamily: fontFamilyLight }}
          />
        </CenteredFlexComponent>
        <CenteredFlexComponent
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <p style={{ color: "#5A5A5A", fontSize: "12px" }}>Où</p>
          <Input
            placeholder="Adresse, ville..."
            style={{ fontFamily: fontFamilyLight }}
          />
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
    </>
  );
};

export default MainSearchEngine;
