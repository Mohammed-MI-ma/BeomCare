import React from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import CenteredFlexComponent from "../../../Components/Utilities/CenteredFlexComponent";
import CardSubscription from "../CardSubscription";
import { useSelector } from "react-redux";
import { Divider, Input, Tooltip } from "antd";
import { FaBarcode } from "react-icons/fa";
import { InfoCircleOutlined } from "@ant-design/icons";

const StepOne = ({ nextStep, handleChange }) => {
  const fontFamilySemiBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.application.categories);
  const fontFamilyLight = useFontFamily("Light");

  const handleCardClick = (cardId, label) => {
    handleChange("category")({ cardId: cardId, label: label }); // Update the selected category in the parent state
    nextStep(); // Move to the next step
  };
  return (
    <>
      <div
        className="w-[80%] flex flex-col gap-5 mb-2 pb-2 p-2 bg-white rounded"
        style={{
          boxShadow: "0px 6px 4px 0px rgb(0 0 0 / 5%)",
        }}
      >
        <div
          style={{
            fontFamily: fontFamilyLight,
            fontSize: "12px",
            display: "flex",
            gap: "5px",
          }}
        >
          <div>
            <FaBarcode style={{ fontSize: "12px" }} />
          </div>
          <p>
            <span
              style={{
                fontFamily: fontFamilySemiBold,
                textDecoration: "underline",
                fontSize: "12px",
                display: "flex",
                gap: "5px",
              }}
            >
              Avez-vous déjà une demande en cours ?
            </span>
            Suivez-la en utilisant le code qui vous a été envoyé précédemment
            dans
            <span
              style={{
                fontFamily: fontFamilySemiBold,
                fontSize: "12px",
                display: "flex",
                gap: "5px",
              }}
            >
              votre boîte mail.
            </span>
          </p>{" "}
        </div>{" "}
        <small
          style={{
            fontFamily: fontFamilyLight,
            fontSize: "var(--font-tiny-size)",
          }}
        >
          *Vous rencontrez des problèmes? contactez le support Beom
        </small>
        <Input
          type="number"
          style={{
            fontFamily: fontFamilyLight,
          }}
          maxLength={24}
          placeholder="202415105536632199283780"
          suffix={
            <Tooltip>
              <InfoCircleOutlined
                style={{
                  color: "rgba(0,0,0,.45)",
                }}
              />
            </Tooltip>
          }
          prefix={<>Beom-</>}
        />
      </div>
      <div
        style={{
          background: "#F5F5F5",
          overflowY: "auto",
        }}
        className="p-5 rounded "
      >
        <Divider
          style={{
            fontFamily: fontFamilyLight,
          }}
        >
          Ou
        </Divider>
        <h1 style={{ fontFamily: fontFamilySemiBold, textAlign: "center" }}>
          {t("Devenez partenaire BEOM CARE")}
        </h1>
        <p className="w-full text-center">1/3</p>
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
    </>
  );
};

export default StepOne;
