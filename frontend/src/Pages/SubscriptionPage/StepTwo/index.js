import React, { useEffect, useState } from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
import PhoneInput from "react-phone-number-input";
import { ArrowLeftOutlined } from "@ant-design/icons";

const StepTwo = ({ prevStep, nextStep, handleChange, values }) => {
  const fontFamilyBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const [value, setValue] = useState(values.phone);
  const fontFamilyLight = useFontFamily("Light");

  const onFinish = () => {
    nextStep(); // Move to the next step
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

  return (
    <section style={{ width: "379px" }}>
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
            {t("Vous avez choisi")}&nbsp;'
            {values?.category?.label}'&nbsp;
            {t(". Vous êtes gérant d’un établissement beauté ?")}
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
                //   required: true,
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
              value={value}
              onChange={(value) => {
                setValue(value);
                handleChange("phone")(value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                // required: true,
                message: t("Email is required"),
              },
            ]}
          >
            <p style={{ fontFamily: fontFamilyLight }}>{t("Email *")}</p>
            <Input
              allowClear
              value={values.email}
              onChange={handleChange("email")}
            />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                type: "string",
                // required: true,
                message: t("Name is required"),
              },
            ]}
          >
            <p style={{ fontFamily: fontFamilyLight }}>{t("Nom*")}</p>
            <Input
              allowClear
              value={values.name}
              onChange={handleChange("name")}
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                type: "string",
                // required: true,
                message: t("Last name is required"),
              },
            ]}
          >
            <p style={{ fontFamily: fontFamilyLight }}>{t("Prenom*")}</p>
            <Input
              allowClear
              value={values.lastname}
              onChange={handleChange("lastname")}
            />
          </Form.Item>
          <Button
            className="w-full"
            size="large"
            htmlType="submit"
            style={{
              background: "var(--color-primary)",
              fontFamily: fontFamilyLight,
              fontSize: "13px",
            }}
          >
            {t("Suivant")}
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default StepTwo;
