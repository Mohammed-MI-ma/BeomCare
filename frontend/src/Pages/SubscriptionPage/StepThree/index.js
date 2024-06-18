import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Modal,
  message,
} from "antd";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import MapComponent from "../../../Components/MapComponent";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { partnerSchema } from "../../../Utilities/validationSchema";
import { RECAPTCHA } from "../../../config.dev";
import PolitiqueSecurite from "../../../Components/Utilities/PolitiqueSecurite";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const StepThree = ({ prevStep, handleChange, values }) => {
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      businessName: "",
      email: values.email || "", // Fill with values from the 'values' object      password: "",
      phone: values.phone || "",
      category: values.category?.label || "", // Fill with values from the 'values' object      password: "",
      lastname: values.lastname || "",
      name: values.name || "",
      lat: values.lat || 0,
      lng: values.lng || 0,
      termsOfServiceAccepted: true,
      privacyPolicyAccepted: true,
      recaptchaToken: "",
    },
    validationSchema: partnerSchema,
  });
  const handleSubmit = async () => {
    // Validate the form
    const errors = await formik.validateForm();

    // If there are validation errors, do not submit the form
    if (Object.keys(errors).length !== 0) {
      return;
    }

    // setIsRegistrationInProgress(true);

    try {
      console.log("formik", { ...formik.values });
      const response = await dispatch();

      if (response && response.status) {
        message.success(t("Compte crée avec succes"));
        navigate("/beom/aboutUs/FAQs");
      } else if (response && response.message) {
        message.warning(response?.message);
      } else {
        message.warning(t("Echec"));
      }
    } catch (e) {
      message.error(t("Error", e));
    } finally {
      // setIsRegistrationInProgress(false);
    }
  };
  const handleButtonClick = () => {
    // Call validateForm method to re-run validation checks
    formik.validateForm().then((errors) => {
      // Update any state or perform actions based on the validation results
    });
  };
  useEffect(() => {
    console.log(formik.values);
  }, [formik]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleMapLocationChange = ({ lat, lng }) =>
    handleChange("map")({ lat, lng });

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
      <Form>
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
            setSelectedLocation={handleMapLocationChange}
          />
          <Button
            className="w-full"
            size="large"
            onClick={(e) => {
              handleButtonClick();
              showModal();
            }}
            style={{
              background: "var(--color-primary)",
              fontFamily: fontFamilyLight,
              fontSize: "13px",
              width: "379px",
              margin: "0 auto",
            }}
          >
            {t("Finaliser votre demande")}
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
          </small>
        </div>{" "}
        <ConfigProvider
          theme={{
            token: {
              colorBorder: "var(--color-primary)",
              colorPrimary: "var(--color-primary)",
            },
          }}
        >
          <Modal
            title={null}
            open={isModalOpen} // Changed from 'open' to 'visible'
            onCancel={handleCancel}
            centered
            footer={
              <>
                <Button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full"
                  loading={false}
                  size="large"
                  style={{
                    background: formik.isValid
                      ? "var(--color-primary) "
                      : "gray",
                    fontFamily: fontFamilyLight,
                    fontSize: "13px",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  {t("Devenir partenaire")}
                </Button>
              </>
            } // Removed footer buttons
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
                fontFamily: fontFamilyBold,
                textAlign: "center",
                marginBottom: "11px",
              }}
            >
              {t("Devenir partenaire BEOM CARE ?")}
            </h1>
            <ReCAPTCHA
              sitekey={RECAPTCHA.RECAPTCHA_SITE_KEY}
              theme="dark"
              onChange={(token) =>
                formik.setFieldValue("recaptchaToken", token)
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.recaptchaToken && formik.errors.recaptchaToken && (
              <p style={{ fontFamily: fontFamilyLight, color: "red" }}>
                {formik.errors.recaptchaToken}
              </p>
            )}
            <Checkbox
              name="termsOfServiceAccepted"
              checked={formik.values.termsOfServiceAccepted}
              onChange={formik.handleChange}
              style={{
                fontFamily: fontFamilyLight,
                fontSize: "13px",
              }}
            >
              {t(
                "Vous accepter les conditions d'utilisation pour les partenaires"
              )}
            </Checkbox>
            {formik.touched.termsOfServiceAccepted &&
              formik.errors.termsOfServiceAccepted && (
                <p style={{ fontFamily: fontFamilyLight, color: "red" }}>
                  {formik.errors.termsOfServiceAccepted}
                </p>
              )}
            <Checkbox
              name="privacyPolicyAccepted"
              checked={formik.values.privacyPolicyAccepted}
              onChange={formik.handleChange}
              style={{
                fontFamily: fontFamilyLight,
                fontSize: "13px",
              }}
            >
              {t(
                "Vous accepter la politique de confidentialité pour les partenaires"
              )}
            </Checkbox>
            {formik.touched.privacyPolicyAccepted &&
              formik.errors.privacyPolicyAccepted && (
                <p style={{ fontFamily: fontFamilyLight, color: "red" }}>
                  {formik.errors.privacyPolicyAccepted}
                </p>
              )}
            <Divider />

            <p style={{ fontFamily: fontFamilyLight }}>{t("Nom Business *")}</p>
            <Input
              name="businessName"
              allowClear
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.businessName}
              style={{
                fontFamily: fontFamilyLight,
                border: "1px solid black",
              }}
            />
            {formik.touched.businessName && formik.errors.businessName && (
              <p style={{ fontFamily: fontFamilyLight, color: "red" }}>
                {formik.errors.businessName}
              </p>
            )}
            <PolitiqueSecurite style={{ fontFamily: fontFamilyLight }} />
          </Modal>
        </ConfigProvider>
      </Form>
    </section>
  );
};

export default StepThree;
