import { useSelector } from "react-redux";
import watch from "../../assets/watch-5.webp";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
// import FlipText from "../Main Components/layout/Inner/FlipText";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
const FlipText = lazy(() => import("../Main Components/layout/Inner/FlipText"));

export default function SectionOurStory({ windowWidth }) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let { scrollY } = useScroll();
  let navigate = useNavigate();
  let scrollState = useSelector(
    (state) => state.scrollHorizontal[state.scrollHorizontal.length - 2]
  );
  let heightStory = scrollState && scrollState.realHeight;

  let topStory = scrollState && scrollState.top;
  let clip = useTransform(scrollY, [topStory, heightStory], [100, 0]);
  let clipPath = useMotionTemplate`polygon(0% ${clip}%, 100% ${clip}%, 100% 100%, 0% 100%)`;
  let opacity = useTransform(
    scrollY,
    [topStory, heightStory, heightStory + 700],
    [1, 1, 0]
  );
  let opacityMobile = useTransform(
    scrollY,
    [topStory, heightStory, heightStory + 1700],
    [1, 1, 0]
  );

  let scale = useTransform(scrollY, [topStory, heightStory], [0, 1]);
  let translateX = useTransform(
    scrollY,
    [topStory, heightStory - 300],
    ["200px", "0px"]
  );
  let clip2 = useTransform(scrollY, [topStory, heightStory], [0, 100]);
  let clipPath2 = useMotionTemplate`polygon(0% 0%, 100% 0%, 100% ${clip2}%, 0% ${clip2}%)`;

  let firstText = "Inspirational Watch of";
  let secondText = "this year";

  let titleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  let charVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.section
        style={{
          opacity: windowWidth.windowWidth <= 767 ? opacityMobile : opacity,
        }}
        className="story w-[100vw]"
      >
        <div className="container container-ourStory ">
          <div className="watch ">
            <motion.img
              loading="lazy"
              width={450}
              height={450}
              style={{ clipPath, scale }}
              src={watch}
              alt="watch in section story"
            />
            <motion.div
              style={{
                translateX,
                scale,
                clipPath: clipPath2,
              }}
              className={`shape ${
                isDarkMode
                  ? "bg-dark-theme-first-color-dark"
                  : "bg-light-theme-first-color"
              }`}
            ></motion.div>
          </div>
          <div
            className={`content   ${
              isDarkMode
                ? "text-dark-theme-title-color-dark"
                : "text-light-theme-title-color"
            }`}
          >
            <div className="header-story">
              <hr
                className={` ${
                  isDarkMode
                    ? "bg-dark-theme-first-color-dark"
                    : "bg-light-theme-first-color"
                }`}
              ></hr>
              <h3 className="flex">
                <FlipText>OUR STORY</FlipText>
              </h3>
            </div>
            <motion.h2
              className={` font-bold  ${
                isDarkMode
                  ? "text-dark-theme-title-color-dark"
                  : "text-light-theme-title-color"
              }`}
            >
              <motion.span
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
              >
                {firstText.split("").map((char, index) => [
                  <motion.span
                    variants={charVariant}
                    transition={{
                      delay: 0.05 * index,
                    }}
                    key={index}
                  >
                    {char}
                  </motion.span>,
                ])}
              </motion.span>
              <br></br>
              <motion.span
                variants={titleVariant}
                initial="hidden"
                whileInView="visible"
              >
                {secondText.split("").map((char, index) => [
                  <motion.span
                    variants={charVariant}
                    transition={{ delay: 0.05 * index + 1.3 }}
                    key={index}
                  >
                    {char}
                  </motion.span>,
                ])}
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: [0, 0, 0, 1],
                y: 0,
                transition: { duration: 0.5, delay: 1.7 },
              }}
              className={
                isDarkMode
                  ? "text-dark-theme-text-color-dark"
                  : "text-light-theme-text-color"
              }
            >
              The latest and modern watches of this year, is <br></br>available
              in various presentations in this store,<br></br> discover them
              now.
            </motion.p>
            <motion.button
              aria-label="Discover Products"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: [0, 0, 0, 1],
                scale: [0, 7, 8, 9, 1],
              }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                damping: 5,
                mass: 0.5,
                delay: 2.2,
              }}
              onClick={() => {
                navigate("/products");
              }}
              className={
                isDarkMode
                  ? "bg-dark-theme-first-color-action-dark"
                  : "bg-light-theme-button-color text-light-theme-container-color"
              }
            >
              Discover
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
