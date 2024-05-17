import React from "react";
import CardSubscription from "./CardSubscription";
import CenteredFlexComponent from "../../Components/Utilities/CenteredFlexComponent";
import { useTranslation } from "react-i18next";
import useFontFamily from "../../Utilities/useFontFamily";

const cards = [
  { id: 1, title: "Coiffeur homme", icon: "" },
  { id: 2, title: "Hamam", icon: "" },
  { id: 3, title: "Coiffeur femme", icon: "" },
  { id: 4, title: "Institut de beauté", icon: "" },
];
const SubscriptionPage = () => {
  const fontFamilySemiBold = useFontFamily("SemiBold");

  const { t } = useTranslation();
  return (
    <div style={{ background: "#F5F5F5" }} className="p-5">
      <h1 style={{ fontFamily: fontFamilySemiBold }}>
        {t("Devenez partenaire BEOM CARE")}
      </h1>
      <CenteredFlexComponent>
        <div className="flex justify-center  p-4 w-full">
          <div className="container mx-auto">
            <div className="mx-auto">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {cards.map((card, index) => (
                  <CardSubscription
                    key={card.id}
                    title={card.title}
                    icon={card.icon}
                    delay={index * 0.4 + 0.2} // Delays each card by 0.2s more than the previous one
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CenteredFlexComponent>
      <small>
        +Plus catégories seront bientôt disponibles, restez à l'écoute.
      </small>
    </div>
  );
};

export default SubscriptionPage;
