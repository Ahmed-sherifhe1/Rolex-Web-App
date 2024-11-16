import { lazy, useEffect } from "react";
import HeaderAbout from "../About-us Page/HeaderAbout";
// import Reckless from "../About-us Page/Reckless";
const Reckless = lazy(() => import("../About-us Page/Reckless"));
import Inner from "./layout/Inner/Inner";
import { useDispatch, useSelector } from "react-redux";
import { changeNav } from "../../RTK/slices/colorNavItem-slice";

export default function About({ windowHeight }) {
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
    dispatch(changeNav("aboutUs"));
  });
  return (
    <>
      <Inner extraCheese={true} refresh={true}>
        <HeaderAbout />
        <Reckless windowHeight={windowHeight} />
      </Inner>
    </>
  );
}
