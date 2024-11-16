import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { lazy, useEffect, useState } from "react";
const Footer = lazy(() => import("../../Footer"));
import Nav from "../../Nav";
import Splash from "../../Splash";

export default function Inner({ children, extraCheese, refresh, error }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  var timeout;
  let transAnimation = (variants) => {
    return {
      initial: "start",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  let opacity = {
    start: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1 } },
    exit: {
      opacity: 0.5,
      transition: {
        duration: 1.2,
      },
    },
  };
  let slide = {
    start: {
      top: "100vh",
    },
    enter: { top: "100vh" },
    exit: {
      top: "0vh",
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };
  let zoomOut = {
    start: {
      y: "0vh",
      scale: 1,
      opacity: 1,
    },
    enter: {
      y: "0vh",
      scale: 1,
      opacity: 1,
    },
    exit: {
      y: "-20%",
      scale: 0.7,
      opacity: 0.5,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
  };
  let mainBgDark = {
    start: {
      backgroundColor: "#1f1f1f",
    },
    enter: {
      backgroundColor: "#1f1f1f",
    },
    exit: {
      backgroundColor: "#fcfcfc",
    },
  };
  let mainBgLight = {
    start: {
      backgroundColor: "#fcfcfc",
    },
    enter: {
      backgroundColor: "#fcfcfc",
    },
    exit: {
      backgroundColor: "#1f1f1f",
    },
  };
  useEffect(() => {
    let myCursor = document.querySelector(".cursorBack");
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      myCursor.style.display = "block";
      myCursor.style.top = y + "px";
      myCursor.style.left = x + "px";
      myCursor.style.boxShadow = "0px 0px 10px 0px gray";
      function mouseStop() {
        myCursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStop, 3000);
    });
    window.addEventListener("mouseout", (e) => {
      myCursor.style.display = "none";
    });
  }, []);

  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("isRefreshed", "true");
      localStorage.setItem("delayEveryThing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    const isRefreshed = localStorage.getItem("isRefreshed");
    if (isRefreshed) {
      setShowSplash(true);
      localStorage.removeItem("isRefreshed");
    }
  }, []);
  return (
    <>
      {!error && showSplash && <Splash />}
      {refresh && showSplash && <Splash />}
      <motion.div
        exit={{ opacity: 0 }}
        className={`cursorBack fixed size-5 z-[99999999] border-2 hidden before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:size-[7px] before:rounded-full -translate-y-[43%] -translate-x-[35%] rounded-full  endTablet:hidden ${
          isDarkMode
            ? "border-dark-theme-first-color-dark before:bg-dark-theme-first-color-dark"
            : "border-light-theme-first-color before:bg-light-theme-first-color"
        } pointer-events-none`}
      ></motion.div>
      <motion.div {...transAnimation(isDarkMode ? mainBgDark : mainBgLight)}>
        <motion.div
          {...transAnimation(slide)}
          className={`fixed h-[100vh] w-[100vw] top-0 left-0 z-50 ${
            isDarkMode
              ? "bg-dark-theme-body-color-dark"
              : "bg-light-theme-body-color"
          }`}
        />
        <motion.div {...transAnimation(zoomOut)}>
          <motion.main
            {...transAnimation(opacity)}
            className={` ${
              isDarkMode
                ? "bg-dark-theme-body-color-dark"
                : "bg-light-theme-body-color"
            }`}
          >
            {extraCheese && <Nav />}

            {children}

            {extraCheese && <Footer />}
          </motion.main>
        </motion.div>
      </motion.div>
    </>
  );
}
