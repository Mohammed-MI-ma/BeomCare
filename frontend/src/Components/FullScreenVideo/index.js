// src/components/FullScreenVideo.js
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import prop from "../../Assets/promo.mp4";
const FullScreenVideo = () => {
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
    <div className="video-container" ref={ref} style={{ position: "absolute" }}>
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
    </div>
  );
};

export default FullScreenVideo;
