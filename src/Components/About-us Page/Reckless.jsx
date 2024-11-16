import RecklessLight from "../../assets/recklessCat-lightMode.webp";
import RecklessDark from "../../assets/recklessCat-DarkMode.webp";
import taalOmrakDarkMode from "../../assets/taal-omrak-darkMode.webp";
import taalOmrakLighMode from "../../assets/taal-omrak-lightmode.webp";
import PoorCat from "../../assets/poor cat.webp";
import { useSelector } from "react-redux";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Reckless({ windowHeight }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let { scrollY } = useScroll();
  let targetRef = useRef();
  let [height, setHeight] = useState(0);
  let targetRef2 = useRef();
  let [height2, setHeight2] = useState(0);
  let targetRef3 = useRef();
  let [height3, setHeight3] = useState(0);
  useEffect(() => {
    let totalHeight =
      targetRef.current.offsetTop + targetRef.current.offsetHeight;
    setHeight(totalHeight - windowHeight);
    let totalHeight2 =
      targetRef2.current.offsetTop + targetRef2.current.offsetHeight;
    setHeight2(totalHeight2 - windowHeight);
    let totalHeight3 =
      targetRef3.current.offsetTop + targetRef3.current.offsetHeight;
    setHeight3(totalHeight3 - windowHeight);
  }, []);
  let y = useTransform(scrollY, [0, (1 / 3) * height], ["0%", "-50%"]);
  let top = useTransform(scrollY, [0, (1 / 3) * height], ["0%", "50%"]);
  let y2 = useTransform(
    scrollY,
    [0, (1 / 3) * height2, (2 / 3) * height2],
    ["0%", "0%", "-50%"]
  );
  let top2 = useTransform(
    scrollY,
    [0, (1 / 3) * height2, (2 / 3) * height2],
    ["0%", "0%", "50%"]
  );
  let y3 = useTransform(scrollY, [0, (1 / 3) * height3], ["0%", "-50%"]);
  let top3 = useTransform(scrollY, [0, (1 / 3) * height3], ["0%", "50%"]);
  let yImage = useTransform(
    scrollY,
    [0, (2 / 3) * height, height, height + 700],
    ["200px", "0px", "0px", "-200px"]
  );
  let yImage2 = useTransform(
    scrollY,
    [0, (2 / 3) * height2, height2, height2 + 700],
    ["-200px", "0px", "0px", "200px"]
  );
  let yImage3 = useTransform(
    scrollY,
    [0, (1 / 3) * height3, (2 / 3) * height3, height3, height3 + 700],
    ["200px", "00px", "0px", "0px", "-200px"]
  );
  // let yImage3 = useTransform(
  //   scrollY,
  //   [0, (1 / 3) * height3, (2 / 3) * height3, height3, height3 + 700],
  //   ["200px", "200px", "0px", "0px", "-200px"]
  // );
  let yContent = useTransform(
    scrollY,
    [0, (2 / 3) * height, height, height + 700],
    ["-200px", "0px", "0px", "200px"]
  );
  let yContent2 = useTransform(
    scrollY,
    [
      0,
      (1 / 3) * height2,
      (2 / 3) * height2 - 200,
      (2 / 3) * height2,
      height2,
      height2 + 700,
    ],
    ["200px", "200px", "100px", "0px", "0px", "-200px"]
  );

  let yContent3 = useTransform(
    scrollY,
    [0, (1 / 3) * height2, (2 / 3) * height3, height3, height3 + 700],
    ["-200px", "-200px", "0px", "0px", "200px"]
  );
  let opacity = useTransform(
    scrollY,
    [0, (1 / 3) * height, (2 / 3) * height, height, height + 200],
    [0, 0, 1, 1, 0]
  );
  let opacity2 = useTransform(
    scrollY,
    [
      0,
      (1 / 3) * height2,
      (2 / 3) * height2 - 200,
      (2 / 3) * height2,
      height2,
      height2 + 200,
    ],
    [0, 0, 0, 1, 1, 0]
  );
  let opacity3 = useTransform(
    scrollY,
    [0, (1 / 3) * height2, (2 / 3) * height3, height3, height3 + 500],
    [0, 0, 1, 1, 0]
  );
  // let opacity3 = useTransform(
  //   scrollY,
  //   [0, (1 / 3) * height2 + 3000, (2 / 3) * height3, height3, height3 + 500],
  //   [0, 0, 1, 1, 0]
  // );
  return (
    <>
      {/* h-[1030vh] */}
      <section className=" h-[600vh] ">
        <h2
          className={`text-4xl font-bold uppercase text-center py-8 ${
            isDarkMode
              ? "text-dark-theme-title-color-dark"
              : "text-light-theme-title-color"
          }`}
        >
          We Are...
        </h2>
        <div className="h-20 w-12 border border-white rounded-2xl relative my-0 mx-auto">
          <motion.div
            initial={{ opacity: 1, top: 15 }}
            animate={{ opacity: [0, 1, 1, 0], top: 50 }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="size-3 rounded-full bg-white absolute left-1/2 -translate-x-1/2"
          ></motion.div>
          <div className="absolute h-8 w-[2px] bg-white left-1/2 -translate-x-1/2 top-[20px]"></div>
        </div>
        <div className="absolute w-full">
          <div ref={targetRef} className="h-[150vh] relative">
            <motion.div
              style={{ y: y, top }}
              className="container sticky  flex justify-between py-8 items-center endPhone:flex-col endPhone:gap-12  "
            >
              <motion.div
                style={{ y: yImage, opacity }}
                className="cat relative flex justify-center items-center w-1/4 endPhone:w-full"
              >
                <img
                  width={307.5}
                  height={307.5}
                  src={isDarkMode ? RecklessDark : RecklessLight}
                  alt="reckless cat"
                />
                <span className="absolute -bottom-5 bg-dark-theme-first-color-dark text-light-theme-title-color text-4xl font-bold endMediumLap:text-2xl endTablentMinMax:text-lg py-4 w-full text-center">
                  Reckless Cat
                </span>
              </motion.div>
              <motion.div
                style={{ y: yContent, opacity }}
                className="content w-1/2 endPhone:w-full endPhone:text-center text-dark-theme-title-color-dark flex flex-col gap-2"
              >
                <h2
                  className={`pb-2 border-b-2 text-4xl uppercase ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark"
                      : "text-light-theme-first-color border-light-theme-first-color"
                  }`}
                >
                  Reckless Cat
                </h2>
                <p
                  className={
                    isDarkMode
                      ? "text-dark-theme-text-color-dark"
                      : "text-light-theme-text-color"
                  }
                >
                  Why would anyone in their right mind choose to do hard labor
                  unless there’s a shiny reward at the end? Imagine a cat, who’d
                  rather chase its tail for fun than do anything remotely
                  useful. Who wants to endure the hassle of catching mice when
                  you can lounge in the sun and get belly rubs instead?
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div ref={targetRef2} className="h-[150vh] relative">
            <motion.div
              style={{ y: y2, top: top2 }}
              className="container sticky  flex flex-row-reverse justify-between py-8 items-center endPhone:flex-col-reverse endPhone:gap-12  "
            >
              <motion.div
                style={{ y: yImage2, opacity: opacity2 }}
                className="cat relative flex justify-center items-center w-1/4 endPhone:w-full"
              >
                <img
                  width={307.5}
                  height={307.5}
                  src={isDarkMode ? taalOmrakDarkMode : taalOmrakLighMode}
                  alt="reckless cat"
                />
                <span className="absolute -bottom-8 endPhone:text-2xl bg-dark-theme-first-color-dark text-light-theme-title-color text-4xl font-bold endMediumLap:text-2xl endTablentMinMax:text-lg py-4 w-full text-center">
                  Taal Omrak Cat
                </span>
              </motion.div>
              <motion.div
                style={{ y: yContent2, opacity: opacity2 }}
                className="content w-1/2 endPhone:w-full endPhone:text-center text-dark-theme-title-color-dark flex flex-col gap-2"
              >
                <h2
                  className={`pb-2 border-b-2 text-4xl uppercase endPhone:text-2xl  ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark"
                      : "text-light-theme-first-color border-light-theme-first-color"
                  }`}
                >
                  Taal Omrak Cat
                </h2>
                <p
                  className={
                    isDarkMode
                      ? "text-dark-theme-text-color-dark"
                      : "text-light-theme-text-color"
                  }
                >
                  ترا والله ميااو
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div ref={targetRef3} className="h-[150vh] relative">
            <motion.div
              style={{ y: y3, top: top3 }}
              className="container sticky  flex justify-between py-8 items-center endPhone:flex-col endPhone:gap-12  "
            >
              <motion.div
                style={{ y: yImage3, opacity: opacity3 }}
                className="cat relative flex justify-center items-center w-1/4 endPhone:w-full"
              >
                <img
                  width={307.5}
                  height={307.5}
                  src={PoorCat}
                  alt="reckless cat"
                />
                <span className="absolute -bottom-5 bg-dark-theme-first-color-dark text-light-theme-title-color text-4xl font-bold endMediumLap:text-2xl endTablentMinMax:text-lg py-4 w-full text-center">
                  Poor Cat
                </span>
              </motion.div>
              <motion.div
                style={{ y: yContent3, opacity: opacity3 }}
                className="content w-1/2 endPhone:w-full endPhone:text-center text-dark-theme-title-color-dark flex flex-col gap-2"
              >
                <h2
                  className={`pb-2 border-b-2 text-4xl uppercase ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark"
                      : "text-light-theme-first-color border-light-theme-first-color"
                  }`}
                >
                  Poor Cat
                </h2>
                <p
                  className={
                    isDarkMode
                      ? "text-dark-theme-text-color-dark"
                      : "text-light-theme-text-color"
                  }
                >
                  Everything we know about him is that he just says,<br></br>{" "}
                  &quot; شغلني الهي تنستر دنيا واخره &quot;.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="h-screen endPhone:h-0 flex justify-center items-center gap-12 py-8 endPhone:flex-col container">
            <div className="cat relative flex justify-center items-center w-1/4 endPhone:w-full">
              <img
                width={307.5}
                height={307.5}
                src={PoorCat}
                alt="reckless cat"
              />
              <span className="absolute -bottom-5 bg-dark-theme-first-color-dark text-light-theme-title-color text-4xl font-bold endMediumLap:text-2xl endTablentMinMax:text-lg py-4 w-full text-center">
                Poor Cat
              </span>
            </div>
            <div className="cat relative flex justify-center items-center w-1/3  endPhone:w-full">
              <img
                width={409.99}
                height={409.99}
                src={isDarkMode ? RecklessDark : RecklessLight}
                alt="reckless cat"
              />
              <span className="absolute -bottom-5 bg-dark-theme-first-color-dark text-light-theme-title-color text-4xl font-bold endMediumLap:text-2xl endTablentMinMax:text-lg py-4 w-full text-center">
                Reckless Cat
              </span>
            </div>
            <div className="cat relative flex justify-center items-center w-1/4 endPhone:w-full">
              <img
                width={307.5}
                height={307.5}
                src={isDarkMode ? taalOmrakDarkMode : taalOmrakLighMode}
                alt="reckless cat"
              />
              <span className="absolute -bottom-5 endPhone:text-2xl bg-dark-theme-first-color-dark text-light-theme-title-color text-4xl font-bold endMediumLap:text-2xl endTablentMinMax:text-lg py-4 w-full text-center">
                Taal Omrak Cat
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
