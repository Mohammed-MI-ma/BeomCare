import { ConfigProvider, FloatButton, message } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Components/Loader";
import frFR from "antd/lib/locale/fr_FR";
import { loadFonts } from "./Services";
import { FontsConfig } from "./fontsConfig";

import style from "./App.module.css";
import NavigationBar from "./Components/NavigationBar";

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([loadFonts(FontsConfig)]);
        switch (location.pathname) {
          case "/":
            // await Promise.all([loadImages(General_Assets)]);
            break;
          default:
            break;
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

  return (
    <ConfigProvider locale={frFR}>
      <div className={style.wrapper}>
        <header className={style.bgHeader}>
          <NavigationBar />
        </header>
      </div>
      <FloatButton.BackTop visibilityHeight={0} />
    </ConfigProvider>
  );
}

export default App;
