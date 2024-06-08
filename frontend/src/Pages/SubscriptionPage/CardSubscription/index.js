import React from "react";
import style from "./CardSubscription.module.css";
import HoverableCard from "../../../Components/Utilities/HoverableCard";
import { motion } from "framer-motion";
import ResponsiveIcon from "../../../Components/Utilities/ResponsiveIcon";

const CardSubscription = ({ title, icon, delay, onClick, iconArray }) => {
  console.log(iconArray);
  const iconImages_notes = [
    { src: iconArray[0], width: 25 },
    { src: iconArray[1], width: 25, default: true },
    { src: iconArray[2], width: 45 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
    >
      <HoverableCard>
        <div className={style.cardSubscription}>
          <ResponsiveIcon alt="Example Icon" images={iconImages_notes} />
          <h2 className={style.cardTitle}>{title}</h2>
        </div>
      </HoverableCard>
    </motion.div>
  );
};
export default CardSubscription;
