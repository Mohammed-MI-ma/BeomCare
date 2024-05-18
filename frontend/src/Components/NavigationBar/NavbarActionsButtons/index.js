import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Button, ConfigProvider, Space } from "antd";
import { Link } from "react-router-dom";
import useFontFamily from "../../../Utilities/useFontFamily";

const ActionButton = ({ children, style, to }) => {
  const fontFamilyMedium = useFontFamily("Medium");

  return (
    <Link to={to}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultHoverColor: "gray",
              defaultActiveColor: "gray",
            },
          },
        }}
      >
        <Button
          className="text-white border-none"
          style={{
            ...style,
            fontSize: "var(--font-small-size)",
            fontFamily: fontFamilyMedium,
          }}
        >
          <div>{children}</div>
        </Button>
      </ConfigProvider>
    </Link>
  );
};

const NavbarActionsButtons = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const fontFamilyMedium = useFontFamily("Medium");

  return (
    <Space>
      {true && (
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryBorder: "red",
            },
            components: {
              Button: {
                defaultHoverColor: "white",
                defaultActiveColor: "#65b44a",
              },
            },
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "var(--gap-large)",
              textTransform: "uppercase",
              marginRight: "50px",
            }}
          >
            {menuItems.map((item, index) => (
              <li key={index} style={{ fontSize: "var(--font-small-size)" }}>
                <Link to={item.path} style={{ fontFamily: fontFamilyMedium }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </ConfigProvider>
      )}
      {true && (
        <>
          <ActionButton
            style={{ backgroundColor: "var(--color-primary)" }}
            to={
              location.pathname === "/beom/account/sign-up"
                ? LoginButton.path
                : SignUpButton.path
            }
          >
            {location.pathname === "/beom/account/sign-up"
              ? t(LoginButton.label)
              : t(SignUpButton.label)}
          </ActionButton>

          <ActionButton
            style={{
              color: "var(--color-primary)",
              backgroundColor: "#F6F6F6",
            }}
            to={
              location.pathname === "/beom/institute/addCenter"
                ? LoginButton.path
                : AddInstituteButton.path
            }
          >
            {location.pathname === "/beom/institute/addCenter"
              ? LoginButton.label
              : AddInstituteButton.label}
          </ActionButton>
        </>
      )}
    </Space>
  );
};

export default NavbarActionsButtons;

//Static code
const AddInstituteButton = {
  label: "Ajouter votre établissement",
  path: `/beom/institute/addCenter`,
};

const LoginButton = {
  label: "Se connecter",
  path: `/beom/account/log-in`,
};
const SignUpButton = {
  label: "S'inscrire",
  path: `/beom/account/sign-up`,
};
const menuItems = [
  { label: "coiffure homme", path: "/beom/BarberMen" },
  { label: "coiffure femme", path: "/beom/BarberWomen" },
  { label: "Hamam", path: "/beom/Hamam" },
  { label: "Institut de beauté", path: "/beom/BeautyInstitute" },
];
