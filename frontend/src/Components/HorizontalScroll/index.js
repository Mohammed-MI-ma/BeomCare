import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./horizontalScroll.module.css";
import vogue from "../../../src/Assets/images/xxxxx.png";
import useFontFamily from "../../Utilities/useFontFamily";
import { Button } from "antd";
import { CustomDivider } from "../../Pages/LoginPage";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const partners = [
  {
    id: 1,
    title: "COIFFURE HOMME",
    image: vogue,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 2,
    title: "COIFFURE FEMME",
    image: vogue,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 3,
    title: "HAMAM",
    image: vogue,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 4,
    title: "INSTITUT DE BEAUTÉ",
    image: vogue,
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
];

const HorizontalScroll = () => {
  const { data } = useSelector((state) => state.application.categories);

  const scrollRef = useRef(null);
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className={styles.horizontalScrollContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.scrollableContent} ref={scrollRef}>
        {data.map((partner) => (
          <motion.div
            key={partner.id}
            className={styles.item}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: partner.id * 0.1 }}
          >
            <img
              src={partner.image}
              alt={partner.name}
              className={styles.logo}
            />

            <div style={{ maxWidth: "230px" }}>
              <h1 style={{ fontFamily: fontFamilyBold }}> {partner?.title}</h1>
              <p style={{ fontFamily: fontFamilyLight, textTransform: "none" }}>
                {partner?.description}
              </p>
              <Button
                type="link"
                style={{
                  fontFamily: fontFamilyBold,
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  color: "black",
                }}
              >
                <p>{t("Découvrir")}</p>
                <CustomDivider />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      <div style={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <motion.button
          className={styles.scrollButton}
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.button>
        <motion.button
          className={styles.scrollButton}
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HorizontalScroll;
