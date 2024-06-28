import React from "react";
import { useTranslation } from "react-i18next";
import { CustomDivider } from "../../Pages/LoginPage";
import useFontFamily from "../../Utilities/useFontFamily";
import { motion } from "framer-motion";
import { SiYoutubeshorts } from "react-icons/si";
import AnimatesIcon from "../AnimatedIcon";
import HoverableCard from "../Utilities/HoverableCard";

const BeomShorts = () => {
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");

  return (
    <section
      className="bg-cover relative mb-5 flex items-center justify-center flex-col-reverse lg:flex-row items-center w-full"
      style={{
        width: "99vw",
        background: "black",
        color: "white",
      }}
    >
      <div
        className="container p-5 flex flex-col items-center"
        style={{
          maxWidth: "700px",
          textTransform: "uppercase",
          marginTop: "70px",
          marginBottom: "70px",
          textAlign: "center",
        }}
      >
        <CustomDivider style={{ marginBottom: "10px" }} />
        <h1
          style={{
            fontFamily: fontFamilyLight,
            fontSize: "20px",
            letterSpacing: "0.13em",
            marginBottom: "35px",
          }}
        >
          {t("Révolutionnez Votre Salon avec BeomCare Shorts")}
        </h1>
        <HoverableCard>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={null}
          >
            <AnimatesIcon
              icon={<SiYoutubeshorts style={{ fontSize: `${200}px` }} />}
              animation={"tada"}
            />{" "}
          </motion.div>
        </HoverableCard>
      </div>
    </section>
  );
};

export default BeomShorts;
