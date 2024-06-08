import React, { useState } from "react";
import { Modal, Input, message, Button } from "antd";
import useFontFamily from "../../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setMainLoader } from "../../../../Reducers/applicationService/applicationSlice";
import axios from "axios"; // Assuming you use axios for API requests

const ModalOTPMailVerif = ({ visible, onClose, email, nextStep }) => {
  const [otp, setOtp] = useState(""); // State to store OTP input value
  const fontFamilyBold = useFontFamily("SemiBold");
  const d = useDispatch();

  const { t } = useTranslation();
  const onChange = (text) => {
    console.log(text);
    setOtp(text);
  };

  const handleCancel = () => {
    if (otp.trim() !== "") {
      setOtp("");
      onClose(); // Close modal only if OTP input is empty
    }
  };
  const VerifyOTP = async (entredOtp) => {
    try {
      d(setMainLoader(true));
      message.info("Validation code de vérification en cours", [0.5]);
      // Verify the email and send OTP code
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URI_DEV}api/auth/verifyOTP/`,
        {
          email: email,
          enteredOTP: entredOtp,
        }
      );
      d(setMainLoader(false));

      // Assuming your API returns a success status if OTP is sent successfully
      if (response.status === 200) {
        nextStep(); // Move to the next step
        setOtp("");
      } else {
        message.error("Erreur (code OTP):" + response.status, [0.5]);
        setOtp("");
      }
    } catch (error) {
      d(setMainLoader(false));
      setOtp("");
      message.error("Erreur globale (code OTP)" + error, [0.5]);
    }
  };
  return (
    <Modal
      title={null}
      centered
      open={visible} // Changed 'open' to 'visible'
      footer={
        <Button
          type="link"
          disabled={otp === ""}
          onClick={() => {
            VerifyOTP(otp);
            onClose();
          }}
        >
          {t("Confirmer")}
        </Button>
      }
      onCancel={handleCancel} // Conditionally handle onCancel
      closable={false}
    >
      <div className="flex flex-col gap-5">
        <h1 style={{ fontSize: "25px", fontFamily: fontFamilyBold }}>
          {t("Vérifiez votre courrier électronique")}
        </h1>
        <p>
          Assurez-vous d'utiliser une adresse e-mail{" "}
          <span style={{ fontSize: "20px", fontFamily: fontFamilyBold }}>
            {email}
          </span>
          &nbsp; réelle et accessible pour la vérification. Cela garantira que
          vous recevez correctement le code de vérification et que vous pouvez
          accéder à votre compte en toute sécurité.
        </p>
        <Input.OTP length={6} value={otp} onChange={onChange} mask="🔒" />
      </div>
    </Modal>
  );
};

export default ModalOTPMailVerif;
