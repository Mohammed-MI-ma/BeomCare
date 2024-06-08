import React from "react";
import { useTranslation } from "react-i18next";

const PolitiqueSecurite = ({ style }) => {
  const { t } = useTranslation();

  return (
    <p
      style={{
        ...style,
        fontSize: "var(--font-extra-small-size)",
        textAlign: "center",
      }}
    >
      {t(
        "Vos informations sont traitées par BEOM CARE en toute confidentialité"
      )}
    </p>
  );
};

export default PolitiqueSecurite;
