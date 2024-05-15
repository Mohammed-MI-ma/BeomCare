import React from "react";

import { beom_care_medium_dark, beom_care_small_dark } from "../../images";

const NavigationBar = () => {
  return (
    <nav>
      <img
        srcSet={`${beom_care_small_dark} 110w,
                 ${beom_care_medium_dark} 182w`}
        sizes="(max-width: 768px) 110px,
               (max-width: 1024px) 15vw,
               10vw"
        src={beom_care_small_dark}
        alt="BeomCare Logo"
      />
    </nav>
  );
};

export default NavigationBar;
