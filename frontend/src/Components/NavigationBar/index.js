import React from "react";

import { beom_care_medium_dark, beom_care_small_dark } from "../../images";
import CenteredFlexComponent from "../Utilities/CenteredFlexComponent";
import style from "./navigationBar.module.css";
import { Link } from "react-router-dom";
import NavbarActionsButtons from "./NavbarActionsButtons";

const NavigationBar = () => {
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
