/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import { Button, Form, Input, message } from "antd";
import PhoneInput from "react-phone-number-input";
import { ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios"; // Assuming you use axios for API requests
import { useDispatch } from "react-redux";
import { setMainLoader } from "../../../Reducers/applicationService/applicationSlice";
import ModalOTPMailVerif from "./ModalOTPMailVerif";

const StepTwo = ({ prevStep, nextStep, handleChange, values }) => {
  const fontFamilyBold = useFontFamily("SemiBold");
  const d = useDispatch();
  const { t } = useTranslation();
  const [phoneValue, setPhoneValue] = useState(values.phone);
  const fontFamilyLight = useFontFamily("Light");
  const [isCheckingPhone, setIsCheckingPhone] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const onFinish = async () => {
    try {
      d(setMainLoader(true));
      message.info("Envoie de code de vérification en cours", [0.5]);
      // Verify the email and send OTP code
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URI_DEV}api/auth/sendOTP/`,
        {
          email: values.email,
        }
      );
      d(setMainLoader(false));

      // Assuming your API returns a success status if OTP is sent successfully
      if (response.status === 200) {
        handleOpenModal(true);
        // nextStep(); // Move to the next step
      } else {
        message.error("Erreur envoie code OTP: " + response.status, [0.5]);
        // Handle error if OTP could not be sent
        console.error("Error sending OTP code");
        // Optionally, display an error message to the user
      }
    } catch (error) {
      message.error("Erreur envoie code OTP" + error, [0.5]);
      d(setMainLoader(false));

      // Handle API request error
      console.error("Error sending OTP code:", [0.5]);
      // Optionally, display an error message to the user
    }
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: <p style={{ fontFamily: fontFamilyLight }}>{t("invalidEmail")}</p>,
    },
  };

  const handlePhoneChange = async (value) => {
    setPhoneValue(value);
    handleChange("phone")(value);
    if (value) {
      setIsCheckingPhone(true);
      const isValid = await checkPhoneNumber(value);
      setIsPhoneValid(isValid);
      setIsCheckingPhone(false);
    } else {
      setIsPhoneValid(false);
    }
  };
  const checkPhoneNumber = async (phoneNumber) => {
    try {
      // Replace with your API endpoint to check phone number
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_API_URI_DEV}api/application/allUses/isGSMUniqueCenter/${phoneNumber}`
      );
      return response.data?.unique;
    } catch (error) {
      console.error("Error checking phone number:", error);
      return false;
    }
  };
  const renderFormInput = (name, label, type = "string", message) => (
    <Form.Item
      name={name}
      rules={[
        {
          type,
          message: t(message),
        },
      ]}
    >
      <p style={{ fontFamily: fontFamilyLight }}>{t(label)}</p>
      <Input
        allowClear
        value={values[name]}
        onChange={handleChange(name)}
        disabled={isCheckingPhone || !isPhoneValid}
      />
    </Form.Item>
  );
  return (
    <section>
      <p className="w-full text-center">2/3 {values?.category?.label}</p>
      <Form validateMessages={validateMessages} onFinish={onFinish}>
        <div
          className="flex items-center gap-2"
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
            }}
          >
            {t("Vous êtes gérant d’un établissement beauté ?")}
          </h2>
        </div>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Item
            name="phone"
            rules={[
              {
                message: t("Phone number is required"),
              },
            ]}
          >
            <p style={{ fontFamily: fontFamilyLight }}>
              {t("Téléphone portable *")}
            </p>
            <PhoneInput
              defaultCountry="MA"
              style={{ fontFamily: fontFamilyLight }}
              placeholder={t("Entrer votre numéro")}
              value={phoneValue}
              onChange={handlePhoneChange}
            />
            {!isPhoneValid && (
              <>
                <p
                  style={{
                    fontFamily: fontFamilyLight,
                    fontSize: "var(--font-small-size)",
                  }}
                >
                  {t("Les numéros de téléphone doivent être corrects")}
                </p>
                <p
                  style={{
                    fontFamily: fontFamilyLight,
                    fontSize: "var(--font-small-size)",
                  }}
                >
                  {t(",accessibles et uniques pour les entreprises*")}
                </p>
              </>
            )}
          </Form.Item>{" "}
          {renderFormInput("email", "Email *", "email", "Email is required")}
          {renderFormInput(
            "name",
            "Nom gérant *",
            "string",
            "Name is required"
          )}
          {renderFormInput(
            "lastname",
            "Prenom gérant *",
            "string",
            "Last name is required"
          )}
          <Button
            className="w-full mb-2"
            size="large"
            htmlType="submit"
            style={{
              background:
                isCheckingPhone || !isPhoneValid
                  ? "gray"
                  : "var(--color-primary)",
              color: isCheckingPhone || !isPhoneValid ? "black" : "white",
              fontFamily: fontFamilyLight,
              fontSize: "13px",
            }}
            disabled={isCheckingPhone || !isPhoneValid}
          >
            {t("Suivant")}
          </Button>
          <small
            style={{
              fontFamily: fontFamilyLight,
              fontSize: "var(--font-tiny-size)",
              textAlign: "center",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            {t(
              "Après validation par notre membre du support, nous vous invitons à  compléter les informations de votre institut/centre de beauté et à commencer à publier tous vos services sur Beom Care."
            )}
          </small>
        </div>
      </Form>
      <ModalOTPMailVerif
        visible={isModalVisible}
        onClose={handleCloseModal}
        email={values.email}
        nextStep={nextStep}
      />
    </section>
  );
};

export default StepTwo;
