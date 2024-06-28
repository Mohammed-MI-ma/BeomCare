import React from "react";

import { beom_care_medium_dark, beom_care_small_dark } from "../../images";
import CenteredFlexComponent from "../Utilities/CenteredFlexComponent";
import style from "./navigationBar.module.css";
import { Link } from "react-router-dom";
import NavbarActionsButtons, { ActionButton } from "./NavbarActionsButtons";
import { RiMenu2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <CenteredFlexComponent className={`w-full flex-col ${style.navbarStyle}`}>
        <div
          className={`${style.navbarInnerStyle} w-full flex items-center justify-between  `}
        >
          <Link to={"/"}>
            <div className={`cursor-pointer`}>
              <div className={`flex justify-start relative flex-col }`}>
                <Logo />
              </div>
            </div>
          </Link>
          <div className={`${style.navBar_container} flex`}>
            <CenteredFlexComponent className={`gap-3`}>
              <NavbarActionsButtons />
            </CenteredFlexComponent>
          </div>
        </div>
      </CenteredFlexComponent>
      <CenteredFlexComponent
        className={`w-full flex-col ${style.navbarBottomStyle} `}
      >
        <div
          className={`${style.navbarInnerStyle} w-full flex items-center justify-between  `}
        >
          <Link to={"/"}>
            <div className={`cursor-pointer`}>
              <div className={`flex justify-start relative flex-col }`}>
                <RiMenu2Fill size={"30px"} />
              </div>
            </div>
          </Link>
          <div className={`${style.navBar_container} flex`}>
            <CenteredFlexComponent className={`gap-3`}>
              <ActionButton
                style={{
                  borderRadius: "50px",
                  color: "black",
                }}
              >
                <div className="flex gap-2 justify-center items-center">
                  <FaLocationDot />
                  {t("Rabat")}
                </div>
              </ActionButton>
            </CenteredFlexComponent>
          </div>
        </div>
      </CenteredFlexComponent>
    </nav>
  );
};

export default NavigationBar;

const Logo = () => {
  return (
    <img
      srcSet={`${beom_care_small_dark} 110w,
 ${beom_care_medium_dark} 182w`}
      sizes="(max-width: 768px) 100px,
(max-width: 1200px) 120px,
120px"
      src={beom_care_small_dark}
      alt="BeomCare Logo"
    />
  );
};
