import { useSelector } from "react-redux";
import { motion } from "framer-motion";
export default function GetInTouch() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <>
      <div
        className={`container p-8 rounded-xl endPhone:gap-4 endPhone:flex-col endPhone:p-4  font-custRoboto flex items-center justify-between ${
          isDarkMode
            ? "bg-dark-theme-first-color-dark"
            : "bg-light-theme-first-color"
        }`}
      >
        <div className="contnet flex flex-col gap-2 endTablentMinMax:w-3/5">
          <h2 className="font-semibold pb-2 border-b-4 text-light-theme-title-color text-3xl endPhone:text-xl border-b-light-theme-title-color">
            Still have questions?
          </h2>

          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <motion.button
          aria-label="Get In Touch"
          onClick={() => {
            setTimeout(() => {
              window.open("https://wa.me/qr/FGX577ZPQKY2A1", "_blank");
            }, 600);
          }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="py-4 px-8 rounded-lg text-light-theme-container-color bg-light-theme-title-color"
        >
          Get In Touch
        </motion.button>
      </div>
    </>
  );
}
