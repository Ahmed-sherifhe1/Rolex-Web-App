import { useSelector } from "react-redux";
import ndWatch from "../../assets/nd-watch.webp";
import rdWatch from "../../assets/rd-watch.webp";
import thWatch from "../../assets/th-watch.webp";
import FeaturedWatchComponent from "./FeaturedWatchComponent";
import FlipText from "../Main Components/layout/Inner/FlipText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function SectionFeatured({ windowWidth, windowHeight }) {
  let FeaturedWatches = [
    { id: 1, img: ndWatch, title: "JAZZMASTER", price: "$1050" },
    { id: 2, img: rdWatch, title: "INGERSOLL", price: "$250" },
    { id: 3, img: thWatch, title: "ROSE GOLD", price: "$890" },
  ];
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let productSelector = useSelector((state) => state.products);
  let { scrollY } = useScroll();
  let targetRef = useRef();
  let [height, setHeight] = useState(0);
  useEffect(() => {
    let totalHeight =
      targetRef.current.offsetTop + targetRef.current.offsetHeight;
    // setHeight(totalHeight - window.innerHeight);
    setHeight(totalHeight - windowHeight);
  }, []);
  let y = useTransform(
    scrollY,
    [0, 0.16, 0.25, (1 / 3) * height],
    ["200px", "200px", "200px", "0px"]
  );
  let opacity = useTransform(
    scrollY,
    [0, 0.16, 0.25, (1 / 3) * height, (3 / 3) * height + 30, height],
    [0, 0, 0, 1, 1, 0]
  );
  let y1 = useTransform(
    scrollY,
    [0, (1 / 3) * height, (1 / 3) * height + 0.09, (2 / 3) * height],
    ["200px", "200px", "200px", "0px"]
  );
  let opacity2 = useTransform(
    scrollY,
    [
      0,
      (1 / 3) * height,
      (1 / 3) * height + 0.09,
      (2 / 3) * height,
      (3 / 3) * height + 30,
      height,
    ],
    [0, 0, 0, 1, 1, 0]
  );
  let y2 = useTransform(
    scrollY,
    [0, (2 / 3) * height, (2 / 3) * height + 0.09, (3 / 3) * height],
    ["200px", "200px", "200px", "0px"]
  );
  let opacity3 = useTransform(
    scrollY,
    [
      0,
      (1 / 3) * height,
      (2 / 3) * height,
      (2 / 3) * height + 0.09,
      (3 / 3) * height + 30,
      height,
    ],
    [0, 0, 0, 0, 1, 0]
  );
  return (
    <>
      <section
        ref={targetRef}
        className="featured h-[150vh] endPhone:h-[150vh] relative"
        id="featured"
      >
        <div className="container sticky top-36 endPhone:top-16">
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{ width: windowWidth < 768 ? "20%" : "5%" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className={` ${
              isDarkMode
                ? "bg-dark-theme-first-color-dark"
                : "bg-light-theme-first-color"
            }`}
          ></motion.hr>
          <h3
            className={` ${
              isDarkMode
                ? "text-dark-theme-title-color-dark"
                : "text-light-theme-title-color"
            }`}
          >
            <FlipText>FEATURED</FlipText>
          </h3>
          <div className="container-cards ">
            <FeaturedWatchComponent
              style={{
                y,
                opacity,
              }}
              data={FeaturedWatches[0]}
              dataCart={productSelector[0]}
            />
            <FeaturedWatchComponent
              style={{
                y: y1,
                opacity: opacity2,
              }}
              data={FeaturedWatches[1]}
              dataCart={productSelector[2]}
            />
            <FeaturedWatchComponent
              style={{
                y: y2,
                opacity: opacity3,
              }}
              data={FeaturedWatches[2]}
              dataCart={productSelector[4]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default SectionFeatured;
