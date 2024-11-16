import { useSelector } from "react-redux";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import FlipTextHover from "./layout/Inner/FlipTextHover";
export default function Footer() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let colorNavItem = useSelector((state) => state.colorNav);
  return (
    <>
      <footer className="z-30">
        <div
          className={`container container-footer ${
            isDarkMode
              ? "text-dark-theme-title-color-dark"
              : "text-light-theme-title-color"
          }`}
        >
          <div className="card">
            <h3>Our information</h3>
            <ul
              className={` ${
                isDarkMode
                  ? "text-dark-theme-text-color-dark"
                  : "text-light-theme-text-color"
              }`}
            >
              <li>
                <FlipTextHover>221B,&nbsp;Baker&nbsp;Street</FlipTextHover>
              </li>
              <li>
                <FlipTextHover>London,&nbsp;NW1-6XE</FlipTextHover>
              </li>
              <li>
                <a
                  title="Call Me"
                  aria-label="Phone Number"
                  href="tel:+201066146867"
                >
                  <FlipTextHover>106-614-6867</FlipTextHover>
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>About Us</h3>
            <ul
              className={` ${
                isDarkMode
                  ? "text-dark-theme-text-color-dark"
                  : "text-light-theme-text-color"
              }`}
            >
              <li
                onClick={() => {
                  localStorage.removeItem("delayEveryThing");
                }}
                className={
                  colorNavItem == "supportCenter"
                    ? isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-light-theme-first-color"
                    : isDarkMode
                    ? "text-dark-theme-text-color-dark"
                    : "text-light-theme-text-color"
                }
              >
                <Link to={"/support_senter"}>
                  <FlipTextHover>Support&nbsp;Center</FlipTextHover>
                </Link>
              </li>
              <li
                onClick={() => {
                  localStorage.removeItem("delayEveryThing");
                }}
                className={
                  colorNavItem == "aboutUs"
                    ? isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-light-theme-first-color"
                    : isDarkMode
                    ? "text-dark-theme-text-color-dark"
                    : "text-light-theme-text-color"
                }
              >
                <Link to={"/about_us"}>
                  <FlipTextHover>About&nbsp;Us</FlipTextHover>
                </Link>
              </li>
              <li
                onClick={() => {
                  localStorage.removeItem("delayEveryThing");
                }}
                className={
                  colorNavItem == "copyRight"
                    ? isDarkMode
                      ? "text-dark-theme-first-color-dark"
                      : "text-light-theme-first-color"
                    : isDarkMode
                    ? "text-dark-theme-text-color-dark"
                    : "text-light-theme-text-color"
                }
              >
                <Link to={"/copyrights"}>
                  <FlipTextHover>Copy&nbsp;Right</FlipTextHover>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Product</h3>
            <ul
              className={`font-medium ${
                isDarkMode
                  ? "text-dark-theme-text-color-dark"
                  : "text-light-theme-text-color"
              }`}
            >
              <li className="hover:text-[#7B1D80]">
                <a
                  aria-label="MSP Website"
                  title="Visit MSP Website"
                  href="https://www.msp-alazhar.tech/"
                  target="_blank"
                >
                  <FlipTextHover>
                    MSP&nbsp;AI-Azhar&nbsp;University
                  </FlipTextHover>
                </a>
              </li>
              <li
                className={isDarkMode ? "hover:text-white" : "hover:text-black"}
              >
                <a
                  aria-label="The Mad Hatter Website"
                  title="Visit THe Mad Hatter Website"
                  href="https://the-mad-hatter.vercel.app/"
                  target="_blank"
                >
                  <FlipTextHover>THE&nbsp;MAD&nbsp;HATTER*</FlipTextHover>
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <h3>Social</h3>
            <div
              className={` z-30 ${
                isDarkMode
                  ? "text-dark-theme-text-color-dark"
                  : "text-light-theme-text-color"
              }`}
            >
              <a
                aria-label="Facebook"
                title="Visit Facebook"
                href="https://www.facebook.com/profile.php?id=100012178745640&mibextid=ZbWKwL"
                target="_blank"
                className={` ${
                  isDarkMode ? "hover:text-[#365899]" : " hover:text-[#4267B2]"
                }`}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                aria-label="X-Twitter"
                title="Visit X-Twitter"
                href="https://x.com/AhmedSherifhe1?t=5ZCJVLTCOHDacpU1VnobmQ&s=09"
                target="_blank"
                className={` ${
                  isDarkMode ? "hover:text-white" : "hover:text-black"
                }`}
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                aria-label="Instagram"
                title="Visit Instagram"
                href="https://tr.ee/qX42JPtLXJ"
                target="_blank"
                className="hover:text-[#C13584]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <i></i>
            </div>
          </div>
        </div>
        <div className="container container-copyrights ">
          <hr
            className={` ${
              isDarkMode
                ? "bg-dark-theme-border-color-dark"
                : "bg-light-theme-border-color"
            }`}
          ></hr>
          <span className="end-footer">
            &copy;{" "}
            <em>
              <span>
                Coding By{" "}
                <b>
                  <span
                    className={`myName  ${
                      isDarkMode
                        ? "text-shadow-dark-theme-first-color-dark text-white"
                        : "text-shadow-dark-theme-first-color-dark text-dark-theme-first-color-action-dark"
                    }`}
                  >
                    <a
                      aria-label="LinkedIn Account"
                      title="Visit LinkedIn"
                      href="https://instagram.com/ahhhmmeed_sheerif?igshid=NGVhN2U2NjQ0Yg=="
                      target="_blank"
                    >
                      Ahmed Sherif
                    </a>
                  </span>
                  .
                </b>
              </span>
            </em>{" "}
            Design from{" "}
            <a
              aria-label="Figma Community"
              title="Visit Figma Community to get designs like these :)"
              href="https://www.figma.com/community"
            >
              <b>Figma Community </b>
            </a>
            All rigths reserved
          </span>
        </div>
      </footer>
    </>
  );
}
