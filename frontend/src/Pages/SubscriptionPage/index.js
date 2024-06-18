import React from "react";
import { useTranslation } from "react-i18next";
import useFontFamily from "../../Utilities/useFontFamily";
import { CustomDivider } from "../LoginPage";
import MultiStepForm from "./MultiStepForm";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Divider, Input, Tooltip } from "antd";
import style from "./SubscriptionPage.module.css";
const SubscriptionPage = () => {
  const fontFamilyBold = useFontFamily("SemiBold");
  const { t } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");

  return (
    <main
      className={`${style.mainContainer} bg-cover relative  flex-col-reverse lg:flex-row items-center w-full `}
    >
      <main
        className={` lg:w-1/2 h-full p-4 items-center justify-center flex gap-1 flex-col `}
      >
        <MultiStepForm />
      </main>
      {/**Static Part */}
      <main
        className={` ${style.flyer} lg:w-1/2 p-4  h-full items-center justify-center flex gap-1 flex-col shadow-lg`}
      >
        <h1
          className={`${style.hide}`}
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
            size={"default"}
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
            size={"default"}
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
            size={"default"}
            style={{
              backgroundColor: "#fde3cf",
            }}
          >
            A
          </Avatar>
          <Avatar
            size={"default"}
            style={{
              backgroundColor: "orange",
            }}
            icon={<UserOutlined />}
          />{" "}
          <Avatar
            size={"default"}
            style={{
              backgroundColor: "green",
            }}
            icon={<UserOutlined />}
          />{" "}
          <Avatar
            size={"default"}
            style={{
              backgroundColor: "#fde3cf",
            }}
          >
            A
          </Avatar>
          <Avatar
            size={"default"}
            style={{
              backgroundColor: "#1677ff",
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
        <div
          className={`${style.hide}`}
          style={{
            color: "var(--color-accent)",
            paddingLeft: "100px",
            paddingRight: "100px",
            bottom: "61px",
            fontSize: "11px",
            position: "absolute",
            fontFamily: fontFamilyLight,
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomDivider />
          </div>
          <p>{t("beomSlogan")}</p>
        </div>
      </main>
    </main>
  );
};

export default SubscriptionPage;
