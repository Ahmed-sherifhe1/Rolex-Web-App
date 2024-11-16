import { lazy, useEffect } from "react";
import SectionFeatured from "../Home Page/SectionFeatured";
import SectionHome from "../Home Page/SectionHome";
let SectionReviews = lazy(() => import("../Home Page/SectionReviews"));
let SecSubs = lazy(() => import("../Home Page/SectionSubscribe"));
let SecProducts = lazy(() => import("../Home Page/SectionProducts"));
let SectionOurStory = lazy(() => import("../Home Page/SectionOurStory"));
let SecNewArivals = lazy(() => import("../Home Page/SectionNewArivals"));
import Inner from "./layout/Inner/Inner";
import ScrollHorizontal from "./layout/Inner/ScrollHorizontal";
import { useDispatch } from "react-redux";
import { changeNav } from "../../RTK/slices/colorNavItem-slice";
function HomePage({ windowWidth, windowHeight }) {
  let dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("colorNavItem", "home");
    dispatch(changeNav("home"));
  }, []);
  useEffect(() => {
    document
      .querySelector(".cart")
      .classList.remove("fill-dark-theme-title-color-dark");
    document
      .querySelector(".dark-btn")
      .classList.remove("fill-dark-theme-title-color-dark");
    document
      .querySelector(".menu")
      .classList.remove("fill-dark-theme-title-color-dark");
  });
  return (
    <>
      <div
        className="w-full my-0 mx-auto  absolute"
        onClick={() => {
          document.querySelector("#cart")?.classList.add("-right-full");
          document.querySelector("#cart")?.classList.remove("right-0");
        }}
      >
        <Inner
          extraCheese={true}
          refresh={true}
          id="home"
          className="relative overflow-x-clip"
        >
          <SectionHome windowWidth={windowWidth} />
          <SectionFeatured
            windowWidth={windowWidth}
            windowHeight={windowHeight}
          />
          <ScrollHorizontal windowHeight={windowHeight}>
            <SectionOurStory windowWidth={windowWidth} />
          </ScrollHorizontal>
          <SecProducts />
          <ScrollHorizontal windowHeight={windowHeight}>
            <SectionReviews windowWidth={windowWidth} />
          </ScrollHorizontal>
          <SecNewArivals />
          <SecSubs />
        </Inner>
      </div>
    </>
  );
}

export default HomePage;
