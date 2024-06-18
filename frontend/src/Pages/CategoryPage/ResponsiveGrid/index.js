import React from "react";
import useFontFamily from "../../../Utilities/useFontFamily";
import test from "./test.png";
import HoverableCard from "../../../Components/Utilities/HoverableCard";
import { motion } from "framer-motion";
import { Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

const ResponsiveGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 6, 7, 8, 9, 10].map((category, index) => (
          <CardCitiesXCategory
            key={category.id}
            delay={index * 0.4 + 0.2} // Delays each card by 0.2s more than the previous one
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveGrid;

const CardCitiesXCategory = ({ delay }) => {
  const fontFamilyLight = useFontFamily("Light");
  const fontFamilyBold = useFontFamily("SemiBold");
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <HoverableCard>
        <div className="h-[250px] rounded-lg flex flex-col gap-3">
          <div
            className="w-full h-[75%] rounded-lg"
            style={{
              backgroundImage: `url(${test})`,
              position: "relative",
              backgroundPosition: "center",
              cursor: "pointer",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: fontFamilyBold, color: "white" }}>
              AGDAL RIAD
            </div>
          </div>
          <footer>
            <Avatar.Group
              size={"small"}
              className="flex gap-2 items-center"
              max={{
                count: 2,
                style: {
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                },
              }}
            >
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{
                  backgroundColor: "black",
                }}
              >
                +50
              </Avatar>
              <p
                style={{
                  fontSize: "var(--font-tiny-size)",
                  fontFamily: fontFamilyLight,
                }}
              >
                utilisateurs actifs
              </p>
            </Avatar.Group>
            <p style={{ fontFamily: fontFamilyLight, fontSize: "12px" }}>
              Découvrez tous les centres
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <h2 style={{ fontFamily: fontFamilyBold }}>à</h2>
              <p style={{ fontFamily: fontFamilyLight, fontSize: "12px" }}>
                AGDAL RIAD
              </p>
            </div>
          </footer>
        </div>
      </HoverableCard>
    </motion.div>
  );
};
