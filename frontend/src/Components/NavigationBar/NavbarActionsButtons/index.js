import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoMdNotifications, IoIosLogIn } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import {
  Avatar,
  Badge,
  Button,
  ConfigProvider,
  Divider,
  Popover,
  Space,
} from "antd";
import { Link } from "react-router-dom";
import useFontFamily from "../../../Utilities/useFontFamily";
import style from "./NavbarActionsButtons.module.css";
import { useDispatch, useSelector } from "react-redux";
import CenteredFlexComponent from "../../Utilities/CenteredFlexComponent";
import { logout } from "../../../Reducers/authService/authSlice";
export const ActionButton = ({ children, style, to }) => {
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
            fontFamily: fontFamilyMedium,
            ...style,
            fontSize: "var(--font-small-size)",
            height: "unset",
          }}
        >
          {children}
        </Button>
      </ConfigProvider>
    </Link>
  );
};

const NavbarActionsButtons = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.userInfo);
  //Static code
  const AddInstituteButton = {
    label: "Devenez partenaire",
    path: `/beom/institute/addCenter`,
    icon: <IoStorefrontOutline size={"20px"} />,
  };

  const LoginButton = {
    label: "Se connecter",
    path: `/beom/account/log-in`,
    icon: <IoIosLogIn size={"20px"} />,
  };

  const SignUpButton = {
    label: "S'inscrire",
    path: `/beom/account/sign-up`,
    icon: <FaRegNewspaper size={"20px"} />,
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "1":
        // changeLanguage("fr");
        break;
      case "2":
        //    changeLanguage("ar");
        break;
      default:
        // changeLanguage("fr");
        break;
    }
  };
  const { data } = useSelector((state) => state.application.categories);

  const fontFamilyMedium = useFontFamily("Medium");
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  //__ACTIONS
  const logoutAction = async () => {
    try {
      await dispatch(logout());
      navigate("/");
    } catch (error) {
      // Handle any errors if necessary
    }
  };
  const items = [
    {
      key: "1",
      label: <p style={{ fontFamily: fontFamilyMedium }}>{t("french")}</p>,
    },
  ];
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
              gap: "var(--gap-large)",
            }}
            className={style.nav}
          >
            {data.slice(0, 5).map((item, index) => (
              <li key={index} style={{ fontSize: "var(--font-small-size)" }}>
                <Link
                  to={`/beom/category/${item._id}`}
                  style={{ fontFamily: fontFamilyMedium }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </ConfigProvider>
      )}
      {!isUserLoggedIn ? (
        <div className={style.actionButtons}>
          <div
            id="largeScreen-actions"
            ia-describedby="largeScreen-actions-description"
          >
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
            &nbsp;
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
            <Divider type="vertical" />
            <ActionButton
              style={{
                border: "1px solid var(--color-primary)",
                borderRadius: "50px",
                color: "black",
              }}
            >
              <div className="flex gap-2 justify-center items-center">
                <FaLocationDot />
                {t("Rabat")}
              </div>
            </ActionButton>
          </div>
          <div id="smallScreen-actions">
            <ActionButton
              style={{
                color: "var(--color-primary)",
                borderRadius: "50px",
              }}
              to={
                location.pathname === "/beom/institute/addCenter"
                  ? LoginButton.path
                  : AddInstituteButton.path
              }
            >
              {location.pathname === "/beom/institute/addCenter"
                ? LoginButton.icon
                : AddInstituteButton.icon}
            </ActionButton>{" "}
            <ActionButton
              style={{
                color: "var(--color-accent)",
                background: "var(--color-primary)",
                borderRadius: "50px",
              }}
              to={
                location.pathname === "/beom/account/sign-up"
                  ? LoginButton.path
                  : SignUpButton.path
              }
            >
              {location.pathname === "/beom/account/sign-up"
                ? LoginButton.icon
                : SignUpButton.icon}
            </ActionButton>
          </div>
        </div>
      ) : (
        <CenteredFlexComponent className={style.actionButtonsOnMode}>
          <Button
            type="Link"
            style={{
              fontFamily: fontFamilyMedium,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IoSettingsSharp />
            <u>{t("Paramètres")}</u>
          </Button>
          <Avatar
            size={"default"}
            style={{
              backgroundColor: "black",
              fontFamily: fontFamilyMedium,
            }}
            title={userInfo?.email}
          >
            USER
          </Avatar>
          &nbsp;
          <Badge count="2">
            <Avatar
              size={"default"}
              style={{
                color: "black",
                fontFamily: fontFamilyMedium,
                background: "white",
              }}
            >
              <IoMdNotifications size={"large"} />
            </Avatar>{" "}
          </Badge>
          <Popover
            placement="bottom"
            content={
              <Button
                type="link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: fontFamilyMedium,
                }}
                onClick={() => {
                  logoutAction();
                }}
              >
                <p style={{ color: "black" }}> Se déconnecter</p>
              </Button>
            }
          >
            <Button
              type="link"
              style={{
                fontFamily: fontFamilyMedium,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RiLogoutCircleRLine size={"large"} color="red" />
            </Button>
          </Popover>
        </CenteredFlexComponent>
      )}
    </Space>
  );
};

export default NavbarActionsButtons;
export const AddInstituteButton = {
  label: "Devenez partenaire",
  path: `/beom/institute/addCenter`,
};
