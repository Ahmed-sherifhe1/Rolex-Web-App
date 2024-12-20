import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
// import watchSplash from "../../assets/splash-watch.webp";
import { useEffect, useRef, useState } from "react";
export default function Splash({ show }) {
  let [splash, setSplash] = useState(true);
  const TARGET_TEXT = "rolex watches";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;

  const CHARS = "rolex watches";

  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  useEffect(() => {
    document.querySelector("body").style.overflowX = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    setTimeout(() => {
      document.querySelector("body").style.overflowY = "auto";
    }, 4500);
    setTimeout(() => {
      scramble();
    }, 3500);
    setTimeout(() => {
      stopScramble();
    }, 4000);
    setTimeout(() => {
      setSplash(false);
      localStorage.setItem("splashShown", false);
    }, 5200);
  }, []);
  return (
    <>
      <AnimatePresence>
        {splash && (
          <main className={`splash-screen ${show && "hidden"}`}>
            <motion.div
              initial={{
                backgroundImage: `linear-gradient(-45deg, ${
                  isDarkMode ? "#1f1f1f" : "#fcfcfc"
                } 100%, ${isDarkMode ? "#EFBE8A" : "#FFB568"} 100%)`,
              }}
              animate={{
                backgroundImage: `linear-gradient(-45deg, ${
                  isDarkMode ? "#1f1f1f" : "#fcfcfc"
                } 50%, ${isDarkMode ? "#EFBE8A" : "#FFB568"} 100%)`,
              }}
              exit={{
                opacity: 0,
                filter: "brightness(0)",
                transition: { duration: 0.7, delay: 0 },
              }}
              transition={{ duration: 0.5, delay: 1.75 }}
              className={`main-background absolute  w-full h-[100vh] overflow-hidden z-[99999999999] flex items-center justify-center ${
                isDarkMode
                  ? "bg-dark-theme-body-color-dark"
                  : "bg-light-theme-body-color"
              }`}
            >
              <div className="watch absolute flex flex-col h-[100dvh] justify-center items-center">
                <motion.h2
                  initial={{ opacity: 0, scramble }}
                  animate={{ opacity: 1, stopScramble }}
                  transition={{ delay: 3.5, duration: 0.5 }}
                  className={`text-rolex-splash uppercase font-bold left-[2rem] endMediumLap:left-44 endTablentMinMax:text-[2.5rem]  endTablentMinMax:left-52 endPhone:text-[1.5rem] endPhone:left-64 endMediumLap:top-4 absolute top-8 text-[4rem] endMediumLap:text-[3rem] italic ${
                    isDarkMode
                      ? "text-dark-theme-body-color-dark"
                      : "text-light-theme-body-color"
                  }`}
                >
                  {text}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 3, rotate: 30 }}
                  animate={{ opacity: 1, scale: 0.3, rotate: 0 }}
                  transition={{
                    type: "spring",
                    delay: 2.5,
                    duration: 1,
                    stiffness: 50,
                    mass: 0.5,
                    damping: 7,
                  }}
                  className="endPhone:w-[50rem] endMediumLap:w-[80rem] endTablentMinMax:w-[70rem]"
                >
                  <img
                    // width={504}
                    // height={672}
                    width={1790}
                    height={1986}
                    src="https://i.ibb.co/dLvXMs9/splash-watch.webp"
                    alt="watch for splash screen"
                    fetchPriority="high"
                    rel="preload"
                    decoding="async"
                  />
                  {/* <img
                    // width={504}
                    // height={672}
                    src={watchSplash}
                    alt="watch for splash screen"
                    fetchPriority="high"
                    rel="preload"
                    decoding="async"
                  /> */}
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 0.5 }}
                  className={`uppercase font-bold right-[2rem] endMediumLap:text-[3rem] endTablentMinMax:text-[2.5rem] endTablentMinMax:right-52 endPhone:text-[1.5rem] endPhone:right-64 text-transparent text-stroke-[1px] endMediumLap:right-44 endMediumLap:bottom-4 absolute bottom-8 text-[4rem] italic ${
                    isDarkMode
                      ? "text-stroke-dark-theme-first-color-dark"
                      : "text-stroke-light-theme-first-color"
                  }`}
                >
                  rolex watches
                </motion.h2>
              </div>
              <motion.svg
                role="img"
                aria-labelledby="titleID descID"
                initial={{ opacity: 0, translateY: 100 }}
                animate={{
                  opacity: [0, 0, 0.5, 1, 1, 1, 1, 0],
                  translateY: [100, 67, 34, 0, 0, 0, 0, 0],
                }}
                transition={{ duration: 2 }}
                width="376"
                height="320"
                viewBox="0 0 76 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="titleID">Logo Rolex</title>
                <desc id="descID">Logo of the website</desc>

                <path
                  className={
                    isDarkMode
                      ? "fill-dark-theme-title-color-dark"
                      : "fill-light-theme-title-color"
                  }
                  d="M29.2266 10.8359H27.3594V15H25.0156V3.625H29.2422C30.5859 3.625 31.6224 3.92448 32.3516 4.52344C33.0807 5.1224 33.4453 5.96875 33.4453 7.0625C33.4453 7.83854 33.276 8.48698 32.9375 9.00781C32.6042 9.52344 32.0964 9.9349 31.4141 10.2422L33.875 14.8906V15H31.3594L29.2266 10.8359ZM27.3594 8.9375H29.25C29.8385 8.9375 30.2943 8.78906 30.6172 8.49219C30.9401 8.1901 31.1016 7.77604 31.1016 7.25C31.1016 6.71354 30.9479 6.29167 30.6406 5.98438C30.3385 5.67708 29.8724 5.52344 29.2422 5.52344H27.3594V8.9375ZM45.2181 9.57031C45.2181 10.6901 45.0202 11.6719 44.6244 12.5156C44.2285 13.3594 43.6608 14.0104 42.9213 14.4688C42.1869 14.9271 41.3431 15.1562 40.39 15.1562C39.4473 15.1562 38.6061 14.9297 37.8666 14.4766C37.127 14.0234 36.5541 13.3776 36.1478 12.5391C35.7416 11.6953 35.5358 10.7266 35.5306 9.63281V9.07031C35.5306 7.95052 35.7311 6.96615 36.1322 6.11719C36.5384 5.26302 37.1088 4.60938 37.8431 4.15625C38.5827 3.69792 39.4265 3.46875 40.3744 3.46875C41.3223 3.46875 42.1634 3.69792 42.8978 4.15625C43.6374 4.60938 44.2077 5.26302 44.6088 6.11719C45.015 6.96615 45.2181 7.94792 45.2181 9.0625V9.57031ZM42.8431 9.05469C42.8431 7.86198 42.6296 6.95573 42.2025 6.33594C41.7754 5.71615 41.166 5.40625 40.3744 5.40625C39.5879 5.40625 38.9811 5.71354 38.5541 6.32812C38.127 6.9375 37.9108 7.83333 37.9056 9.01562V9.57031C37.9056 10.7318 38.1192 11.6328 38.5463 12.2734C38.9733 12.9141 39.5879 13.2344 40.39 13.2344C41.1765 13.2344 41.7806 12.9271 42.2025 12.3125C42.6244 11.6927 42.8379 10.7917 42.8431 9.60938V9.05469ZM49.905 13.1172H54.8816V15H47.5613V3.625H49.905V13.1172ZM63.7169 10.0703H59.2169V13.1172H64.4981V15H56.8731V3.625H64.4825V5.52344H59.2169V8.23438H63.7169V10.0703ZM70.5834 7.54688L72.7163 3.625H75.4116L72.0991 9.26562L75.4975 15H72.7709L70.5834 11.0156L68.3959 15H65.6694L69.0678 9.26562L65.7553 3.625H68.4506L70.5834 7.54688Z"
                  fill="#2E2E2E"
                />
                <path
                  className={
                    isDarkMode
                      ? "fill-dark-theme-title-color-dark"
                      : "fill-light-theme-title-color"
                  }
                  d="M10.8333 6.66669H9.16663V10.8334H13.3333V9.16669H10.8333V6.66669Z"
                  fill="#2E2E2E"
                />
                <path
                  className={
                    isDarkMode
                      ? "fill-dark-theme-title-color-dark"
                      : "fill-light-theme-title-color"
                  }
                  d="M16.6658 10C16.6658 7.53919 15.3224 5.39169 13.3333 4.23669V2.50002C13.3333 2.27901 13.2455 2.06704 13.0892 1.91076C12.9329 1.75448 12.721 1.66669 12.4999 1.66669H7.49994C7.27893 1.66669 7.06696 1.75448 6.91068 1.91076C6.7544 2.06704 6.66661 2.27901 6.66661 2.50002V4.23585C4.67744 5.39085 3.33411 7.53919 3.33411 10C3.33511 11.1916 3.65533 12.3611 4.26148 13.387C4.86762 14.4129 5.73754 15.2576 6.78077 15.8334H6.66661V17.5342C6.66661 17.7552 6.7544 17.9672 6.91068 18.1234C7.06696 18.2797 7.27893 18.3675 7.49994 18.3675H12.4999C12.721 18.3675 12.9329 18.2797 13.0892 18.1234C13.2455 17.9672 13.3333 17.7552 13.3333 17.5342V15.8334H13.2174C14.2612 15.258 15.1316 14.4134 15.738 13.3875C16.3445 12.3616 16.6649 11.1918 16.6658 10ZM9.99911 14.9992C8.6738 14.9976 7.40322 14.4704 6.46616 13.5332C5.5291 12.596 5.0021 11.3253 5.00077 10C5.0021 8.67471 5.5291 7.40405 6.46616 6.46683C7.40322 5.52962 8.6738 5.0024 9.99911 5.00085C12.7574 5.00085 14.9991 7.24335 14.9991 10C14.9978 11.3256 14.4705 12.5965 13.5331 13.5338C12.5957 14.4711 11.3247 14.9981 9.99911 14.9992Z"
                  fill="#2E2E2E"
                />
              </motion.svg>
            </motion.div>
          </main>
        )}
      </AnimatePresence>
    </>
  );
}
