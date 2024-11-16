import watch11 from "../../assets/watch-11.webp";
import Opinion from "./Opinion";
import person1 from "../../assets/person-1.webp";
import person2 from "../../assets/person-2.webp";
import person3 from "../../assets/person-3.webp";
import person4 from "../../assets/person-4.webp";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
export default function SectionReviews(windowWidth) {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let isDragging = false;
  let startX;
  let startScrollLeft;
  let firstCard;

  useEffect(() => {
    firstCard = document.querySelector(".opinion").offsetWidth;
    document.querySelectorAll(".buttons button").forEach((e) => {
      e.onclick = () => {
        e.id === "left"
          ? (document.querySelector(".container-opinions").scrollLeft -=
              firstCard)
          : (document.querySelector(".container-opinions").scrollLeft +=
              firstCard);
      };
    });
    if (document.querySelector(".container-opinions").scrollLeft == 0) {
      document.querySelector("#left").style.opacity = 0;
      document.querySelector("#left").style.cursor = "auto";
    }
  }, []);

  document.onmouseup = () => {
    isDragging = false;
  };
  let { scrollY } = useScroll();
  let scrollState = useSelector(
    (state) => state.scrollHorizontal[state.scrollHorizontal.length - 1]
  );
  let heightStory = scrollState && scrollState.realHeight;
  let topStory = scrollState && scrollState.top;
  let clip = useTransform(scrollY, [topStory, heightStory + 20], [500, 0]);
  let clipPath = useMotionTemplate`polygon(${clip}% 0%, 100% 0%, 100% 100%, ${clip}% 100%)`;
  let clip2 = useTransform(scrollY, [topStory, heightStory + 20], [-500, 100]);
  let clipPath2 = useMotionTemplate`polygon(0% 0%, ${clip2}% 0%, ${clip2}% 100%, 0% 100%)`;
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
  return (
    <>
      <motion.section
        style={{
          opacity: windowWidth.windowWidth <= 767 ? opacityMobile : opacity,
        }}
        className="sec-opinions w-[100vw]"
      >
        <div className="container container-sec-opinions">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              y: 0,
              opacity: [0, 0, 0, 1],
              transition: { duration: 0.7 },
            }}
            className="opinions-and-btns"
          >
            <span
              className={
                isDarkMode
                  ? "bg-dark-theme-container-color-dark border-dark-theme-border-color-dark"
                  : "bg-light-theme-container-color border-light-theme-border-color"
              }
            >
              <svg
                role="img"
                aria-labelledby="titleID descID"
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="titleID">Qoutation Mark</title>
                <desc id="descID">Qoutation Mark as a shape of design</desc>

                <path
                  className={
                    isDarkMode
                      ? "fill-dark-theme-first-color-dark "
                      : "fill-light-theme-first-color "
                  }
                  d="M5.4999 6.00003C5.2769 6.00003 5.0629 6.03403 4.8499 6.06503C4.9189 5.83303 4.9899 5.59703 5.1039 5.38503C5.2179 5.07703 5.3959 4.81003 5.5729 4.54103C5.7209 4.25003 5.9819 4.05303 6.1739 3.80403C6.3749 3.56203 6.6489 3.40103 6.8659 3.20003C7.0789 2.99003 7.3579 2.88503 7.5799 2.73703C7.8119 2.60403 8.0139 2.45703 8.2299 2.38703L8.7689 2.16503L9.2429 1.96803L8.7579 0.0300293L8.1609 0.174029C7.9699 0.222029 7.7369 0.278029 7.4719 0.345029C7.2009 0.395029 6.9119 0.532029 6.5899 0.657029C6.2719 0.799029 5.9039 0.895029 5.5619 1.12303C5.2179 1.34103 4.8209 1.52303 4.4709 1.81503C4.1319 2.11603 3.7229 2.37703 3.4209 2.76003C3.0909 3.11803 2.7649 3.49403 2.5119 3.92203C2.2189 4.33003 2.0199 4.77803 1.8099 5.22103C1.6199 5.66403 1.4669 6.11703 1.3419 6.55703C1.1049 7.43903 0.998901 8.27703 0.957901 8.99403C0.923901 9.71203 0.943901 10.309 0.985901 10.741C1.0009 10.945 1.0289 11.143 1.0489 11.28L1.0739 11.448L1.0999 11.442C1.27776 12.2729 1.6872 13.0364 2.28086 13.6442C2.87452 14.2521 3.62814 14.6794 4.45454 14.8769C5.28094 15.0743 6.14635 15.0337 6.95066 14.7599C7.75496 14.486 8.46531 13.99 8.99951 13.3293C9.53371 12.6686 9.86995 11.8701 9.96932 11.0263C10.0687 10.1825 9.92714 9.32779 9.56103 8.56105C9.19493 7.79432 8.61924 7.14689 7.90055 6.69368C7.18187 6.24046 6.34956 5.99997 5.4999 6.00003ZM16.4999 6.00003C16.2769 6.00003 16.0629 6.03403 15.8499 6.06503C15.9189 5.83303 15.9899 5.59703 16.1039 5.38503C16.2179 5.07703 16.3959 4.81003 16.5729 4.54103C16.7209 4.25003 16.9819 4.05303 17.1739 3.80403C17.3749 3.56203 17.6489 3.40103 17.8659 3.20003C18.0789 2.99003 18.3579 2.88503 18.5799 2.73703C18.8119 2.60403 19.0139 2.45703 19.2299 2.38703L19.7689 2.16503L20.2429 1.96803L19.7579 0.0300293L19.1609 0.174029C18.9699 0.222029 18.7369 0.278029 18.4719 0.345029C18.2009 0.395029 17.9119 0.532029 17.5899 0.657029C17.2729 0.800029 16.9039 0.895029 16.5619 1.12403C16.2179 1.34203 15.8209 1.52403 15.4709 1.81603C15.1319 2.11703 14.7229 2.37803 14.4209 2.76003C14.0909 3.11803 13.7649 3.49403 13.5119 3.92203C13.2189 4.33003 13.0199 4.77803 12.8099 5.22103C12.6199 5.66403 12.4669 6.11703 12.3419 6.55703C12.1049 7.43903 11.9989 8.27703 11.9579 8.99403C11.9239 9.71203 11.9439 10.309 11.9859 10.741C12.0009 10.945 12.0289 11.143 12.0489 11.28L12.0739 11.448L12.0999 11.442C12.2778 12.2729 12.6872 13.0364 13.2809 13.6442C13.8745 14.2521 14.6281 14.6794 15.4545 14.8769C16.2809 15.0743 17.1463 15.0337 17.9507 14.7599C18.755 14.486 19.4653 13.99 19.9995 13.3293C20.5337 12.6686 20.8699 11.8701 20.9693 11.0263C21.0687 10.1825 20.9271 9.32779 20.561 8.56105C20.1949 7.79432 19.6192 7.14689 18.9006 6.69368C18.1819 6.24046 17.3496 5.99997 16.4999 6.00003Z"
                  fill="#EFBE8A"
                />
              </svg>
            </span>
            <div
              className={`container-opinions ${
                isDarkMode
                  ? "text-dark-theme-title-color-dark"
                  : "text-light-theme-title-color"
              }`}
              onMouseDown={(e) => {
                isDragging = true;
                startX = e.pageX;
                startScrollLeft = document.querySelector(
                  ".container-opinions"
                ).scrollLeft;
              }}
              onScroll={() => {
                if (
                  document.querySelector(".container-opinions").scrollLeft == 0
                ) {
                  document.querySelector("#left").style.opacity = 0;
                  document.querySelector("#left").style.cursor = "auto";
                } else {
                  document.querySelector("#left").style.opacity = 1;
                  document.querySelector("#left").style.cursor = "pointer";
                }
                if (
                  (
                    document.querySelector(".container-opinions").scrollLeft /
                    document.querySelector(".container-opinions").scrollWidth
                  ).toFixed(2) == 0.75
                ) {
                  document.querySelector("#right").style.opacity = 0;
                  document.querySelector("#right").style.cursor = "auto";
                } else {
                  document.querySelector("#right").style.opacity = 1;
                  document.querySelector("#right").style.cursor = "pointer";
                }
              }}
              onMouseMove={(e) => {
                if (!isDragging) return;
                document.querySelector(".container-opinions").scrollLeft =
                  startScrollLeft - (e.pageX - startX);
              }}
            >
              <div className="opinions z-50">
                <Opinion
                  data={{
                    name: "Lee Doe",
                    position: "Director of a company",
                    image: person1,
                    comment: `They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.`,
                    date: "March 27. 2021",
                  }}
                />
                <Opinion
                  data={{
                    name: "Samantha Mey",
                    position: "Brand Ambassador",
                    image: person2,
                    comment: `They are the finest watches you can get, always updated with the latest trends and news, priced comfortably, and especially attentive to your questions, providing excellent customer service.`,
                    date: "December 1. 2018",
                  }}
                />
                <Opinion
                  data={{
                    name: "Lee Doe",
                    position: "Managing Director, France",
                    image: person3,
                    comment: `These watches are the best you can get, always keeping up with the latest trends and news, affordably priced, and particularly attentive to your needs, offering great customer service and always ready to address your questions.`,
                    date: "Jule 27. 2024",
                  }}
                />
                <Opinion
                  data={{
                    name: "Ahmed Sherif",
                    position: "Chairman of the Board",
                    image: person4,
                    comment: `Orange cats are the friendliest companions, always bringing joy with their playful antics and affectionate nature. They are low-maintenance, love to cuddle, and their vibrant fur adds a splash of color to your life.`,
                    date: "May 21. 2023",
                  }}
                />
              </div>
            </div>
            <div className="buttons z-50">
              <button
                aria-label="Go Left"
                id="left"
                className={
                  isDarkMode
                    ? "bg-dark-theme-container-color-dark"
                    : "bg-light-theme-container-color"
                }
              >
                <svg
                  role="img"
                  aria-labelledby="titleID descID"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="titleID">Arrow Left</title>
                  <desc id="descID">Arrow to scroll Cards Of opinion left</desc>
                  <path
                    d="M8.121 12L3.828 7.707H13.414V5.707H3.828L8.121 1.414L6.707 0L0 6.707L6.707 13.414L8.121 12Z"
                    fill="#EFBE8A"
                  />
                </svg>
              </button>
              <button
                aria-label="Go Right"
                id="right"
                className={
                  isDarkMode
                    ? "bg-dark-theme-container-color-dark"
                    : "bg-light-theme-container-color"
                }
              >
                <svg
                  role="img"
                  aria-labelledby="titleID descID"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="titleID">Arrow Right</title>
                  <desc id="descID">
                    Arrow to scroll Cards Of opinion Right
                  </desc>

                  <path
                    d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z"
                    fill="#EFBE8A"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
          <div className="watch">
            <motion.img
              loading="lazy"
              width={450}
              height={450}
              style={{ clipPath }}
              src={watch11}
              alt="Man wears watch"
            />
            <motion.div
              style={{ clipPath: clipPath2 }}
              className={`shape  ${
                isDarkMode
                  ? "bg-dark-theme-first-color-dark"
                  : "bg-light-theme-first-color"
              }`}
            ></motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
