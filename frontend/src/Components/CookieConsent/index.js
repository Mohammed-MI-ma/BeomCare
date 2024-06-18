import React, { useEffect } from "react";
import { FaCookieBite } from "react-icons/fa";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import { Link, useLocation } from "react-router-dom";
import useFontFamily from "../../Utilities/useFontFamily";
import { Divider } from "antd";

const CookieConsentComponent = () => {
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyMedium = useFontFamily("Medium");

  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-XXXXX-Y"); // Replace 'UA-XXXXX-Y' with your actual tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accepter"
      declineButtonText="Refuser"
      cookieName="myCookieConsent"
      style={{
        background: "white",
        maxWidth: "400px",
        boxShadow: "7px -6px 19px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
      buttonStyle={{
        background: "var(--color-primary)",
        color: "white",
        fontFamily: fontFamilyLight,
        fontSize: "13px",
        borderRadius: "10px",
      }}
      expires={150}
      onAccept={() => {
        // Activate GPS
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log("User's current position:", position);
          });
        }

        // Enable Google Analytics
        ReactGA.initialize("G-14R378V7LP"); // Replace 'UA-XXXXX-Y' with your actual tracking ID
        ReactGA.pageview(window.location.pathname + window.location.search);
      }}
    >
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "black",
        }}
      >
        <FaCookieBite />
        <p>Consentement aux cookies</p>
      </h2>
      <p
        style={{
          color: "black",
          fontFamily: fontFamilyLight,
          fontSize: "13px",
        }}
      >
        Ce site utilise des cookies pour vous garantir la meilleure expérience
        sur BeomCare.
      </p>
      <Divider />
      <div className="flex gap-2 flex-col">
        <div>
          <h3
            style={{
              color: "black",
              fontFamily: fontFamilyMedium,
              fontSize: "13px",
            }}
          >
            <i> Pourquoi avons-nous besoin de votre emplacement ?</i>{" "}
          </h3>
          <p
            style={{
              color: "black",
              fontFamily: fontFamilyLight,
              fontSize: "12px",
            }}
          >
            Nous utilisons votre emplacement pour fournir des services
            personnalisés, tels que la recherche de salons à proximité,
            l'affichage de contenu pertinent et l'amélioration de votre
            expérience globale.
          </p>
        </div>
        <p
          style={{
            color: "black",
            fontFamily: fontFamilyLight,
            fontSize: "12px",
          }}
        >
          Vos données de localisation ne sont utilisées que dans notre
          application et ne sont pas partagées avec des tiers sans votre
          consentement.
          <Link to="Plus d'info">
            . <u>Pour plus d'info, contactez le support</u>
          </Link>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentComponent;
