import React from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import CenteredFlexComponent from "../../../Components/Utilities/CenteredFlexComponent";
import CardSubscription from "../CardSubscription";
import { partners } from "../../../Components/HorizontalScroll";
import { useSelector } from "react-redux";

const StepOne = ({ nextStep, handleChange, values }) => {
  const fontFamilySemiBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.application.categories);

  const handleCardClick = (cardId, label) => {
    handleChange("category")({ cardId: cardId, label: label }); // Update the selected category in the parent state
    nextStep(); // Move to the next step
  };
  return (
    <div
      style={{
        background: "#F5F5F5",
        overflowY: "auto",
      }}
      className="p-5 rounded "
    >
      <p className="w-full text-center">1/3</p>
      <h1 style={{ fontFamily: fontFamilySemiBold }}>
        {t("Devenez partenaire BEOM CARE")}
      </h1>
      <CenteredFlexComponent>
        <div className="flex justify-center p-4 w-full">
          <div className="container mx-auto">
            <div className="mx-auto">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {data.map((card, index) => (
                  <CardSubscription
                    key={card.index}
                    iconArray={card?.icons}
                    title={card.title}
                    image={card.icon}
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
