import { lazy } from "react";
import { useSelector } from "react-redux";
// import Product from "./Product";
const Product = lazy(() => import("./Product"));
import watch6 from "../../assets/watch-6.webp";
import watch7 from "../../assets/watch-7.webp";
import watch8 from "../../assets/watch-8.webp";
import watch9 from "../../assets/watch-9.webp";
import watch10 from "../../assets/watch-10.webp";
// import FlipText from "../Main Components/layout/Inner/FlipText";
const FlipText = lazy(() => import("../Main Components/layout/Inner/FlipText"));
export default function SecProducts() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  let myArr = [
    { image: watch6, title: "SPIRIT ROSE", price: "$1500", num: 5 },
    { image: watch7, title: "KHAKI PILOT", price: "$1350", num: 7 },
    { image: watch8, title: "JUBILEE BLACK", price: "$870", num: 8 },
    { image: watch9, title: "FOSIL ME3", price: "$650", num: 10 },
    { image: watch10, title: "DUCHEN", price: "$950", num: 11 },
  ];
  return (
    <>
      <section
        className={`products ${
          isDarkMode ? "" : "bg-light-theme-container-color"
        }`}
      >
        <div className="container">
          <hr
            className={` ${
              isDarkMode
                ? "bg-dark-theme-first-color-dark"
                : "bg-light-theme-first-color"
            }`}
          ></hr>
          <h3
            className={`  ${
              isDarkMode
                ? "text-dark-theme-title-color-dark"
                : "text-light-theme-title-color"
            }`}
          >
            <FlipText>PRODUCTS</FlipText>
          </h3>
          <div className="container-cards  ">
            {myArr.map((productData, index) => (
              <Product data={productData} index={index} key={index} />
            ))}
            <Product data={{ image: "", title: "", price: "" }} />
          </div>
        </div>
      </section>
    </>
  );
}
