import { ConfigProvider, FloatButton, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./Components/Loader";
import frFR from "antd/lib/locale/fr_FR";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import { loadFonts, loadImages } from "./Services";
import { FontsConfig } from "./fontsConfig";
import { routes } from "./routes";
import { AnimatePresence } from "framer-motion";
import style from "./App.module.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import { General_Assets } from "./config.dev";
import { useTranslation } from "react-i18next";
import axios from "axios"; // Import Axios
import { setCategories } from "./Reducers/applicationService/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import CookieConsentComponent from "./Components/CookieConsent";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const mainLoader = useSelector((state) => state.application.mainLoader);

  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const GlobalLoadingOverlay = ({ isLoading }) => {
    return isLoading ? (
      <div className="fixed top-0 left-0 w-full h-full bg-white opacity-90 flex justify-center items-center z-50">
        <div className="text-center">
          <Loader />
        </div>
      </div>
    ) : null;
  };
  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([loadFonts(FontsConfig)]);
        if (location.pathname === "/") {
          await loadImages(General_Assets);
        }
        // Fetch categories using Axios
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_API_URI_DEV}api/application/category/getAllCategoriesSanitized`
        );
        // Check if the response is successful

        if (response.status === 200) {
          dispatch(setCategories(response.data));

          // Handle the retrieved categories data
          console.log("Categories:", response.data);
        }
        setAppIsReady(true);
      } catch (error) {
        message.error("Error while preparing:", error);
      }
    }
    fetchData();
  }, [location.pathname]);

  if (!appIsReady) {
    return <Loader />;
  }

  // SEO Metadata for current route
  const getPageMeta = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: t("BeomCare | Landing Page"),
          description: t(
            "Welcome to BeomCare's landing page, your trusted partner for all men's and women's care."
          ),
          keywords:
            "haman barber shop, men's care, women's care, appointments, reservations, BeomCare",
          image: "https://www.beomcare.com/path/to/landing-page-image.jpg",
        };
      case "/beom/account/log-in":
        return {
          title: t("BeomCare | Login"),
          description: t(
            "Login to your BeomCare account to access personalized care services."
          ),
          keywords:
            "BeomCare login, barber shop login, men's care login, women's care login",
          image: "https://www.beomcare.com/path/to/login-page-image.jpg",
        };
      case "/beom/account/sign-up":
        return {
          title: t("BeomCare | Sign Up"),
          description: t(
            "Sign up for a new BeomCare account and start your care journey."
          ),
          keywords:
            "BeomCare sign up, barber shop sign up, men's care sign up, women's care sign up",
          image: "https://www.beomcare.com/path/to/sign-up-page-image.jpg",
        };
      case "/beom/institute/addCenter":
        return {
          title: t("BeomCare | Add Center"),
          description: t(
            "Subscribe to BeomCare and add your barber shop or care center."
          ),
          keywords:
            "BeomCare subscription, add barber shop, add care center, appointments, reservations",
          image: "https://www.beomcare.com/path/to/subscription-page-image.jpg",
        };
      case "/beom/homepage":
        return {
          title: t("BeomCare | Home"),
          description: t(
            "Welcome to your BeomCare homepage. Access all your barber and care services here."
          ),
          keywords:
            "BeomCare home, barber shop home, men's care home, women's care home",
          image: "https://www.beomcare.com/path/to/homepage-image.jpg",
        };
      default:
        return {
          title: t("BeomCare"),
          description: t(
            "Your trusted partner for all men's and women's care."
          ),
          keywords:
            "haman barber shop, men's care, women's care, appointments, reservations, BeomCare",
          image: "https://www.beomcare.com/path/to/default-image.jpg",
        };
    }
  };

  const meta = getPageMeta();

  return (
    <ConfigProvider
      locale={frFR}
      theme={{
        token: {
          colorPrimary: "white",
        },
        components: {
          Button: {
            defaultHoverColor: "gray",
            defaultActiveColor: "gray",
            defaultColor: "white",
          },
        },
      }}
    >
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BeomCare" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />
        <link rel="canonical" href={window.location.href} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2694509100930247"
          crossorigin="anonymous"
        ></script>
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BeomCare",
            url: window.location.href,
            logo: "https://www.beomcare.com/path/to/logo.jpg",
            sameAs: [
              "https://www.facebook.com/beomcare",
              "https://www.twitter.com/beomcare",
              "https://www.linkedin.com/company/beomcare",
              "https://www.instagram.com/beomcare",
            ],
          })}
        </script>
      </Helmet>{" "}
      <GlobalLoadingOverlay isLoading={mainLoader} />
      <div className={style.wrapper}>
        <header className={style.bgHeader}>
          <NavigationBar />
        </header>

        <AnimatePresence mode="wait">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </AnimatePresence>

        <FloatButton.BackTop style={{}} />
        <FloatButton
          icon={<QuestionCircleOutlined />}
          style={{
            right: 94,
          }}
        />
        <Footer />
        <CookieConsentComponent />
      </div>
    </ConfigProvider>
  );
}

export default App;
