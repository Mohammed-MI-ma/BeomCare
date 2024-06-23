import React from "react";
import FullScreenVideo from "../FullScreenVideo";
import man from "../../Assets/images/man.webp";
import MainSearchEngine from "../MainSearchEngine";

const PromoSectionComponent = () => {
  return (
    <section
      className="bg-cover relative mb-5 flex items-center justify-center flex-col-reverse lg:flex-row items-center w-full"
      style={{
        width: "99vw",
        margin: "0px",
        background: "black",
        color: "white",
        height: "300px",
        position: "relative",
      }}
    >
      <FullScreenVideo image={man} />
      <MainSearchEngine />
    </section>
  );
};

export default PromoSectionComponent;
