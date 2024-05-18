import React from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import CenteredFlexComponent from "../../../Components/Utilities/CenteredFlexComponent";
import CardSubscription from "../CardSubscription";
const cards = [
  { id: 1, title: "coiffure homme", icon: "" },
  { id: 2, title: "Hamam", icon: "" },
  { id: 3, title: "coiffure femme", icon: "" },
  { id: 4, title: "Institut de beauté", icon: "" },
  { id: 5, title: "vvvvvv", icon: "" },
  { id: 6, title: "eeeee", icon: "" },
];
const StepOne = ({ nextStep, handleChange, values }) => {
  const fontFamilySemiBold = useFontFamily("SemiBold");
  const { t } = useTranslation();

  const handleCardClick = (cardId, label) => {
    handleChange("category")({ cardId: cardId, label: label }); // Update the selected category in the parent state
    nextStep(); // Move to the next step
  };
  return (
    <div
      style={{
        background: "#F5F5F5",
        overflowY: "scroll",
      }}
      className="p-5 rounded "
    >
      <h1 style={{ fontFamily: fontFamilySemiBold }}>
        {t("Devenez partenaire BEOM CARE")}
      </h1>
      <CenteredFlexComponent>
        <div className="flex justify-center p-4 w-full">
          <div className="container mx-auto">
            <div className="mx-auto">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {cards.map((card, index) => (
                  <CardSubscription
                    key={card.id}
                    title={card.title}
                    icon={card.icon}
                    onClick={() => handleCardClick(card.id, card.title)} // Handle click event
                    delay={index * 0.4 + 0.2} // Delays each card by 0.2s more than the previous one
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CenteredFlexComponent>
    </div>
  );
};

export default StepOne;
