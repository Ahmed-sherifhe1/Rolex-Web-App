import { useSelector } from "react-redux";

export default function HeaderAbout() {
  let isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <>
      <header
        className={`py-16 text-light-theme-title-color font-custRoboto ${
          isDarkMode
            ? "bg-dark-theme-first-color-dark"
            : "bg-light-theme-first-color"
        }`}
      >
        <div className="container text-center flex flex-col gap-4">
          <div className="title flex flex-col gap-2">
            <h2 className="text-4xl font-semibold">About Us</h2>
            <hr className="h-[2px] border-0 bg-light-theme-title-color w-[10vw] my-0 mx-auto endMediumLap:w-[15vw] endTablentMinMax:w-[20vw] endPhone:w-3/5" />
          </div>
          <div className="container">
            <p className="endPhone:text-sm">
              Rolex watches are crafted with precision, elegance, and
              durability, offering timeless luxury and unmatched quality for
              discerning individuals worldwide.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
