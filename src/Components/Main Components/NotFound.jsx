import { useSelector } from "react-redux";
import catLight from "../../assets/cat-notFound-light.webp";
import catDark from "../../assets/cat-notFound-dark.webp";
import { useNavigate } from "react-router-dom";
import Inner from "./layout/Inner/Inner";
import { motion } from "framer-motion";
import { useEffect } from "react";
export default function NotFound() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let Navigate = useNavigate();
  useEffect(() => {
    document.querySelector("body").style.overflowY = "hidden";
  }, []);
  useEffect(() => {
    if (
      isDarkMode &&
      document.querySelector(".cart") &&
      document.querySelector(".dark-btn") &&
      document.querySelector(".menu")
    ) {
      document
        .querySelector(".cart")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".menu")
        .classList.add("fill-dark-theme-title-color-dark");
    } else if (
      document.querySelector(".cart") &&
      document.querySelector(".dark-btn") &&
      document.querySelector(".menu")
    ) {
      document
        .querySelector(".cart")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".menu")
        .classList.remove("fill-dark-theme-title-color-dark");
    }
    localStorage.removeItem("colorNavItem");
  });
  return (
    <>
      <Inner
        extraCheese={false}
        error={true}
        id="notFound"
        overFlowError={true}
      >
        <motion.div
          initial={{ transform: "translateX(-10%) translateY(-10%)" }}
          animate={{
            transform: "translateX(10%) translateY(10%)",
          }}
          transition={{
            repeat: Infinity,
            duration: 0.2,
            ease: "linear",
            repeatType: "mirror",
          }}
          // You can download these PNGs here:
          // https://www.hover.dev/black-noise.png
          // https://www.hover.dev/noise.png
          style={{
            backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
          }}
          className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
        ></motion.div>
        <div
          className={`h-[100vh] w-full font-custRoboto flex justify-center items-center ${
            isDarkMode
              ? "bg-dark-theme-body-color-dark text-dark-theme-title-color-dark text-stroke-dark-theme-title-color-dark"
              : "bg-light-theme-body-color text-light-theme-title-color text-stroke-light-theme-title-color"
          }`}
        >
          <div className="container flex items-center justify-center gap-9 flex-col">
            <h1 className="text-4xl font-bold tracking-[01px] text-stroke-[1px] text-transparent ">
              ERROR{" "}
              <span
                className={`text-stroke-[1px]
                ${
                  isDarkMode
                    ? "text-stroke-dark-theme-first-color-dark"
                    : "text-stroke-light-theme-first-color"
                }`}
              >
                404!!
              </span>
            </h1>
            <div className="cat-dev w-96 flex justify-center items-center endPhone:w-52">
              {isDarkMode ? (
                <img
                  width={384}
                  height={384}
                  src={catDark}
                  alt="cat developer"
                />
              ) : (
                <img
                  width={384}
                  height={384}
                  src={catLight}
                  alt="cat developer"
                />
              )}
            </div>
            <p className="text-center font-medium">
              <span
                className={
                  isDarkMode
                    ? "text-dark-theme-first-color-dark"
                    : "text-light-theme-first-color"
                }
              >
                Meow!,
              </span>{" "}
              looks like you’ve wandered off the map! This page is as lost
              <br></br>
              as a cat in a dog park. Let’s get you back on track.
            </p>

            <button
              aria-label="Go To Home Button"
              onClick={() => {
                localStorage.removeItem("delayEveryThing");
                setTimeout(() => {
                  document.querySelector("body").style.cssText =
                    "overflow-y:auto";
                }, 100);
                setTimeout(() => {
                  Navigate("/");
                }, 200);
                localStorage.setItem("colorNavItem", "home");
              }}
              className={`p-4 text-2xl font-semibold text-light-theme-title-color ${
                isDarkMode
                  ? "bg-dark-theme-first-color-dark"
                  : "bg-light-theme-first-color"
              }`}
            >
              Go To Home
              <hr className="border-0 h-[3px] bg-light-theme-title-color w-2/3"></hr>
            </button>
          </div>
        </div>
      </Inner>
    </>
  );
}
