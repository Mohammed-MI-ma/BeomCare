import React, { useEffect, useState } from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import CenteredFlexComponent from "../../../Components/Utilities/CenteredFlexComponent";
import CardSubscription from "../CardSubscription";
import { useSelector } from "react-redux";
import { ConfigProvider, Divider, Input, Modal, Steps, Tooltip } from "antd";
import { FaBarcode } from "react-icons/fa";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./stepOne.module.css";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const StepOne = ({ nextStep, handleChange }) => {
  const fontFamilySemiBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.application.categories);
  const fontFamilyLight = useFontFamily("Light");
  const query = useQuery();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(trackingNumber !== "");
  const navigate = useNavigate();
  const handleCancel = () => {
    setTrackingNumber("");
    setIsModalOpen(false);
    navigate("/beom/institute/addCenter");
  };
  const handleCardClick = (cardId, label) => {
    handleChange("category")({ cardId: cardId, label: label }); // Update the selected category in the parent state
    nextStep(); // Move to the next step
  };
  useEffect(() => {
    const trackingNumberFromUrl = query.get("trackingNumber");
    if (trackingNumberFromUrl) {
      setTrackingNumber(trackingNumberFromUrl);
      setIsModalOpen(trackingNumber !== "");
    }
  }, [query]);
  return (
    <>
      <div
        className={` sm:w-full md:w-[80%] flex flex-col gap-5 mb-2 pb-2 p-2 bg-white rounded ${style.trackingContainer}`}
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
          value={trackingNumber}
          readOnly
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
      <ConfigProvider
        theme={{
          token: {
            colorBorder: "var(--color-primary)",
            colorPrimary: "var(--color-primary)",
          },
        }}
      >
        <Modal
          title={"Demande # " + trackingNumber}
          open={isModalOpen} // Changed from 'open' to 'visible'
          onCancel={handleCancel}
          centered
          footer={null} // Removed footer buttons
        >
          {/**********************/}
          {/**********************/}
          {/**********************/}
          {/**********************/}
          {/**********************/}
          {/**********************/}
          {/**********************/}
          <h1
            style={{
              fontFamily: fontFamilyLight,
              textAlign: "center",
              marginBottom: "11px",
            }}
          >
            {t(
              "Nous vous remercions pour votre intérêt à rejoindre notre réseau de centres de beauté partenaires. Votre demande a bien été reçue et est actuellement en cours de traitement."
            )}
          </h1>
          <Steps
            progressDot
            current={1}
            items={[
              pairFunction("Fini", "Demande reçu au backend Beom"),
              pairFunction("En cours", "Vérification des informations"),
              pairFunction("En attente", "Validation finale"),
            ]}
          />
          <Divider />
          <p style={{ fontFamily: fontFamilyLight }}>
            {t("Visitez la page FAQ pour plus d'information *")}
          </p>
        </Modal>
      </ConfigProvider>
    </>
  );
};
const pairFunction = (title, description, font) => {
  return {
    title: <h1 style={{ fontFamily: font }}>{title}</h1>,
    description: <p style={{ fontFamily: font }}>{description}</p>,
  };
};
export default StepOne;
