import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFontFamily from "../../Utilities/useFontFamily";
import { Divider } from "antd";
import { CustomDivider } from "../LoginPage";

const HomePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const { t, ready, error } = useTranslation();
  const fontFamilyLight = useFontFamily("Light");

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  if (!isOnline) {
    return <div>{t("offline_message")}</div>;
  }

  if (error) {
    return <div>{t("translation_error_message")}</div>;
  }

  if (!ready) {
    return <div>{t("loading_message")}</div>;
  }

  return (
    <section style={{ flex: 1 }}>
      <section id="main-content" className="flex items-center flex-col">
        <section
          className="bg-cover relative mb-5 flex items-center justify-center flex-col-reverse lg:flex-row w-full"
          style={{
            width: "99vw",
            margin: 0,
            background: "black",
            color: "white",
            height: "300px",
            position: "relative",
          }}
        >
          <div
            id="searchEngine"
            className="p-4 rounded-lg text-center absolute"
            style={{
              boxShadow:
                "0 3px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)",
            }}
          >
            <h1 style={{ fontSize: "40px" }}>{t("brand_name")}</h1>{" "}
            <CustomDivider style={{ margin: "10px auto" }} />
            <h2 style={{ fontFamily: fontFamilyLight }}>
              {t("revolutionizing_wellbeing")}
            </h2>
            <h2 style={{ fontFamily: fontFamilyLight }}>
              {t("available_date")}
            </h2>
            <p style={{ fontSize: "10px" }}>support@beomcare.com</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
