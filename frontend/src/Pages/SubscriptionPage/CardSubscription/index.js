import React from "react";
import style from "./CardSubscription.module.css";
import HoverableCard from "../../../Components/Utilities/HoverableCard";
import { motion } from "framer-motion";

const CardSubscription = ({ title, icon, delay, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
    >
      <HoverableCard>
        <div className={style.cardSubscription}>
          <img alt={title} width="50" height={"50"} src={icon} />
          <h2 className={style.cardTitle}>{title}</h2>
        </div>
      </HoverableCard>
    </motion.div>
  );
};
export default CardSubscription;
