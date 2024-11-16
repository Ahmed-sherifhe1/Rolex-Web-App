import { useDispatch, useSelector } from "react-redux";
import Inner from "./layout/Inner/Inner";
import { motion } from "framer-motion";
import { useEffect } from "react";
import CopyRightCatLight from "../../assets/copyRight-lightMode.webp";
import CopyRightCatLDark from "../../assets/copyRight-darkMode.webp";
import { changeNav } from "../../RTK/slices/colorNavItem-slice";
export default function CopyRights() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let dispatch = useDispatch();
  useEffect(() => {
    if (isDarkMode) {
      document
        .querySelector(".cart")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".dark-btn")
        .classList.add("fill-dark-theme-title-color-dark");
      document
        .querySelector(".menu")
        .classList.add("fill-dark-theme-title-color-dark");
    } else {
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
    dispatch(changeNav("copyRight"));
  });
  return (
    <>
      <Inner refresh={true} extraCheese={true}>
        <section className="">
          <div className="container flex justify-between items-center endPhone:flex-col-reverse endPhone:gap-4">
            <div className="shape  size-[50rem] endMediumLap:size-[40rem] endTablentMinMax:size-[30rem] endPhone:size-[25rem] rounded-full fixed bg-dark-theme-first-color-dark filter blur-3xl -top-1/2 -left-1/2"></div>
            <div className="shape  size-[50rem] endMediumLap:size-[40rem] endTablentMinMax:size-[30rem] endPhone:size-[25rem] rounded-full fixed bg-dark-theme-first-color-dark filter blur-3xl -bottom-1/2 -right-1/2"></div>
            <div className="content z-10 w-1/2 endPhone:w-full flex flex-col gap-8 backdrop-blur-3xl p-8 rounded-xl endPhone:p-4">
              <div
                className={`content-1 flex flex-col gap-4 ${
                  isDarkMode
                    ? "text-dark-theme-title-color-dark"
                    : "text-light-theme-title-color"
                }`}
              >
                <h3
                  className={`text-4xl endMediumLap:text-3xl endTablentMinMax:text-2xl font-bold endPhone:text[1.375rem] ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-light-theme-first-color"
                  }`}
                >
                  Copyright Ownership
                </h3>
                <p className="endMediumLap:text-sm endTablentMinMax:text-xs endPhone:text-xs">
                  All content on this website, including text, images, and
                  logos, is the property of Rolex and is protected by copyright
                  laws. Unauthorized use of any content is strictly prohibited
                  and may result in legal action.
                </p>
              </div>
              <div
                className={`content-2 flex flex-col gap-4 ${
                  isDarkMode
                    ? "text-dark-theme-title-color-dark"
                    : "text-light-theme-title-color"
                }`}
              >
                <h3
                  className={`text-4xl endMediumLap:text-3xl endTablentMinMax:text-2xl endPhone:text[1.375rem] font-bold ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-light-theme-first-color"
                  }`}
                >
                  Terms of Use
                </h3>
                <p className="endMediumLap:text-sm endTablentMinMax:text-xs endPhone:text-xs">
                  <dl className="flex flex-col gap-4">
                    <dt>
                      By accessing this website, you agree to comply with the
                      following terms and conditions. Rolex reserves the right
                      to modify these terms at any time without prior notice.
                    </dt>
                    <dd style={{ "margin-inline-start": "40px" }}>
                      You may not reproduce, distribute, or transmit any content
                      without prior written permission from Rolex.
                    </dd>
                    <dd style={{ "margin-inline-start": "40px" }}>
                      You are responsible for maintaining the confidentiality of
                      any account information and for all activities that occur
                      under your account.
                    </dd>
                    <dd style={{ "margin-inline-start": "40px" }}>
                      Rolex is not liable for any damages or losses resulting
                      from your use of this website.
                    </dd>
                  </dl>
                </p>
              </div>
              <div
                className={`content-3 flex flex-col gap-4 ${
                  isDarkMode
                    ? "text-dark-theme-title-color-dark"
                    : "text-light-theme-title-color"
                }`}
              >
                <h3
                  className={`text-4xl endMediumLap:text-3xl endTablentMinMax:text-2xl endPhone:text[1.375rem] font-bold ${
                    isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-light-theme-first-color"
                  }`}
                >
                  Contact Information
                </h3>
                <p className="endMediumLap:text-sm endTablentMinMax:text-xs endPhone:text-xs">
                  If you have any questions or concerns regarding the copyright
                  or terms of use, please contact us at:
                </p>
                <ul>
                  <li>Rolex App</li>
                  <li>Britain, Hogsmeade</li>
                  <li>
                    Email:{" "}
                    <a
                      aria-label="Developer Email"
                      title="Send Me Email"
                      href="mailTo:ahmedsherifhe1@gmail.com"
                    >
                      ahmedsherifhe1@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <motion.button
                aria-label="Contact Us Button"
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setTimeout(() => {
                    window.open("https://linktr.ee/ahmedsherifhe1", "_blank");
                  }, 600);
                }}
                whileHover={{
                  backgroundColor: isDarkMode ? "#efbe8a" : "#ffb568",
                  color: "#2e2e2e",
                }}
                transition={{ duration: 0.7, type: "spring" }}
                className={`p-4 rounded-full border-2 w-1/2 endPhone:text-base endPhone:p-2 endPhone:w-full font-bold text-2xl endTablentMinMax:p-2 endTablentMinMax:text-base ${
                  isDarkMode
                    ? "text-dark-theme-first-color-dark border-dark-theme-first-color-dark "
                    : "text-light-theme-first-color border-light-theme-first-color "
                }`}
              >
                Contact Us
              </motion.button>
            </div>
            <div className="cat flex justify-center items-center w-1/2 endPhone:w-full">
              <img
                width={615}
                height={365.78}
                src={isDarkMode ? CopyRightCatLDark : CopyRightCatLight}
                alt="copyRight Cat"
              />
            </div>
          </div>
        </section>
      </Inner>
    </>
  );
}
