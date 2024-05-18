import React from "react";
import { CustomDivider } from "../../Pages/LoginPage";
import useFontFamily from "../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { FaUsers, FaLaptop, FaRegStickyNote } from "react-icons/fa";
import CenteredFlexComponent from "../Utilities/CenteredFlexComponent";
import {
  ActionButton,
  AddInstituteButton,
} from "../NavigationBar/NavbarActionsButtons";

const guide = [
  {
    id: 1,
    icon: <FaUsers style={{ fontSize: "40px" }} />,
    description:
      "Rencontrez des nouveaux clients à la recherche de prestations beauté et bien-être en ligne",
  },
  {
    id: 2,
    icon: <FaLaptop style={{ fontSize: "40px" }} />,
    description:
      "Profitez de notre solution tout-en-un pour faciliter la gestion et le développement de votre activité",
  },
  {
    id: 3,
    icon: <FaRegStickyNote style={{ fontSize: "40px" }} />,
    description:
      "Bénéficiez de nos conseils personnalisés et adaptés à vos besoins",
  },
];
const PartnershipComponent = () => {
  const fontFamilyLight = useFontFamily("Light");

  const { t } = useTranslation();

  return (
    <section
      className="bg-cover relative mb-5  flex items-center justify-center flex-col-reverse lg:flex-row items-center w-full"
      style={{
        width: "99vw",
      }}
    >
      <div
        className="container p-5 flex flex-col items-center gap-3"
        style={{
          maxWidth: "900px",
          textTransform: "uppercase",
          marginTop: "70px",
          marginBottom: "70px",
        }}
      >
        <CustomDivider style={{ marginBottom: "10px" }} />
        <h1
          style={{
            fontFamily: fontFamilyLight,
            fontSize: "20px",
            letterSpacing: "0.13em",
          }}
        >
          {t("Ensemble, faisons briller votre salon")}
        </h1>
        <h3
          style={{
            fontFamily: fontFamilyLight,
            fontSize: "10px",
            letterSpacing: "0.13em",
          }}
        >
          {t(
            "Découvrez comment commencer à travailler en beauté avec BEOM CARE"
          )}
        </h3>
        <MembershipGrid guide={guide} />

        <ActionButton
          style={{
            color: "var(--color-accent)",
            fontFamily: fontFamilyLight,
            backgroundColor: "var(--color-primary)",
          }}
          to={AddInstituteButton.path}
        >
          {AddInstituteButton.label}
        </ActionButton>
      </div>
    </section>
  );
};

export default PartnershipComponent;

const MembershipGrid = ({ guide }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-10 p-5">
    {guide.map((step) => (
      <MembershipCard key={step.id} step={step} />
    ))}
  </div>
);

const MembershipCard = ({ step }) => {
  const fontFamilyLight = useFontFamily("Light");

  return (
    <CenteredFlexComponent
      className={"shadow rounded p-5"}
      style={{
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <div>{step?.icon}</div>
      <div
        style={{
          fontSize: "15px",
          textAlign: "center",
          fontFamily: fontFamilyLight,
          textTransform: "none",
        }}
      >
        {step?.description}
      </div>
    </CenteredFlexComponent>
  );
};

MembershipCard.propTypes = {
  partner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};
