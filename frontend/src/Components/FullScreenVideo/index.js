// src/components/FullScreenVideo.js
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import style from "./styles.module.css";
const FullScreenVideo = ({ image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      const { effectiveType } = connection;
      if (effectiveType.includes("2g") || effectiveType.includes("slow-2g")) {
        setShouldLoadVideo(false);
      } else {
        setShouldLoadVideo(true);
      }
    } else {
      setShouldLoadVideo(true);
    }
  }, []);

  return (
    <div
      className={style.backGroundImage}
      style={{
        background: `url('${image}')`,
      }}
    />
  );
};
export default FullScreenVideo;
/**<div className="video-container" ref={ref} style={{ position: "absolute" }}>
  {inView && shouldLoadVideo && (
    <video
      src={prop}
      style={{ height: "500px" }}
      autoPlay
      loop
      muted
      playsInline
    />
  )}
</div> */
