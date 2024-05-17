import { Button, Divider, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import useFontFamily from "../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CustomDivider, LightLogoBeom } from "../LoginPage";
import PhoneInput from "react-phone-number-input";

const SignUpPage = () => {
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const [value, setValue] = useState();
  useEffect(() => {
    console.log(value);
  }, [value]);

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: <p style={{ fontFamily: fontFamilyLight }}>{t("invalidEmail")}</p>,
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <main
      className={`bg-cover relative flex flex-col-reverse lg:flex-row items-center w-full `}
      style={{
        width: "95vw",
        height: "calc( 100vh - 90px )",
        maxWidth: "1440px",
        left: "50%",
        transform: " translateX(-50%)",
        maxHeight: "700px",
      }}
    >
      <main
        className={`lg:w-1/2 h-full p-4 items-center justify-center flex gap-1 flex-col `}
        style={{
          background: "#F5F5F5",
          borderRadius: "30px",
          color: "var(--color-primary)",
          position: "absolute",
          left: "10px",
        }}
      >
        <section style={{ width: "379px" }}>
          <Form validateMessages={validateMessages} onFinish={onFinish}>
            <h1
              style={{
                fontFamily: fontFamilyBold,
                textAlign: "center",
                marginBottom: "11px",
              }}
            >
              {t("Nouveau sur BEOM CARE ?")}
            </h1>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Form.Item
                name={["user", "email"]}
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <p
                  style={{
                    fontFamily: fontFamilyLight,
                  }}
                >
                  {t("Téléphone portable *")}
                </p>

                <PhoneInput
                  defaultCountry="MA"
                  style={{
                    fontFamily: fontFamilyLight,
                  }}
                  placeholder={t("Entrer votre numéro")}
                  value={value}
                  onChange={setValue}
                />
              </Form.Item>
              {/**Password*/}
              <Form.Item
                name={["user", "email"]}
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <p
                  style={{
                    fontFamily: fontFamilyLight,
                  }}
                >
                  {t("Email *")}
                </p>
                <Input allowClear />
              </Form.Item>
              {/**Password*/}
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: (
                      <p style={{ fontFamily: fontFamilyLight }}>
                        {t("passwordInputPrompt")}
                      </p>
                    ),
                  },
                ]}
              >
                <p
                  style={{
                    fontFamily: fontFamilyLight,
                  }}
                >
                  {t("Mot de passe*")}
                </p>
                <Input.Password allowClear />
              </Form.Item>
              {/**Submit Button */}
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
                {t("Créer mon compte")}
              </Button>
              <br></br>
              <PolitiqueSecurite style={{ fontFamily: fontFamilyLight }} />{" "}
              {/**Custom Divider */}
              <Divider
                style={{
                  fontFamily: fontFamilyLight,
                }}
              >
                Ou
              </Divider>
              {/**Text */}
              {/**Subscribe Button */}
              <Link to="/beom/account/log-in">
                <Button
                  className="w-full"
                  size="large"
                  style={{
                    background: "var(--color-accent)",
                    color: "black",
                    fontFamily: fontFamilyLight,
                    fontSize: "13px",
                  }}
                >
                  {t("Se connecter")}
                </Button>
              </Link>
            </div>
          </Form>
        </section>
      </main>

      <main
        className={`lg:w-1/2 p-4 h-full items-center justify-center flex gap-1 flex-col shadow-lg`}
        style={{
          background: "var(--color-primary)",
          color: "var(--color-accent)",
          borderRadius: "30px",
          position: "absolute",
          right: "10px",
          boxShadow: "rgba(0, 0, 0, 0.6) -4px 0px 17px 0px",
        }}
      >
        <LightLogoBeom />
        <div
          style={{
            color: "var(--color-accent)",
            paddingLeft: "100px",
            paddingRight: "100px",
            bottom: "61px",
            fontSize: "11px",
            position: "absolute",
            fontFamily: fontFamilyLight,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CustomDivider />
          <p>{t("beomSlogan")}</p>
        </div>
      </main>
    </main>
  );
};

export default SignUpPage;

const PolitiqueSecurite = ({ style }) => {
  return (
    <p
      style={{
        ...style,
        fontSize: "var(--font-extra-small-size)",
        textAlign: "center",
      }}
    >
      Vos informations sont traitées par BEOM CARE, consultez notre politique de
      confidentialité. Ce site est soumis à la Politique de Confidentialité et
      aux Conditions d’Utilisations de Google.
    </p>
  );
};
