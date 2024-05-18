import React from "react";
import { Button, Form } from "antd";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import MapComponent from "../../../Components/MapComponent";
import { ArrowLeftOutlined } from "@ant-design/icons";

const StepThree = ({ prevStep, handleSubmit, handleChange, values }) => {
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");

  const onFinish = () => {
    handleSubmit(); // Final submission
  };

  const handleMapClick = (event) => {
    handleChange("lat")(event.latlng.lat);
    handleChange("lng")(event.latlng.lng);
  };

  return (
    <section style={{ width: "100%" }}>
      <p className="w-full text-center">3/3</p>
      <div
        className="flex items-center"
        style={{ width: "379px", margin: "0 auto" }}
      >
        <div
          className="flex items-center gap-5"
          style={{
            fontFamily: fontFamilyBold,
            textAlign: "center",
            marginBottom: "11px",
          }}
        >
          <Button
            onClick={prevStep}
            style={{ color: "black" }}
            icon={<ArrowLeftOutlined />}
          />
          <h2
            style={{
              textAlign: "start",
              fontFamily: fontFamilyBold,
            }}
          >
            {t("Cliquer sur l'emplacement de votre business sur la carte")}
          </h2>
        </div>
      </div>
      <Form onFinish={onFinish}>
        <div
          className="fles gap-2 flex-col"
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MapComponent
            selectedLocation={{ lat: values.lat, lng: values.lng }}
            onMapClick={handleMapClick}
          />
          <Button
            className="w-full"
            size="large"
            htmlType="submit"
            style={{
              background: "var(--color-primary)",
              fontFamily: fontFamilyLight,
              fontSize: "13px",
              width: "379px",
              margin: "0 auto",
            }}
          >
            {t("Réserver gratuitement")}
          </Button>
          <small
            style={{
              fontFamily: fontFamilyLight,
              fontSize: "var(--font-tiny-size)",
              textAlign: "center",
            }}
          >
            La période d'essai gratuite est fixée à deux mois. Nous vous
            recommandons de consulter nos offres
          </small>{" "}
        </div>
      </Form>
    </section>
  );
};

export default StepThree;
