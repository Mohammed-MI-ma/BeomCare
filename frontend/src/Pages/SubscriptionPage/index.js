import React from "react";
import { useTranslation } from "react-i18next";
import useFontFamily from "../../Utilities/useFontFamily";
import { CustomDivider } from "../LoginPage";
import MultiStepForm from "./MultiStepForm";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Divider, Tooltip } from "antd";

const SubscriptionPage = () => {
  const fontFamilyBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");

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
        <MultiStepForm />
      </main>
      {/**Static Part */}
      <main
        className={`lg:w-1/2 p-4  h-full items-center justify-center flex gap-1 flex-col shadow-lg`}
        style={{
          background: "var(--color-primary)",
          color: "var(--color-accent)",
          zIndex: 1000,
          borderRadius: "30px",
          position: "absolute",
          right: "10px",
          boxShadow: "rgba(0, 0, 0, 0.6) -4px 0px 17px 0px",
        }}
      >
        <h1
          style={{
            fontFamily: fontFamilyBold,
            fontSize: "20px",
          }}
        >
          BeomCare, vous en avez rêvé.
        </h1>
        <p
          style={{
            fontFamily: fontFamilyLight,
            fontSize: "10px",
          }}
        >
          Rejoignez-nous, plus de 50 centres sont déjà inscrits.
        </p>
        <Avatar.Group shape="circle">
          <Avatar
            style={{
              backgroundColor: "#fde3cf",
            }}
          >
            A
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#f56a00",
            }}
          >
            K
          </Avatar>
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />{" "}
          <Avatar
            style={{
              backgroundColor: "red",
            }}
            icon={<UserOutlined />}
          />{" "}
          <Avatar
            style={{
              backgroundColor: "orange",
            }}
            icon={<UserOutlined />}
          />{" "}
          <Avatar
            style={{
              backgroundColor: "green",
            }}
            icon={<UserOutlined />}
          />
          <Avatar
            style={{
              backgroundColor: "#1677ff",
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
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
          <div style={{ display: "flex" }}>
            <CustomDivider />
          </div>

          <p>{t("beomSlogan")}</p>
        </div>
      </main>
    </main>
  );
};

export default SubscriptionPage;
