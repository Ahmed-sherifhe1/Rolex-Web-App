import { useEffect } from "react";
import GetInTouch from "../Support-Center Page/GetInTouch";
import HeaderSupport from "../Support-Center Page/HeaderSupport";
import Questions from "../Support-Center Page/Questions";
import Inner from "./layout/Inner/Inner";
import { useDispatch, useSelector } from "react-redux";
import { changeNav } from "../../RTK/slices/colorNavItem-slice";

export default function SupportCenter() {
  window.scrollTo(0, 0);
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
    dispatch(changeNav("supportCenter"));
  });
  return (
    <>
      <Inner extraCheese={true} refresh={true}>
        <HeaderSupport />
        <Questions />
        <GetInTouch />
      </Inner>
    </>
  );
}
