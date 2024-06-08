import React from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { Avatar } from "antd";
import { useTranslation } from "react-i18next";

const RightSection = () => {
  const fontFamilyBold = useFontFamily("SemiBold");
  const fontFamilyLight = useFontFamily("Light");
  const { t } = useTranslation();

  return (
    <main
      className={`lg:w-1/2 p-4  h-full items-center justify-center flex gap-1 flex-col shadow-lg`}
      style={{
        background: "var(--color-primary)",
        color: "var(--color-accent)",
        zIndex: 1000,
        borderRadius: "30px",
        position: "absolute",
        right: "10px",
        boxShadow: "rgba(0, 0, 0, 0.6) -4px 0px 17px 0px",
      }}
    >
      <h1
        style={{
          fontFamily: fontFamilyBold,
          fontSize: "20px",
        }}
      >
        BeomCare, vous en avez rêvé.
      </h1>
      <p
        style={{
          fontFamily: fontFamilyLight,
          fontSize: "10px",
        }}
      >
        Rejoignez-nous, plus de 50 centres sont déjà inscrits.
      </p>
      <Avatar.Group shape="circle">
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
          }}
        >
          A
        </Avatar>{" "}
        <Avatar
          style={{
            backgroundColor: "orange",
          }}
        >
          B
        </Avatar>
      </Avatar.Group>
      <div
        style={{
          color: "var(--color-accent)",
          paddingLeft: "100px",
          paddingRight: "100px",
          bottom: "61px",
          fontSize: "11px",
          position: "absolute",
          fontFamily: fontFamilyLight,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>{t("beomSlogan")}</p>
      </div>
    </main>
  );
};

export default RightSection;
