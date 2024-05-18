import { Button, Divider, Form, Input, Spin } from "antd";
import React, { useState } from "react";
import useFontFamily from "../../Utilities/useFontFamily";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { beom_care_medium, beom_care_small } from "../../images";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");
  const { t } = useTranslation();

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
        height: "calc( 100vh - 100px )",
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
                fontSize: "15px",
                textAlign: "center",
                marginBottom: "11px",
              }}
            >
              Vous avez déjà utilisé BEOM CARE ?
            </h1>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
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

              {/**ForgottenPassword */}
              <Link to={"/beom/account/forgottenPassword"}>
                <p
                  style={{
                    textDecoration: "underline",
                    fontFamily: fontFamilyBold,
                  }}
                >
                  {t(" Mot de passe oublié ?")}
                </p>
              </Link>

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
                {t("Se connecter")}
              </Button>

              {/**Custom Divider */}
              <Divider
                style={{
                  fontFamily: fontFamilyLight,
                }}
              >
                Ou
              </Divider>

              {/**Text */}
              <p
                className="w-full"
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  fontFamily: fontFamilyBold,
                }}
              >
                Nouveau sur BEOM CARE ?
              </p>

              {/**Subscribe Button */}
              <Link to="/beom/account/sign-up">
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
                  {t("Créer mon compte")}
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
          boxShadow: "rgba(0, 0, 0, 0.6) -4px 0px 8px 0px",
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

export default LoginPage;

//__components
export const LightLogoBeom = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          }
        />
      )}{" "}
      {/* Render Spinner while loading */}
      <img
        srcSet={`${beom_care_small} 308w, ${beom_care_medium} 182w`}
        sizes="(max-width: 768px) 110px, (max-width: 1200px) 308px, 308px"
        src={beom_care_small}
        alt="BeomCare Logo"
        onLoad={handleImageLoad} // Call handleImageLoad when the image loads
        style={{ display: loading ? "none" : "block" }} // Hide image while loading
      />
    </div>
  );
};
export const CustomDivider = ({
  color = "#E1B74A",
  height = "2px",
  width = "65px",
  minWidth = "inherit",
}) => {
  return (
    <Divider
      style={{
        background: color,
        height: height,
        width: width,
        minWidth: minWidth,
      }}
    />
  );
};

//__propTypes
CustomDivider.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string,
};
