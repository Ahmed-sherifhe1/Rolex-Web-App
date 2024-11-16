import { useEffect } from "react";
import stWatch from "../../assets/st-watch.webp";
import stWatchMobile from "../../assets/st-watch-mobile.webp";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { addToCart } from "../../RTK/slices/cart-slice";
import { useNavigate } from "react-router-dom";

let firstText = "NEW WATCH";
let secondText = "COLLECTIONS B720";

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

function SectionHome({ windowWidth }) {
  let isDelayed = localStorage.getItem("delayEveryThing");
  const isDarkMode = Boolean(useSelector((state) => state.theme.isDarkMode));
  let productSelector = useSelector((state) => state.products);
  let cart = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  if (isDarkMode) {
    document.body.classList.remove("bg-light-theme-body-color");
    document.body.classList.add("bg-dark-theme-body-color-dark");
  } else {
    document.body.classList.remove("bg-dark-theme-body-color-dark");

    document.body.classList.add("transition-all");
    document.body.classList.add("duration-700");
    document.body.classList.add("bg-light-theme-body-color");
  }
  useEffect(() => {
    if (isDarkMode) {
      document
        .querySelector(".cart")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.remove("fill-dark-theme-title-color-dark");
    } else {
      document
        .querySelector(".cart")
        .classList.remove("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.remove("fill-dark-theme-title-color-dark");
    }
  }, [isDarkMode, windowWidth, cart]);

  let anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  let upStair = {
    initial: {
      top: "-100%",
    },
    enter: (i) => ({
      top: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: isDelayed ? 7.65 + 0.15 * i : 2.35 + 0.15 * i,
      },
    }),
  };
  return (
    <>
      <section className="section-home endPhone:overflow-x-hidden">
        <div className="container container-home-sec ">
          {windowWidth > 767 && (
            <>
              <div className="social">
                <ul>
                  <motion.li
                    initial={{ x: -100, y: -100, rotateZ: 0, opacity: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotateZ: -90,
                      opacity: [0, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isDelayed ? 8.85 : 3.55,
                    }}
                  >
                    <a
                      aria-label="Facebook"
                      title="Visit Facebook"
                      href="https://www.facebook.com/profile.php?id=100012178745640"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ x: -100, y: -100, rotateZ: 0, opacity: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotateZ: -90,
                      opacity: [0, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isDelayed ? 9.35 : 4.05,
                    }}
                  >
                    <a
                      aria-label="Twitter"
                      title="Visit Twitter"
                      href="https://x.com/AhmedSherifhe1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ x: -100, y: -100, rotateZ: 0, opacity: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotateZ: -90,
                      opacity: [0, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isDelayed ? 9.85 : 4.55,
                    }}
                  >
                    <a
                      aria-label="Instagram"
                      title="Visit Instagram"
                      href="https://www.instagram.com/ahhhmmeed_sheerif/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </motion.li>
                </ul>
              </div>
              <div className="content">
                <motion.h2
                  className={`   ${
                    isDarkMode
                      ? "text-dark-theme-title-color-dark"
                      : "text-light-theme-title-color"
                  }`}
                >
                  <motion.span
                    variants={titleVariant}
                    initial="hidden"
                    animate="visible"
                  >
                    {firstText.split("").map((char, index) => [
                      <motion.span
                        variants={charVariant}
                        transition={{
                          delay: isDelayed
                            ? 0.05 * index + 1.2 + 5.3
                            : 0.05 * index + 1.2,
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
                    animate="visible"
                  >
                    {secondText.split("").map((char, index) => [
                      <motion.span
                        variants={charVariant}
                        transition={{
                          delay: isDelayed
                            ? 0.05 * index + 1.75 + 5.3
                            : 0.05 * index + 1.75,
                        }}
                        key={index}
                      >
                        {char}
                      </motion.span>,
                    ])}
                  </motion.span>
                </motion.h2>
                <motion.p
                  // style={{ "font-display": "swap" }}
                  loading="lazy"
                  initial={{
                    y: 100,
                    opacity: 0,
                    color: isDarkMode ? "#1F1F1F" : "#FCFCFC",
                  }}
                  animate={{
                    y: [80, 60, 40, 20, 0],
                    opacity: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    ],
                    color: isDarkMode ? "#bfbfbf" : "#595959",
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: isDelayed ? 7.15 : 1.85,
                  }}
                  className={` ${
                    isDarkMode
                      ? "text-dark-theme-text-color-dark"
                      : "text-light-theme-text-color"
                  }`}
                >
                  Latest arrival of the new imported watches of the B720 series,
                  with a modern and resistant design.
                </motion.p>
                <motion.span
                  initial={{
                    opacity: 0,
                    x: 100,
                    color: isDarkMode ? "#1F1F1F" : "#FCFCFC",
                  }}
                  animate={{
                    opacity: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    ],
                    x: [80, 60, 40, 20, 0],
                    color: isDarkMode ? "#efbe8a" : "#8A4000",
                  }}
                  transition={{ duration: 0.5, delay: isDelayed ? 7.65 : 2.35 }}
                  className={`  ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-[#8A4000]"
                  }`}
                >
                  $1245
                </motion.span>
                <div className="buttons ">
                  <motion.button
                    aria-label="Discover Products"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: [0, 0, 1], x: 0 }}
                    transition={{
                      duration: 0.7,
                      type: "spring",
                      delay: isDelayed ? 8.7 : 3.4,
                    }}
                    className={
                      isDarkMode
                        ? "bg-dark-theme-text-color-dark text-light-theme-text-color"
                        : "bg-light-theme-text-color-light text-light-theme-body-color"
                    }
                    onClick={() => {
                      navigate("/products/13");
                    }}
                  >
                    Discover
                  </motion.button>
                  <motion.button
                    aria-label="Add To Cart"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0, 0, 1],
                      scale: [0, 7, 8, 9, 1],
                    }}
                    onClick={() => {
                      dispatch(addToCart(productSelector[12]));
                    }}
                    transition={{
                      duration: 0.7,
                      type: "spring",
                      stiffness: 200,
                      damping: 5,
                      mass: 0.5,
                      delay: isDelayed ? 8.65 : 3.35,
                    }}
                    className={`py-6 px-8 endTablet:py-3 endTablet:px-4  font-medium   text-light-theme-container-color drop-shadow-[0_12px_24px_rgba(26,26,26,0.6)] ${
                      isDarkMode
                        ? "bg-dark-theme-first-color-action-dark"
                        : "bg-light-theme-button-color"
                    }`}
                  >
                    ADD TO CART
                  </motion.button>
                </div>
              </div>
              <div className={`shape  `}>
                <div className="stairs absolute top-0 left-0 h-full w-full pointer-events-none flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      {...anim(upStair, 5 - i)}
                      className={`h-full w-full relative ${
                        isDarkMode
                          ? "bg-dark-theme-first-color-dark"
                          : "bg-light-theme-first-color"
                      }`}
                      key={i}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
          <div className="watch">
            <picture>
              {/* <source srcSet={stWatchMobile} media="(max-width: 767px)" /> */}
              {/* <source srcSet="image-800w.jpg" media="(min-width: 768px) and (max-width: 1200px)" /> */}
              <source srcSet={stWatch} media="(min-width: 768px)" />
              {/* <source srcSet="image-1200w.jpg" media="(min-width: 1201px)" /> */}
              <motion.img
                initial={{ filter: "blur(200px) grayscale(1)", opacity: 0 }}
                animate={{
                  filter: [
                    "blur(200px) grayscale(0)",
                    "blur(200px) grayscale(0)",
                    "blur(200px) grayscale(0)",
                    "blur(200px) grayscale(0)",
                    "blur(0px) grayscale(0)",
                  ],
                  opacity: [0.5, 1, 1, 1, 1, 1],
                }}
                transition={{ duration: 1, delay: isDelayed ? 8.85 : 3.55 }}
                src={stWatch}
                alt="Black Watch"
                width={420}
                height={560}
                loading="lazy"
                importance
              />
            </picture>

            {/* <motion.img
              rel="preload"
              fetchpriority="high"
              initial={{ filter: "blur(200px) grayscale(1)", opacity: 0 }}
              animate={{
                filter: [
                  "blur(200px) grayscale(0)",
                  "blur(200px) grayscale(0)",
                  "blur(200px) grayscale(0)",
                  "blur(200px) grayscale(0)",
                  "blur(0px) grayscale(0)",
                ],
                opacity: [0.5, 1, 1, 1, 1, 1],
              }}
              transition={{ duration: 1, delay: isDelayed ? 8.85 : 3.55 }}
              src={stWatch}
              alt="Black Watch"
              width={420}
              height={560}
            /> */}
          </div>
          {windowWidth < 768 && (
            <>
              <div className="social">
                <ul>
                  <motion.li
                    initial={{ x: -100, y: -100, rotateZ: 0, opacity: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotateZ: -90,
                      opacity: [0, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isDelayed ? 8.85 : 3.55,
                    }}
                  >
                    <a
                      aria-label="Facebook"
                      title="Visit Facebook"
                      href="https://www.facebook.com/profile.php?id=100012178745640"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ x: -100, y: -100, rotateZ: 0, opacity: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotateZ: -90,
                      opacity: [0, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isDelayed ? 9.35 : 4.05,
                    }}
                  >
                    <a
                      aria-label="Twitter"
                      title="Visit Twitter"
                      href="https://x.com/AhmedSherifhe1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ x: -100, y: -100, rotateZ: 0, opacity: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                      rotateZ: -90,
                      opacity: [0, 0, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isDelayed ? 9.85 : 4.55,
                    }}
                  >
                    <a
                      aria-label="Instagram"
                      title="Visit Instagram"
                      href="https://www.instagram.com/ahhhmmeed_sheerif/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </motion.li>
                </ul>
              </div>
              <div className="content">
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
                    animate="visible"
                  >
                    {firstText.split("").map((char, index) => [
                      <motion.span
                        variants={charVariant}
                        transition={{
                          delay: isDelayed
                            ? 0.05 * index + 1.2 + 5.3
                            : 0.05 * index + 1.2,
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
                    animate="visible"
                  >
                    {secondText.split("").map((char, index) => [
                      <motion.span
                        variants={charVariant}
                        transition={{
                          delay: isDelayed
                            ? 0.05 * index + 1.75 + 5.3
                            : 0.05 * index + 1.75,
                        }}
                        key={index}
                      >
                        {char}
                      </motion.span>,
                    ])}
                  </motion.span>
                </motion.h2>

                <motion.p
                  // style={{ "font-display": "swap" }}
                  loading="lazy"
                  initial={{
                    y: 100,
                    opacity: 0,
                    color: isDarkMode ? "#1F1F1F" : "#FCFCFC",
                  }}
                  animate={{
                    y: [80, 60, 40, 20, 0],
                    opacity: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    ],
                    color: isDarkMode ? "#bfbfbf" : "#595959",
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                    delay: isDelayed ? 7.15 : 1.85,
                  }}
                  className={` ${
                    isDarkMode
                      ? "text-dark-theme-text-color-dark"
                      : "text-light-theme-text-color"
                  }`}
                >
                  Latest arrival of the new imported watches of the B720 series,
                  with a modern and resistant design.
                </motion.p>
                <motion.span
                  initial={{
                    opacity: 0,
                    x: 100,
                    color: isDarkMode ? "#1F1F1F" : "#FCFCFC",
                  }}
                  animate={{
                    opacity: [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                    ],
                    x: [80, 60, 40, 20, 0],
                    color: isDarkMode ? "#efbe8a" : "#ffb568",
                  }}
                  transition={{ duration: 0.5, delay: isDelayed ? 7.65 : 2.35 }}
                  className={`  ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-[#8A4000]"
                  }`}
                >
                  $1245
                </motion.span>
                <div className="buttons ">
                  <motion.button
                    aria-label="Discover Products"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: [0, 0, 1], x: 0 }}
                    transition={{
                      duration: 0.7,
                      type: "spring",
                      delay: isDelayed ? 8.7 : 3.4,
                    }}
                    className={
                      isDarkMode
                        ? "bg-dark-theme-text-color-dark text-light-theme-text-color"
                        : "bg-light-theme-text-color-light text-light-theme-body-color"
                    }
                  >
                    Discover
                  </motion.button>
                  <motion.button
                    aria-label="Add To Cart"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0, 0, 1],
                      scale: [0, 7, 8, 9, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      type: "spring",
                      stiffness: 200,
                      damping: 5,
                      mass: 0.5,
                      delay: isDelayed ? 8.65 : 3.35,
                    }}
                    onClick={() => {
                      dispatch(addToCart(productSelector[12]));
                    }}
                    className={`py-6 px-8 endTablet:py-3 endTablet:px-4  font-medium   text-light-theme-container-color drop-shadow-[0_12px_24px_rgba(26,26,26,0.6)] ${
                      isDarkMode
                        ? "bg-dark-theme-first-color-action-dark"
                        : "bg-light-theme-button-color"
                    }`}
                  >
                    ADD TO CART
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </div>
        {windowWidth < 768 && (
          <>
            {/* h-[53vh] */}
            <div
              className={`shape-for-mobile absolute top-0 z-0  transition-all duration-700 right-0  h-[4.99%] w-[61.5%]  `}
            >
              <div className="stairs absolute top-0 left-0 h-full w-full pointer-events-none flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    {...anim(upStair, 5 - i)}
                    className={`h-full w-full relative ${
                      isDarkMode
                        ? "bg-dark-theme-first-color-dark"
                        : "bg-light-theme-first-color"
                    }`}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
export default SectionHome;
